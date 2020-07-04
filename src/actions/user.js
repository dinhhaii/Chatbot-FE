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

export const changePasswordWithoutConfirm = (id, token, password, rpassword) => {
  return {
    type: actionTypes.CHANGE_PASSWORD_WITHOUT_CONFIRM,
    id,
    token,
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

export const fetchUserList = () => {
  return {
    type: actionTypes.FETCH_USER_LIST,
  };
};

export const fetchUserListSuccess = (data) => {
  return {
    type: actionTypes.FETCH_USER_LIST_SUCCESS,
    data,
  };
};

export const fetchUserListFailed = () => {
  return {
    type: actionTypes.FETCH_USER_LIST_FAILED,
  };
};

export const setCountUnreadMessage = (data) => {
  return {
    type: actionTypes.SET_COUNT_UNREAD_MESSAGES,
    data,
  };
};

export const fetchProgress = (_idUser) => {
  return {
    type: actionTypes.FETCH_PROGRESS,
    _idUser,
  };
};

export const fetchProgressSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PROGRESS_SUCCESS,
    data,
  };
};

export const fetchProgressFailed = () => {
  return {
    type: actionTypes.FETCH_PROGRESS_FAILED,
  };
};

export const addProgress = (_idUser, _idLesson, percentage) => {
  return {
    type: actionTypes.ADD_PROGRESS,
    _idUser,
    _idLesson,
    percentage,
  };
};
