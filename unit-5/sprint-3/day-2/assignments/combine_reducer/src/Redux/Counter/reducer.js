import { actionTypes } from "./action";
const initialState ={
    count:Number(localStorage.getItem("count")) || 0
}
export const countReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case actionTypes.ADD: {
      const value=state.count+payload;
      localStorage.setItem("count",value)
      return {
        ...state,
        count: value,
      };
    }
    case actionTypes.SUB: {
      const value=state.count-payload;
      localStorage.setItem("count",value)
      return {
        ...state,
        count: value,
      };
    }
    default:
      return state;
  }
};
