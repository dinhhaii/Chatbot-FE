/* eslint-disable no-case-declarations */
import * as actionTypes from '../utils/actionTypes';

const initialState = {
  invoiceList: [],
  invoiceLearnerList: [],
  invoiceLecturerList: [],
};

const invoiceState = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.FETCH_INVOICE_LIST:
      return {
        ...state,
        invoiceList: [],
      };
    case actionTypes.FETCH_INVOICE_LIST_SUCCESS:
      return {
        ...state,
        invoiceList: [...data],
      };
    case actionTypes.FETCH_INVOICE_LIST_FAILED:
      return {
        ...state,
        invoiceList: [],
      };
    case actionTypes.FETCH_INVOICE_LEARNER_LIST:
      return {
        ...state,
        invoiceLearnerList: [],
      };
    case actionTypes.FETCH_INVOICE_LEARNER_LIST_SUCCESS:
      return {
        ...state,
        invoiceLearnerList: [...data],
      };
    case actionTypes.FETCH_INVOICE_LEARNER_LIST_FAILED:
      return {
        ...state,
        invoiceLearnerList: [],
      };
    case actionTypes.FETCH_INVOICE_LECTURER_LIST:
      return {
        ...state,
        invoiceLecturerList: [],
      };
    case actionTypes.FETCH_INVOICE_LECTURER_LIST_SUCCESS:
      return {
        ...state,
        invoiceLecturerList: [...data],
      };
    case actionTypes.FETCH_INVOICE_LECTURER_LIST_FAILED:
      return {
        ...state,
        invoiceLecturerList: [],
      };
    default:
      return state;
  }
};

export default invoiceState;
