//2. its action creator
// which always returns an objects with key as type... with payload

//  *****importing action types here***
import { Add_Counter } from '../ActionsType/ActionType';
import { Reduce_Counter } from '../ActionsType/ActionType';

const addcounter = (payload) => {
  return {
    type: Add_Counter,
    payload,
  };
};

const reducecounter = (payload) => {
  return {
    type: Reduce_Counter,
    payload,
  };
};
export { addcounter, reducecounter };
