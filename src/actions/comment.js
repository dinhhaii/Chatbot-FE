import * as actionTypes from '../utils/actionTypes';

export const fetchCommentSuccess = (data) => {
  return {
    type: actionTypes.FETCH_COMMENT_SUCCESS,
    data,
  };
};

export const fetchCommentFailed = () => {
  return {
    type: actionTypes.FETCH_COMMENT_FAILED,
  };
};

export const createComment = (comment) => {
  return {
    type: actionTypes.CREATE_COMMENT,
    comment,
  };
};

export const updateComment = (comment) => {
  return {
    type: actionTypes.UPDATE_COMMENT,
    comment,
  };
};
