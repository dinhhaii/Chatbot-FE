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

export const setIsLogin = () => {
  return {
    type: actionTypes.SET_ISLOGIN,
  };
};

export const setIsNotLogin = () => {
  return {
    type: actionTypes.SET_ISNOTLOGIN,
  };
};

export const changePassword = (currentPassword, password, rpassword) => {
  return {
    type: actionTypes.CHANGE_PASSWORD,
    currentPassword,
    password,
    rpassword,
  };
};

export const updateUser = (user) => {
  return {
    type: actionTypes.UPDATE_USER,
    user,
  };
};
