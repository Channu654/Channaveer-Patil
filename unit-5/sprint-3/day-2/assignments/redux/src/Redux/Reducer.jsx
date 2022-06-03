import { ADD_TODO } from './Action';
//reducer
const initialstate = {
  todos: [
    {
      id: 1,
      titile: 'Readux',
      status: false,
    },
  ],
};
export const reducer = (state = initialstate, { type, payload }) => {
  console.log('state:', state);
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }
    default:
      return state;
  }
};
