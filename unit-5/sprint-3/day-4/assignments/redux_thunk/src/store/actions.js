import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_USER, REGISTER_USER, Reg_FAILURE, Reg_SUCCESS, SEARCH_FALIAURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./actionTypes";
import axios from "axios";
export const postRegister = async ({ value, dispatch}) => {
   
    dispatch({
      type: REGISTER_USER,
    });
    return axios({
      url: "https://masai-api-mocker.herokuapp.com/auth/register",
      method: "post",
      data: {
        name:value.name,
        email:value.email,
        username:value.username,
        password:value.password,
        mobile:value.mobile,
        description:value.description,
        
      },
    })
      .then((res) => {
         console.log(res.data);
        dispatch({ type: Reg_SUCCESS });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: Reg_FAILURE });
      });
  };
  
  export const postLogin = async ({ value, dispatch}) => {
    // console.log(value)
    // console.log(dispatch);
   dispatch({
     type: LOGIN_USER,
   });
   return axios({
     url: "https://masai-api-mocker.herokuapp.com/auth/login",
     method: "post",
     data: {
      
       username:value.username,
       password:value.password,
       
     },
   })
     .then((res) => {
        console.log(res.data);
       dispatch({ type: LOGIN_SUCCESS,payload:res.data });
     })
     .catch((err) => {
       console.log(err);
       dispatch({ type: LOGIN_FAILURE });
     });
 };
 export const search = async ({ task, dispatch}) => {
  //  console.log(task);
  dispatch({
    type: SEARCH_REQUEST,
  });
  return axios({
    url: "https://api.github.com/search/users",
    method: "GET",
    params: {
      q: task,
    },
  }).then((res) => {
       console.log();
      dispatch({ type: SEARCH_SUCCESS,payload:res.data.items });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SEARCH_FALIAURE });
    });
};