/* eslint-disable no-case-declarations */
import * as actionTypes from '../utils/actionTypes';

const initialState = {
  discount: null,
};

const discountState = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.FETCH_DISCOUNT_SUCCESS:
      return {
        ...state,
        discount: { ...data },
      };
    case actionTypes.FETCH_DISCOUNT_FAILED:
      return {
        ...state,
        discount: null,
      };
    default:
      return state;
  }
};

export default discountState;
