import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './GameMessage.css';

export default function GameMessage() {
  const { gameMessage } = useContext(GameContext);

  return (
    <div className='message'>{gameMessage}</div>
  );
}
