import * as actionTypes from '../utils/actionTypes';

export const fetchUser = (username, password) => {
  return {
    type: actionTypes.FETCH_USER,
    username,
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
