import logo from './logo.svg';
import './App.css';
import { GameContext } from './context/GameContext';
import { useContext } from 'react';
import Board from './components/Board/Board.js';

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

  return (
    <div>
      <Board />
    </div>
  );
}

export default App;
