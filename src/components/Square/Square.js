import React from 'react';
import './Square.css';

export default function Square({ square }) {
  const handleClick = () => {
    console.log(`clicked ${square.place}`);
  };

  return (
    <div className='square' onClick={handleClick}>{`${square.place}`}</div>
  );
}
