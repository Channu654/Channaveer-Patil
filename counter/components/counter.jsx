import React, { useState } from 'react';
// 5 in our component required a action store data
import { addcounter, reducecounter } from '../Actions/Action';
import { store } from '../Store/Store';

const counter = () => {
  // getting store data
  const { counter } = store.getState();
  const { dispatch } = store;
  const [Count, setCount] = useState(0);

  const handlerAdd = () => {
    dispatch(addcounter(1));
    setCount(showCount + 1);
  };
  const handlerRemove = () => {
    dispatch(reducecounter(1));
    setCount(Count - 1);
  };
  return (
    <div>
      <h2>counter: {counter}</h2>
      <button onClick={handlerAdd}> Addto</button>
      <button onClick={handlerRemove}> Delete</button>
    </div>
  );
};

export default counter;
