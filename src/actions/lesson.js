/* eslint-disable object-curly-newline */
import * as actionTypes from '../utils/actionTypes';

export const fetchLesson = (_id) => {
  return {
    type: actionTypes.FETCH_LESSON,
    _id,
  };
};

export const fetchLessonSuccess = (data) => {
  return {
    type: actionTypes.FETCH_LESSON_SUCCESS,
    data,
  };
};

export const fetchLessonFailed = () => {
  return {
    type: actionTypes.FETCH_LESSON_FAILED,
  };
};
