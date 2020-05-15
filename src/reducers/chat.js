import * as actionTypes from '../utils/actionTypes';

const initialState = {
  unreadMessages: {},
  statusUser: {},
  recipient: null,
  conversations: [],
  isDisplayedPopupChat: false,
};

const generalState = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.SET_UNREAD_MESSAGES:
      return {
        ...state,
        unreadMessages: data,
      };
    case actionTypes.SET_STATUS_USER:
      return {
        ...state,
        statusUser: data,
      };
    case actionTypes.SET_RECIPIENT:
      return {
        ...state,
        recipient: data,
      };
    case actionTypes.SET_CONVERSATIONS:
      return {
        ...state,
        conversations: data,
      };
    case actionTypes.SET_POPUP_CHAT:
      return {
        ...state,
        isDisplayedPopupChat: data,
      };
    default:
      return state;
  }
};

export default generalState;
