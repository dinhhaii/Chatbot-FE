import * as actionTypes from '../utils/actionTypes';

export const fetchFeedbackSuccess = (data) => {
  return {
    type: actionTypes.FETCH_FEEDBACK_SUCCESS,
    data,
  };
};

export const fetchFeedbackFailed = () => {
  return {
    type: actionTypes.FETCH_FEEDBACK_FAILED,
  };
};

export const createFeedback = (feedback) => {
  return {
    type: actionTypes.CREATE_FEEDBACK,
    feedback,
  };
};

export const updateFeedback = (feedback) => {
  return {
    type: actionTypes.UPDATE_FEEDBACK,
    feedback,
  };
};
