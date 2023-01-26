import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Board from '../Board/Board';
import './Square.css';

export default function Square({ square }) {
  const { active, currentPlayer, board, setBoard } = useContext(GameContext);
  const handleClick = () => {
    const clickedSquare = square.place;
    if (square.content) return;
    if (!active) return;
    setBoard((prevState) => (
      prevState.map((sqr) => (
        sqr.place === clickedSquare ? { ...sqr, content: 'clicked!' } : sqr
      ))
    ));
    console.log(`clicked ${square.place}, ${currentPlayer}`);
    // console.log('new board', board);
  };

  return (
    <div className='square' onClick={handleClick}>{`${square.place}`}</div>
  );
}
