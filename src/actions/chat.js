import * as actionTypes from '../utils/actionTypes';

export const setUnreadMessages = (data) => {
  return {
    type: actionTypes.SET_UNREAD_MESSAGES,
    data,
  };
};

export const setStatusUser = (data) => {
  return {
    type: actionTypes.SET_STATUS_USER,
    data,
  };
};

export const setRecipient = (data) => {
  return {
    type: actionTypes.SET_RECIPIENT,
    data,
  };
};

export const setConversations = (data) => {
  return {
    type: actionTypes.SET_CONVERSATIONS,
    data,
  };
};

export const setPopupChat = (data) => {
  return {
    type: actionTypes.SET_POPUP_CHAT,
    data,
  };
};

export const setRecentList = (data) => {
  return {
    type: actionTypes.SET_RECENT_LIST,
    data,
  };
};
