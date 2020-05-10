/* eslint-disable no-case-declarations */
import * as actionTypes from '../utils/actionTypes';

const initialState = {
  comment: null,
};

const commentState = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        comment: { ...data },
      };
    case actionTypes.FETCH_COMMENT_FAILED:
      return {
        ...state,
        comment: null,
      };
    default:
      return state;
  }
};

export default commentState;
