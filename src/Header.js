import React from 'react';
import { useGlobalState } from './GlobalContext';

const Header = () => {
  const { count } = useGlobalState();
  return <h1>Current Count: {count}</h1>;
};

export default Header;
