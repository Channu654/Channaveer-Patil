import {
  GET_PRODUCT_DATA_FAILURE,
  GET_PRODUCT_DATA_REQUEST,
  GET_PRODUCT_DATA_SUCCESS,
} from './ActionType';

const initState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case GET_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    case GET_PRODUCT_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
