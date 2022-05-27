import React, { useReducer } from 'react';
// 1.action type
const counterAction = {
  increment: 'increment',
  decrement: 'decrement',
};

const initialstate = {
  counter: 0,
  numberogcount: 0,
};

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case 'decrement': {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default:
      return state;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
      <h2>{state.counter}</h2>
      <button onClick={() => dispatch({ type: counterAction.increment })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: counterAction.decrement })}>
        Reduce
      </button>
    </div>
  );
};

export default Counter;
