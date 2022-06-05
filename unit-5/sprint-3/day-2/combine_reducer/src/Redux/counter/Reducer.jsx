//3.Reducer is just function with 2 parameter state, action (type ,paload)
import { Add_Counter, Reduce_Counter } from './Action';
//Add_Counter, Reduce_Counter

const initialstate = {
  counter: 0,
};

const counterreducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case Add_Counter: {
      return {
        ...state,
        counter: state.counter + payload,
      };
    }
    case Reduce_Counter: {
      return {
        ...state,
        counter: state.counter - payload,
      };
    }

    default:
      return state;
  }
};

export { counterreducer };
