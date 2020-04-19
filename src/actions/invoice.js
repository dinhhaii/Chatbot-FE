/* eslint-disable object-curly-newline */
import * as actionTypes from '../utils/actionTypes';

export const fetchInvoiceList = () => {
  return {
    type: actionTypes.FETCH_INVOICE_LIST,
  };
};

export const fetchInvoiceListSuccess = (data) => {
  return {
    type: actionTypes.FETCH_INVOICE_LIST_SUCCESS,
    data,
  };
};

export const fetchInvoiceListFailed = () => {
  return {
    type: actionTypes.FETCH_INVOICE_LIST_FAILED,
  };
};

export const fetchInvoiceLearnerList = (_id) => {
  return {
    type: actionTypes.FETCH_INVOICE_LEARNER_LIST,
    _id,
  };
};

export const fetchInvoiceLearnerListSuccess = (data) => {
  return {
    type: actionTypes.FETCH_INVOICE_LEARNER_LIST_SUCCESS,
    data,
  };
};

export const fetchInvoiceLearnerListFailed = () => {
  return {
    type: actionTypes.FETCH_INVOICE_LEARNER_LIST_FAILED,
  };
};

export const fetchInvoiceLecturerList = (_id) => {
  return {
    type: actionTypes.FETCH_INVOICE_LECTURER_LIST,
    _id,
  };
};

export const fetchInvoiceLecturerListSuccess = (data) => {
  return {
    type: actionTypes.FETCH_INVOICE_LECTURER_LIST_SUCCESS,
    data,
  };
};

export const fetchInvoiceLecturerListFailed = () => {
  return {
    type: actionTypes.FETCH_INVOICE_LECTURER_LIST_FAILED,
  };
};

export const createInvoice = (invoice) => {
  return {
    type: actionTypes.CREATE_INVOICE,
    invoice,
  };
};

export const updateInvoice = (invoice) => {
  return {
    type: actionTypes.UPDATE_INVOICE,
    invoice,
  };
};