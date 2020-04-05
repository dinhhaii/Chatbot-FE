/* eslint-disable no-case-declarations */
import * as actionTypes from '../utils/actionTypes';

const initialState = {
  user: null,
  token: null,
  isLogin: false,
};

const userState = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default userState;
