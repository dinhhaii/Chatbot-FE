/* eslint-disable no-case-declarations */
import * as actionTypes from '../utils/actionTypes';

const initialState = {
  course: null,
  courseList: [],
  courseLecturerList: [],
};

const courseState = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.FETCH_COURSE_LIST:
      return {
        ...state,
        courseList: [],
      };
    case actionTypes.FETCH_COURSE_LIST_SUCCESS:
      return {
        ...state,
        courseList: [...data],
      };
    case actionTypes.FETCH_COURSE_LIST_FAILED:
      return {
        ...state,
        courseList: [],
      };
    case actionTypes.FETCH_COURSE_LECTURER_LIST:
      return {
        ...state,
        courseLecturerList: [],
      };
    case actionTypes.FETCH_COURSE_LECTURER_LIST_SUCCESS:
      return {
        ...state,
        courseLecturerList: [...data],
      };
    case actionTypes.FETCH_COURSE_LECTURER_LIST_FAILED:
      return {
        ...state,
        courseLecturerList: [],
      };
    case actionTypes.FETCH_COURSE:
      return {
        ...state,
        course: null,
      };
    case actionTypes.FETCH_COURSE_SUCCESS:
      return {
        ...state,
        course: { ...data },
      };
    case actionTypes.FETCH_COURSE_FAILED:
      return {
        ...state,
        course: null,
      };
    case actionTypes.FETCH_COURSE_BY_LESSON:
      return {
        ...state,
        course: null,
      };
    case actionTypes.FETCH_COURSE_BY_LESSON_SUCCESS:
      return {
        ...state,
        course: { ...data },
      };
    case actionTypes.FETCH_COURSE_BY_LESSON_FAILED:
      return {
        ...state,
        course: null,
      };
    default:
      return state;
  }
};

export default courseState;
