//1 action 
const ADD_TODO = 'ADD_TODO';

const Addtodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export { Addtodo, ADD_TODO };
