export const actionTypes = {
  ADD: "ADD",
  SUB: "SUB",
};
export const adding = (data) => {
  return {
    type: actionTypes.ADD,
    payload: data,
  };
};
export const subtracting = (data) => {
  return {
    type: actionTypes.SUB,
    payload: data,
  };
};
