import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Square from '../Square/Square';
import './Board.css';

export default function Board() {
  const { board } = useContext(GameContext);

  return (
    <div className='board'>
      {board.map((square) => (
        <Square key={square.place} square={square}/>
      ))}
    </div>
  );
}
