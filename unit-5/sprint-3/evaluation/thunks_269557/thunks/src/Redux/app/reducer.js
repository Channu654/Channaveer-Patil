import { GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS, } from "./actionType";
const initialstate={

    Postdata:{
    isLoding:false,

    isError:false,
    data:[]
}
}
export const PostReducer = (state=initialstate, action) => {
   

    switch (action.type) {
     
      case GET_DATA_SUCCESS: {
        return {
            ...state,
            Postdata: {
              isLoading: false,
              isError: false,
              data: action.payload
            },
          };
      }
      case GET_DATA_REQUEST: {
        return {
          ...state,
          Postdata: {
            isLoading: true,
            isError: false,
            data: [],
          },
        };
      }
      case GET_DATA_ERROR: {
        return {
          ...state,
          Postdata: {
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
  