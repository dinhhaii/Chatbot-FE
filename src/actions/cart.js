/* eslint-disable object-curly-newline */
import * as actionTypes from '../utils/actionTypes';

export const fetchCart = (_id) => {
  return {
    type: actionTypes.FETCH_CART,
    _id,
  };
};

export const fetchCartSuccess = (data) => {
  return {
    type: actionTypes.FETCH_CART_SUCCESS,
    data,
  };
};

export const fetchCartFailed = () => {
  return {
    type: actionTypes.FETCH_CART_FAILED,
  };
};


export const updateCart = (cart) => {
  return {
    type: actionTypes.UPDATE_CART,
    cart,
  };
};
