import * as actionTypes from '../utils/actionTypes';

export const showLoading = () => {
  return {
    type: actionTypes.SHOW_LOADING,
  };
};

export const hideLoading = () => {
  return {
    type: actionTypes.HIDE_LOADING,
  };
};

export const showSearchBar = () => {
  return {
    type: actionTypes.SHOW_SEARCHBAR,
  };
};

export const hideSearchBar = () => {
  return {
    type: actionTypes.HIDE_SEARCHBAR,
  };
};
