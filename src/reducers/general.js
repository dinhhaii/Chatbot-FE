import * as actionTypes from '../utils/actionTypes';

const initialState = {
  isLoading: false,
  isSearching: false,
  unreadMessages: {},
  statusUser: [],
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
    case actionTypes.UPDATE_UNREAD_MESSAGE:
      return {
        ...state,
        unreadMessages: data,
      };
    case actionTypes.UPDATE_STATUS_USER:
      return {
        ...state,
        statusUser: data,
      };
    default:
      return state;
  }
};

export default generalState;
