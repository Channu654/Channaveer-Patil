//action creator

import { ADD_TODO } from './ActionType';

const Addtodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export { Addtodo };
