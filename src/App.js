import logo from './logo.svg';
import './App.css';
import { GameContext } from './context/GameContext';
import { useContext } from 'react';

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
    </div>
  );
}

export default App;
