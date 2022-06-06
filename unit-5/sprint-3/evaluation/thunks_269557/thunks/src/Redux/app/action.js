import axios from "axios";
import { GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType";

export const getData = async ({page,dispatch}) => {
    dispatch({
      type: GET_DATA_REQUEST,
    });
    try {
      let res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
     
      let data = await res.data;
      console.log(data);
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_DATA_ERROR,
      });
    }
  };