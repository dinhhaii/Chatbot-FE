import * as actionTypes from '../utils/actionTypes';

const initialState = {
  isLoading: false,
  isSearching: false,
};

const generalState = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.HIDE_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.SHOW_SEARCHBAR:
      return {
        ...state,
        isSearching: true,
      };
    case actionTypes.HIDE_SEARCHBAR:
      return {
        ...state,
        isSearching: false,
      };
    default:
      return state;
  }
};

export default generalState;
