/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReceivedMessageCell from './chat-conversation-receivedMessage';
import SentMessageCell from './chat-conversation-sentMessage';
import firebase from '../../utils/firebase';
import '../../utils/css/chat.css'; 
import { FIREBASE_MESSAGE_REF, PATH } from '../../utils/constant';

const Conversation = (props) => {
  const { setShowAside, message, setMessage, userState, chatState } = props;
  const { statusUser, recipient, conversations, unreadMessages } = chatState;

  const userStatus = statusUser && recipient ? statusUser[recipient._id] : null;
  const status = userStatus ? userStatus.status : 'offline';

  const scrollbar = useRef(null);
  const database = firebase.database();
  const messagesRef = database.ref(FIREBASE_MESSAGE_REF);

  useEffect(() => {
    if (userState.user && chatState.recipient) {
      scrollbar.current.scrollTop = scrollbar.current.scrollHeight;
    }
  }, [conversations]);

  const handleMessageChange = e => {
    setMessage({
      ...message,
      content: e.target.value,
    });
  };

  const sendMessage = () => {
    if (recipient && message._idRecipient && message.content.length !== 0) {
      messagesRef.push().set({
        ...message,
        _idSender: userState.user._id,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });

      setMessage({
        ...message,
        content: '',
      });
    }
  };

  const setReadMessage = () => {
    if (unreadMessages && recipient && unreadMessages[recipient._id]) {
      unreadMessages[recipient._id].forEach(value => {
        messagesRef.child(value).update({
          seen: true,
        });
      });
    }
  };

  return message._idRecipient && recipient && (
    <div className="kt-grid__item kt-grid__item--fluid kt-app__content" id="kt_chat_content" style={{ zIndex: 100 }}>
      <div className="kt-chat">
        <div className="kt-portlet kt-portlet--head-lg kt-portlet--last chat-box">
          <div className="kt-portlet__head pt-2" style={{ maxHeight: `${80}px`, height: `${10}%` }}>
            <div className="kt-chat__head ">
              {/* LEFT */}
              <div className="kt-chat__left">
                <button
                  type="button"
                  className="btn btn-clean btn-sm btn-icon btn-icon-md kt-hidden-desktop"
                  onClick={() => setShowAside(true)}>
                  <i className="icon-th-list" />
                </button>
              </div>
              {/* CENTER */}
              <div className="kt-chat__center">
                <div className="kt-chat__label">
                  <Link to={`${PATH.PROFILE_USER}/${recipient._id}`} class="kt-chat__title">
                    {`${recipient.firstName} ${recipient.lastName}`}
                  </Link>
                  <span className="kt-chat__status">
                    {status === 'online' && <> <span className="kt-badge kt-badge--dot kt-badge--success mr-2" /> Active </>}
                    {status === 'offline' && <> <span className="kt-badge kt-badge--dot kt-badge--danger mr-2" /> Offline </>}
                    {status === 'away' && <> <span className="kt-badge kt-badge--dot kt-badge--warning mr-2" /> Away </>}
                  </span>
                </div>
              </div>
              {/* RIGHT */}
              <div className="kt-chat__right" />
            </div>
          </div>
          <div className="kt-portlet__body" style={{ height: `${70}%` }}>
            <div className="kt-scroll kt-scroll--pull h-100 overflowY-auto" ref={scrollbar}>
              <div className="kt-chat__messages h-100">
                {conversations.map((item, index) => {
                  return item._idSender === userState.user._id ? <SentMessageCell key={index.toString()} message={item} /> : <ReceivedMessageCell key={index.toString()} message={item} recipient={recipient} />;
                })}
              </div>
            </div>
          </div>
          <div className="kt-portlet__foot" style={{ height: `${20}%`, padding: 10 }}>
            <div className="kt-chat__input">
              <div className="kt-chat__editor">
                <textarea
                  style={{ fontSize: '10pt', color: 'black', height: `${40}px` }}
                  placeholder="Type here..."
                  onKeyPress={e => {
                    if (e.which === 13 && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  onFocus={setReadMessage}
                  value={message.content}
                  onChange={handleMessageChange}
                />
              </div>
              <div className="kt-chat__toolbar mt-0">
                <div className="kt_chat__tools">
                  <Link to="/chat">
                    <i className="icon-smile" />
                  </Link>
                  <Link to="/chat">
                    <i className="icon-picture-2" />
                  </Link>
                  <Link to="/chat">
                    <i className="icon-camera-5" />
                  </Link>
                </div>
                <div className="kt_chat__actions">
                  <button
                    type="button"
                    className="btn btn-brand btn-md btn-upper btn-bold kt-chat__reply"
                    onClick={sendMessage}>
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
