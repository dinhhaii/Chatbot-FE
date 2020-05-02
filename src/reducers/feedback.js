/* eslint-disable no-case-declarations */
import * as actionTypes from '../utils/actionTypes';

const initialState = {
  feedback: null,
};

const feedbackState = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.FETCH_FEEDBACK_SUCCESS:
      return {
        ...state,
        feedback: { ...data },
      };
    case actionTypes.FETCH_FEEDBACK_FAILED:
      return {
        ...state,
        feedback: null,
      };
    default:
      return state;
  }
};

export default feedbackState;
