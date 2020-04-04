/* eslint-disable object-curly-newline */
import * as actionTypes from '../utils/actionTypes';

export const fetchUser = (email, password) => {
  return {
    type: actionTypes.FETCH_USER,
    email,
    password,
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    data,
  };
};

export const fetchUserFailed = () => {
  return {
    type: actionTypes.FETCH_USER_FAILED,
  };
};
