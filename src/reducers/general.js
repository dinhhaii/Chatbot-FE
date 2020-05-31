import * as actionTypes from '../utils/actionTypes';

const initialState = {
  isLoading: false,
  isSearching: false,
  isSetRole: true,
};

const generalState = (state = initialState, action) => {
  const { data } = action;
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
    case actionTypes.IS_SET_ROLE:
      return {
        ...state,
        isSetRole: data,
      };
    default:
      return state;
  }
};

export default generalState;
