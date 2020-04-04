/* eslint-disable object-curly-newline */
import * as actionTypes from '../utils/actionTypes';

export const fetchCourseList = () => {
  return {
    type: actionTypes.FETCH_COURSE_LIST,
  };
};

export const fetchCourseListSuccess = (data) => {
  return {
    type: actionTypes.FETCH_COURSE_LIST_SUCCESS,
    data,
  };
};

export const fetchCourseListFailed = () => {
  return {
    type: actionTypes.FETCH_COURSE_LIST_FAILED,
  };
};
