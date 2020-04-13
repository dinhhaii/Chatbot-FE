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