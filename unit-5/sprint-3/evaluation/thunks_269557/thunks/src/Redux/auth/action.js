import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";
import axios from "axios";
export const postLogin = async ({ value, dispatch}) => {
console.log(value)
   dispatch({
     type: LOGIN_REQUEST,
   });
   return axios({
     url: "https://reqres.in/api/login",
     method: "post",
     data: {
      
        email:value.email,
       password:value.password,
       
     },
   })
     .then((res) => {
        console.log(res.data);
       dispatch({ type: LOGIN_SUCCESS,payload:res.data });
     })
     .catch((err) => {
       console.log(err);
       dispatch({ type: LOGIN_ERROR });
     });
 };