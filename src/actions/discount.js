import * as actionTypes from '../utils/actionTypes';

export const fetchDiscountSuccess = (data) => {
  return {
    type: actionTypes.FETCH_DISCOUNT_SUCCESS,
    data,
  };
};

export const fetchDiscountFailed = () => {
  return {
    type: actionTypes.FETCH_DISCOUNT_FAILED,
  };
};

export const createDiscount = (discount) => {
  return {
    type: actionTypes.CREATE_DISCOUNT,
    discount,
  };
};

export const updateDiscount = (discount) => {
  return {
    type: actionTypes.UPDATE_DISCOUNT,
    discount,
  };
};
