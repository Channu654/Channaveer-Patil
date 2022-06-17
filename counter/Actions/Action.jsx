


import { Add_counter } from '../ActionsType/ActionType';
import { Reduce_counter } from '../ActionsType/ActionType';

const addcounter = (payload) => {
  return {
    type: Add_counter,
    payload,
  };
};

const reducecounter = (payload) => {
  return {
    type: Reduce_counter,
    payload,
  };
};
export { addcounter, reducecounter };
