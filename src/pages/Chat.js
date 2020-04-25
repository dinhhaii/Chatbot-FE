/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChatUserList from '../components/chat/chat-userlist';
import Conversation from '../components/chat/chat-conversation';
import firebase from '../utils/firebase';
import { fetchUserList } from '../actions/user';
import { FIREBASE_MESSAGE_REF } from '../utils/constant';

const Chat = (props) => {
  const { userState } = props;
  const database = firebase.database();
  const messagesRef = database.ref(FIREBASE_MESSAGE_REF);

  const [showAside, setShowAside] = useState(false);
  const [recipient, setRecipient] = useState(null);
  const [conversation, setConversation] = useState([]);
  const [countUnreadMessages, setCountUnreadMessages] = useState({});
  const [message, setMessage] = useState({
    _idSender: userState.user && userState.user._id,
    _idRecipient: null,
    content: '',
    createdAt: new Date(),
    seen: false,
  });

  const userList = userState.user && userState.userList && userState.userList.filter(item => item._id !== userState.user._id);

  useEffect(() => {
    messagesRef.on('value', snapshot => {
      const allMessages = snapshot.val();

      if (userState.user && recipient) {
        const conversations = allMessages
          ? Object.values(allMessages)
            .map((value) => {
              return { ...value, id: value.key };
            })
            .filter(
              (messageItem) => (messageItem._idSender === userState.user._id
                    && messageItem._idRecipient === recipient._id)
                  || (messageItem._idRecipient === userState.user._id
                    && messageItem._idSender === recipient._id),
            )
          : [];

        const key = allMessages ? Object.keys(allMessages) : [];
        conversations.forEach((item, index) => { item.id = key[index]; });

        setConversation([...conversations]);
      } else {
        const countUnread = {};
        userState.userList.forEach(item => {
          const count = Object.values(allMessages).reduce((initVal, val) => (val._idSender === item._id && val._idRecipient === userState.user._id ? initVal + 1 : initVal), 0);
          countUnread[item._id] = count;
        });
        
        setCountUnreadMessages(countUnread);
        setConversation([]);
      }
    });
  }, [recipient, userState.user]);

  return (
    <div
      className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor bg-dark"
      id="kt_content"
      style={{ paddingTop: `${75}px` }}>
      <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        {userState.user && (
          <div className="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">
            <ChatUserList 
              setRecipient={setRecipient}
              message={message}
              setMessage={setMessage}
              userList={userList}
              showAside={showAside}
              setShowAside={setShowAside}
              conversation={conversation} 
              countUnreadMessages={countUnreadMessages} />
            <Conversation 
              recipient={recipient}
              setRecipient={setRecipient}
              message={message}
              setMessage={setMessage}
              setShowAside={setShowAside}
              conversation={conversation} />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserListAction: bindActionCreators(fetchUserList, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
