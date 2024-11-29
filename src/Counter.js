import React from 'react';
import { useGlobalState } from './GlobalContext';

const Counter = () => {
  const { count, setCount } = useGlobalState();

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
