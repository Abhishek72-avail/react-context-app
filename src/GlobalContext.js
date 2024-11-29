import React, { createContext, useContext, useState } from 'react';

// Create Context
const GlobalStateContext = createContext();

// Create a Provider component
export const GlobalStateProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <GlobalStateContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom Hook to use the Global State
export const useGlobalState = () => useContext(GlobalStateContext);
