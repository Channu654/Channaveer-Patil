import { actionTypes } from './action';

const initState = {
  loading: false,
  data: [],
  error: false,
};

function reducer(state = initState, action) {
  // write code here
  switch (action.type) {
    case actionTypes.ADD_USER_REQUEST: {
      return {
        ...state,
        laoding: true,
        error: false,
      };
    }
    case actionTypes.ADD_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    }
    case actionTypes.ADD_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
}

export default reducer;
