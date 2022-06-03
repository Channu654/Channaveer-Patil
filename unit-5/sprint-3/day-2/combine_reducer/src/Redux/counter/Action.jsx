//2. its action creator
// which always returns an objects with key as type... with payload


//1. creating type of action we need to do

export const Add_Counter = 'Add_Counter';
export const Reduce_Counter = 'Add_Reducer';

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
