import * as actionTypes from '../utils/actionTypes';

const initialState = {
  isLoading: false,
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
    default:
      return state;
  }
};

export default generalState;
