import { ADD_TODO } from './ActionType';
//2. reducer return type action
const initial = {
  todos: [
    {
      id: 1,
      title: 'Learn redux',
      status: false,
    },
   
  ],
};
export const reducer = (state = initial, { type, payload }) => {
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
