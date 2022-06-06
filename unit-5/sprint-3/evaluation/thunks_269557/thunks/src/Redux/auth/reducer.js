import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";
const initial={

login:{
    isLoding:false,

    isError:false,
    data:[]
}
}
export const LoginReducer = (state=initial, action) => {
    console.log(action.payload)

    switch (action.type) {
     
      case LOGIN_SUCCESS: {
        return {
            ...state,
            login: {
              isLoading: false,
              isError: false,
              data: action.payload
            },
          };
      }
      case LOGIN_REQUEST: {
        return {
          ...state,
          login: {
            isLoading: true,
            isError: false,
            data: [],
          },
        };
      }
      case LOGIN_ERROR: {
        return {
          ...state,
          login: {
            isLoading: false,
            isError: true,
            data: []
          },
        };
      }
      default: {
        return { ...state };
      }
    }
  };
  