// 2.reducer
import { ADD_TODO } from './Action';
const initial = {
  todos: [
    {
      id: 1,
      title: 'React',
      status: true,
    },
  ],
};

const reducer = (state = initial, { type, payload }) => {
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
export { reducer };
