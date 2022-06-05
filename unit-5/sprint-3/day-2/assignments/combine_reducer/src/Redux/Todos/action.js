import axios from "axios";

export const actionTypes = {
  GET_TODOS_REQUEST: "GET_TODO_REQUEST",
  GET_TODOS_SUCCESS: "GET_TODOS_SUCCESS",
  GET_TODOS_FAILURE: "GET_TODOS_FAILURE",
  POST_TODOS_REQUEST: "POST_TODOS_REQUEST",
  POST_TODOS_SUCCESS: "POST_TODOS_SUCCESS",
  POST_TODOS_FAILURE: "POST_TODOS_FAILURE",
};

export const getTodoRequest = () => {
  return {
    type: actionTypes.GET_TODOS_REQUEST,
  };
};

export const getTodoSuccess = (data) => {
  return {
    type: actionTypes.GET_TODOS_SUCCESS,
    payload: data,
  };
};

export const getTodoFailure = () => {
  return {
    type: actionTypes.GET_TODOS_FAILURE,
  };
};
export const postTodoRequest = () => {
  return {
    type: actionTypes.POST_TODOS_REQUEST,
  };
};

export const postTodoSuccess = (data) => {
  return {
    type: actionTypes.POST_TODOS_SUCCESS,
    payload: data,
  };
};

export const postTodoFailure = () => {
  return {
    type: actionTypes.POST_TODOS_FAILURE,
  };
};

export const fetch = async (dispatch) => {
  const todoRequestAction = getTodoRequest();
  dispatch(todoRequestAction);

  try {
    const res = await axios.get("http://localhost:8080/todos");
    const todoSuccessAction = getTodoSuccess(res.data);
    dispatch(todoSuccessAction);
  } catch (error) {
    const todoFailureAction = getTodoFailure();
    dispatch(todoFailureAction);
  }
};



export const postTodo=async({dispatch,text})=>{

  try {
   const res= await axios.post("http://localhost:8080/todos",{
     title:text,
     status:false
   })
    dispatch(postTodoSuccess(res.data))
  } catch (error) {
    dispatch(postTodoFailure())
  }
}
