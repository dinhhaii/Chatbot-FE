/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ChatUserList from '../components/chat/chat-userlist';
import Conversation from '../components/chat/chat-conversation';

const Chat = () => {
  return (
    <div
      className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor bg-dark"
      id="kt_content"
      style={{ paddingTop: `${75}px` }}>
      {/* begin:: Content */}
      <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        {/* Begin::App */}
        <div className="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">
          {/* Begin:: App Aside Mobile Toggle */}
          <button className="kt-app__aside-close" id="kt_chat_aside_close">
            <i className="la la-close" />
          </button>

          <ChatUserList />

          <Conversation />
        </div>

        {/* End::App */}
      </div>

      {/* end:: Content */}
    </div>
  );
};

export default Chat;
