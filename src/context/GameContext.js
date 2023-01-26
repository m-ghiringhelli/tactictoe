import { useState } from 'react';
import { createContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([
    { place: 1, content: '' },
    { place: 2, content: '' },
    { place: 3, content: '' },
    { place: 4, content: '' },
    { place: 5, content: '' },
    { place: 6, content: '' },
    { place: 7, content: '' },
    { place: 8, content: '' },
    { place: 9, content: '' }
  ]);

  return (
    <GameContext.Provider value={{ board, setBoard }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
