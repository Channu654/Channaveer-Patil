import React, { useState } from 'react';
// 5 in our component required a action store data
import { addcounter, reducecounter } from '../Actions/Action';
import { store } from '../Store/Store';

const Counter = () => {
  // getting store data
  const { counter } = store.getState();
  const { dispatch } = store;
  const [showCount, setShowCount] = useState(0);

  const handleAdd = () => {
    dispatch(addcounter(1));
    setShowCount(showCount + 1);
  };
  const handleRemove = () => {
    dispatch(reducecounter(1));
    setShowCount(showCount - 1);
  };
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleAdd}> Add</button>
      <button onClick={handleRemove}> Remove</button>
    </div>
  );
};

export default Counter;
