/* eslint-disable no-case-declarations */
import * as actionTypes from '../utils/actionTypes';

const initialState = {
  cart: null,
  updatedCart: null,
};

const cartState = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.FETCH_CART:
      return {
        ...state,
        cart: null,
      };
    case actionTypes.FETCH_CART_SUCCESS:
      return {
        ...state,
        cart: { ...data },
      };
    case actionTypes.FETCH_UPDATED_CART_SUCCESS:
      return {
        ...state,
        updatedCart: { ...data },
      };
    case actionTypes.FETCH_CART_FAILED:
      return {
        ...state,
        cart: null,
      };
    default:
      return state;
  }
};

export default cartState;
