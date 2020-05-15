/* eslint-disable no-case-declarations */
import * as actionTypes from '../utils/actionTypes';

const initialState = {
  user: null,
  token: null,
  isLogin: false,
  userList: [],
  countUnreadMessages: {},
};

const userState = (state = initialState, action) => {
  const { data } = action;

  switch (action.type) {
    case actionTypes.FETCH_USER:
      return {
        ...state,
        user: null,
        token: null,
      };
    case actionTypes.FETCH_USER_SUCCESS:
      const { user, token } = action.data;
      return {
        ...state,
        user,
        token,
      };
    case actionTypes.FETCH_USER_FAILED:
      return {
        ...state,
        user: null,
        token: null,
      };
    case actionTypes.SET_ISLOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case actionTypes.SET_ISNOTLOGIN:
      return {
        ...state,
        isLogin: false,
      };
    case actionTypes.FETCH_USER_LIST:
      return {
        ...state,
        userList: [],
      };
    case actionTypes.FETCH_USER_LIST_SUCCESS:
      return {
        ...state,
        userList: [...data],
      };
    case actionTypes.FETCH_USER_LIST_FAILED:
      return {
        ...state,
        userList: [],
      };
    case actionTypes.SET_COUNT_UNREAD_MESSAGES:
      return {
        ...state,
        countUnreadMessages: data,
      };
    default:
      return state;
  }
};

export default userState;
