import { actionTypes } from "./action";
const initialState={
    loading: false,
    error: false,
    todos: []
}
export const todoReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_TODOS_REQUEST: {
      return{
          ...state,
          loading:true,
          error:false,
      }
    }
    case actionTypes.GET_TODOS_SUCCESS: {
        return{
            ...state,
            loading:false,
            error:false,
            todos:payload
        }
    }
    case actionTypes.GET_TODOS_FAILURE: {
        return{
            ...state,
            loading:false,
            error:true,
            
        }
    }
    case actionTypes.POST_TODOS_REQUEST: {
        return{
            ...state,
            loading:true,
            error:false,
        }
      }
      case actionTypes.POST_TODOS_SUCCESS: {
          return{
              ...state,
              loading:false,
              error:false,
              todos:[...state,payload]
          }
      }
      case actionTypes.POST_TODOS_FAILURE: {
          return{
              ...state,
              loading:false,
              error:true,
              
          }
      }
    default:
      return state;
  }
};
