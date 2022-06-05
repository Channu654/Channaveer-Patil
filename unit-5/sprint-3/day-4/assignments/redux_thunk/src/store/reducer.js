import { LOGIN_SUCCESS, SEARCH_SUCCESS } from "./actionTypes";

const initial=
{
  token:"",
  users:[]
}

export const dataReducer = (state=initial, action) => {
  console.log(action.payload)
  console.log(state);
  switch (action.type) {
   
    case LOGIN_SUCCESS: {
      return {
        ...state,
      
        token: action.payload,
        
      };
    }
    case SEARCH_SUCCESS: {
      return {
        ...state,
     users:{ 
      data: action.payload,
     }
      };
    }
    default: {
      return { ...state };
    }
  }
};
