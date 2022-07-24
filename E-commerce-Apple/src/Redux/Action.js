import axios from 'axios';
import {
  GET_PRODUCT_DATA_FAILURE,
  GET_PRODUCT_DATA_REQUEST,
  GET_PRODUCT_DATA_SUCCESS,
} from './ActionType';

export const getdata_request = () => {
  return {
    type: GET_PRODUCT_DATA_REQUEST,
  };
};

export const getdata_success = (payload) => {
  return {
    type: GET_PRODUCT_DATA_SUCCESS,
    payload,
  };
};

export const getdata_failure = () => {
  return {
    type: GET_PRODUCT_DATA_FAILURE,
  };
};

export const getdata = () => (dispatch) => {
  dispatch(getdata_request());

  axios
    .get('http://localhost:5050/prod')
    .then((res) => dispatch(getdata_success(res.data)))
    .catch((err) => dispatch(getdata_failure()));
};
