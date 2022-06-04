//1 action
export const todoActions = {
  GET_TODO_REQUEST: 'GET_TODO_REQUEST',
  GET_TODO_SUCCESS: 'GET_TODO_SUCCESS',
  GET_TODO_FAILURE: 'GET_TODO_FAILURE',
};

//2.action creator
export const getTodoRequest = (data) => ({
  type: todoActions.GET_TODO_REQUEST,
  payload: data,
});

export const getTodoSuccess = (data) => ({
  type: todoActions.GET_TODO_SUCCESS,
  payload: data,
});

export const getTodoFailure = (data) => ({
  type: todoActions.GET_TODO_FAILURE,
  payload: data,
});
