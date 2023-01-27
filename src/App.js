import { useEffect } from 'react';
import './App.css';
import { GameContext } from './context/GameContext';
import { useContext } from 'react';
import Board from './components/Board/Board.js';
import GameMessage from './components/GameMessage/GameMessage.js';

function App() {
  const { 
    board, 
    setBoard,
    currentPlayer,
    setCurrentPlayer,
    active,
    setActive,
    gameMessage,
    setGameMessage
  } = useContext(GameContext);

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
    <>
      <GameMessage />
      <Board />
    </>
  );
}

export default App;
