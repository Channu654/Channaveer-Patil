//3.Reducer is just function with 2 parameter state, action (type ,paload)

import { Add_counter, Reduce_counter } from '../ActionsType/ActionType';
const initialstate = {
  Counter: 0,
};
const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case Add_counter:
      return {
        ...state,
        counter: state.Counter + payload,
      };
    case Reduce_counter:
      return {
        ...state,
        counter: state.Counter - payload,
      };
    default:
      return state;
  }
};

export { reducer };
