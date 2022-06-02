// what we are going to act with comoponent

// action
const ADD_TODO = 'ADD_TODO';

// action creator

const Addtodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export { Addtodo, ADD_TODO };
