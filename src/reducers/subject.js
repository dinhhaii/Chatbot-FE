/* eslint-disable no-case-declarations */
import * as actionTypes from '../utils/actionTypes';

const initialState = {
  subjectList: [],
};

const subjectState = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUBJECT_LIST:
      return {
        ...state,
        subjectList: [],
      };
    case actionTypes.FETCH_SUBJECT_LIST_SUCCESS:
      const { data } = action;
      return {
        ...state,
        subjectList: [...data],
      };
    case actionTypes.FETCH_SUBJECT_LIST_FAILED:
      return {
        ...state,
        subjectList: [],
      };
    default:
      return state;
  }
};

export default subjectState;
