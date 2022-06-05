import axios from 'axios';
//1 action
export const todoActions = {
  GET_TODO_REQUEST: 'GET_TODO_REQUEST',
  GET_TODO_SUCCESS: 'GET_TODO_SUCCESS',
  GET_TODO_FAILURE: 'GET_TODO_FAILURE',
};

//2.action creator
export const getTodoRequest = (data) => (dispatch) => ({
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

// fetching data
export const fetch = async (dispatch) => {
  const todoRequestAction = getTodoRequest();
  dispatch(todoRequestAction);
  try {
    const res = await axios.get('  http://localhost:3000/todos');
    console.log('res:', res)
    const todoRequestSuccess = getTodoSuccess(res.data);
    dispatch(todoRequestSuccess);
  } catch (err) {
    const todoRequestFail = getTodoFailure();
    dispatch(todoRequestFail);
  }
};
