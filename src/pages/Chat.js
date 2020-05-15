/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import ChatUserList from '../components/chat/chat-userlist';
import Conversation from '../components/chat/chat-conversation';

const Chat = (props) => {
  const { userState } = props;

  const [showAside, setShowAside] = useState(true);
  const [message, setMessage] = useState({
    _idSender: userState.user && userState.user._id,
    _idRecipient: null,
    content: '',
    createdAt: new Date(),
    seen: false,
  });

  const userList = userState.user && userState.userList && userState.userList.filter(item => item._id !== userState.user._id);

  return (
    <div
      className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor bg-dark"
      id="kt_content"
      style={{ paddingTop: `${75}px` }}>
      <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        {userState.user && (
          <div className="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">
            <ChatUserList 
              message={message}
              setMessage={setMessage}
              userList={userList}
              showAside={showAside}
              setShowAside={setShowAside} />
            <Conversation
              message={message}
              setMessage={setMessage}
              setShowAside={setShowAside}/>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    chatState: state.chatState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
