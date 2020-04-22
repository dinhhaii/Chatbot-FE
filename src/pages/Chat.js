/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ChatUserList from '../components/chat/chat-userlist';
import Conversation from '../components/chat/chat-conversation';

const Chat = () => {
  const [showAside, setShowAside] = useState(false);

  return (
    <div
      className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor bg-dark"
      id="kt_content"
      style={{ paddingTop: `${75}px` }}>
      <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        <div className="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">

          <ChatUserList showAside={showAside} setShowAside={setShowAside} />

          <Conversation setShowAside={setShowAside} />
        </div>

        {/* End::App */}
      </div>

      {/* end:: Content */}
    </div>
  );
};

export default Chat;
