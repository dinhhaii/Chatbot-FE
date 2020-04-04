/* eslint-disable no-case-declarations */
import * as actionTypes from '../utils/actionTypes';

const initialState = {
  courseList: [],
};

const courseState = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COURSE_LIST:
      return {
        ...state,
        courseList: [],
      };
    case actionTypes.FETCH_COURSE_LIST_SUCCESS:
      const { data } = action;
      return {
        ...state,
        courseList: [...data],
      };
    case actionTypes.FETCH_COURSE_LIST_FAILED:
      return {
        ...state,
        courseList: [],
      };
    default:
      return state;
  }
};

export default courseState;
