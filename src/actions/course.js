/* eslint-disable object-curly-newline */
import * as actionTypes from '../utils/actionTypes';

export const fetchCourseList = (props) => {
  return {
    type: actionTypes.FETCH_COURSE_LIST,
    props
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

export const fetchCourseLecturerList = (_id) => {
  return {
    type: actionTypes.FETCH_COURSE_LECTURER_LIST,
    _id,
  };
};

export const fetchCourseLecturerListSuccess = (data) => {
  return {
    type: actionTypes.FETCH_COURSE_LECTURER_LIST_SUCCESS,
    data,
  };
};

export const fetchCourseLecturerListFailed = () => {
  return {
    type: actionTypes.FETCH_COURSE_LECTURER_LIST_FAILED,
  };
};

export const fetchCourse = (_id) => {
  return {
    type: actionTypes.FETCH_COURSE,
    _id,
  };
};

export const fetchCourseSuccess = (data) => {
  return {
    type: actionTypes.FETCH_COURSE_SUCCESS,
    data,
  };
};

export const fetchCourseFailed = () => {
  return {
    type: actionTypes.FETCH_COURSE_FAILED,
  };
};

export const fetchCourseByLesson = (_id) => {
  return {
    type: actionTypes.FETCH_COURSE_BY_LESSON,
    _id,
  };
};

export const fetchCourseByLessonSuccess = (data) => {
  return {
    type: actionTypes.FETCH_COURSE_BY_LESSON_SUCCESS,
    data,
  };
};

export const fetchCourseByLessonFailed = () => {
  return {
    type: actionTypes.FETCH_COURSE_BY_LESSON_FAILED,
  };
};

export const createCourse = (course) => {
  return {
    type: actionTypes.CREATE_COURSE,
    course,
  };
};

export const updateCourse = (course) => {
  return {
    type: actionTypes.UPDATE_COURSE,
    course,
  };
};
