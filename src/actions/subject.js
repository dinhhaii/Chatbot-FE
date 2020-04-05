/* eslint-disable object-curly-newline */
import * as actionTypes from '../utils/actionTypes';

export const fetchSubjectList = () => {
  return {
    type: actionTypes.FETCH_SUBJECT_LIST,
  };
};

export const fetchSubjectListSuccess = (data) => {
  return {
    type: actionTypes.FETCH_SUBJECT_LIST_SUCCESS,
    data,
  };
};

export const fetchSubjectListFailed = () => {
  return {
    type: actionTypes.FETCH_SUBJECT_LIST_FAILED,
  };
};
