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

  return (
    <div className='square' onClick={handleClick}>{`${square.content}`}</div>
  );
}
