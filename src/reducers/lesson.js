/* eslint-disable no-case-declarations */
import * as actionTypes from '../utils/actionTypes';

const initialState = {
  lesson: null,
};

const lessonState = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.FETCH_LESSON:
      return {
        ...state,
        lesson: null,
      };
    case actionTypes.FETCH_LESSON_SUCCESS:
      return {
        ...state,
        lesson: { ...data },
      };
    case actionTypes.FETCH_LESSON_FAILED:
      return {
        ...state,
        lesson: null,
      };
    default:
      return state;
  }
};

export default lessonState;
