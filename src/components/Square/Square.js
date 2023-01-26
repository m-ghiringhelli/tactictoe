import React from 'react';
import './Square.css';

export default function Square({ square }) {
  console.log(square);
  return (
    <div className='square'>{`${square.place}`}</div>
  );
}
