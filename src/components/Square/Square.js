import React, { useContext, useEffect } from 'react';
import { GameContext } from '../../context/GameContext';
import Board from '../Board/Board';
import './Square.css';

export default function Square({ square }) {
  const { active, setActive, currentPlayer, setCurrentPlayer, board, setBoard, setGameMessage } = useContext(GameContext);

  const handleClick = () => {
    const clickedSquare = square.place;
    if (square.content) return;
    if (!active) return;
    setBoard((prevState) => (
      prevState.map((sqr) => (
        sqr.place === clickedSquare ? { ...sqr, content: `${currentPlayer}` } : sqr
      ))
    ));

    setCurrentPlayer((prevState) => (
      prevState === 'X' ? 'O' : 'X'
    ));
  };

  function matchThree(a, b, c) {
    if (!a || !b || !c) return false;
    return ((a === b) && (b === c));
  }

  function checkWin() {
    const win = 
      active ?
        matchThree(board[0].content, board[1].content, board[2].content) ||
        matchThree(board[3].content, board[4].content, board[5].content) ||
        matchThree(board[6].content, board[7].content, board[8].content) ||
        matchThree(board[0].content, board[3].content, board[6].content) ||
        matchThree(board[1].content, board[4].content, board[7].content) ||
        matchThree(board[2].content, board[5].content, board[8].content) ||
        matchThree(board[0].content, board[4].content, board[8].content) ||
        matchThree(board[2].content, board[4].content, board[6].content) :
        false
    ;
    return win;
  }

  function checkCatsGame() {
    let cats = true;
    for (let sqr of board) {
      if (!sqr.content) cats = false;
    }
    return cats;
  }

  useEffect(() => {
    const win = checkWin();
    const cats = checkCatsGame();
    const player = currentPlayer === 'X' ? 'O' : 'X';
    win && setGameMessage(`${player} wins!`);
    cats && setGameMessage('Cats game!');
    (win || cats) && setActive(!active);
  }, [board]);

  return (
    <div className='square' onClick={handleClick}>{`${square.content}`}</div>
  );
}
