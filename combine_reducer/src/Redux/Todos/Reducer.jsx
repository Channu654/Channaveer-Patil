//2. reducers
import { todoActions } from '../Todos/Action';
const inistate = {
  laoding: false,
  todos: [],
  error: false,
};
export const todosReducer = (state = inistate, action) => {
  switch (action.type) {
    case todoActions.GET_TODO_REQUEST: {
      return state;
    }

    case todoActions.GET_TODO_SUCCESS: {
      return state;
    }
    case todoActions.GET_TODO_FAILURE: {
      return state;
    }
    default:
      return state;
  }
};
