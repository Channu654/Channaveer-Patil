import * as types from './ActionType';
const initiState = {
  Products: [],
  error: '',
};

const reducer = (state = initiState, { type, payload }) => {
  switch (type) {
    case types.FETCH_DATA_REQUEST:
      return {
        ...state,
        error: '',
      };
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        Products: payload,
      };
    case types.FETCH_DATA_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export { reducer };
