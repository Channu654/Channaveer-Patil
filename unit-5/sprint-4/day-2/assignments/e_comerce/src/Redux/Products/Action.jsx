import * as types from './ActionType';
import axios from 'axios';
//fetch
const fetchDataRequest = (payload) => {
  return {
    type: types.FETCH_DATA_REQUEST,
    payload,
  };
};

// success

const fetchDatasucces = (payload) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload,
  };
};

//failure
const fetchDatafailure = (payload) => {
  return {
    type: types.FETCH_DATA_FAILURE,
    payload,
  };
};

// to fetching actual data here

const fetchData = (payload) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get('/Products', {
        params: {
          ...payload,
        },
      })
      .then((res) => dispatch(fetchDatasucces(res.data)))
      .catch((err) => dispatch(fetchDatafailure(err.data)));
  };
};

export { fetchData };
