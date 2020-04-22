/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import ReceivedMessageCell from './chat-conversation-receivedMessage';
import SentMessageCell from './chat-conversation-sentMessage';
import '../../utils/css/chat.css'; 

const Conversation = (props) => {
  const { setShowAside } = props;
  return (
    <div className="kt-grid__item kt-grid__item--fluid kt-app__content" id="kt_chat_content">
      <div className="kt-chat">
        <div className="kt-portlet kt-portlet--head-lg kt-portlet--last chat-box">
          <div className="kt-portlet__head" style={{ maxHeight: `${80}px`, height: `${10}%` }}>
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
                  <Link to="/" class="kt-chat__title">
                    Jason Muller
                  </Link>
                  <span className="kt-chat__status">
                    <span className="kt-badge kt-badge--dot kt-badge--success mr-2" />
                    Active
                  </span>
                </div>
              </div>
              {/* RIGHT */}
              <div className="kt-chat__right" />
            </div>
          </div>
          <div className="kt-portlet__body" style={{ height: `${70}%` }}>
            <div className="kt-scroll kt-scroll--pull h-100 overflowY-auto">
              <div className="kt-chat__messages h-100">
                <ReceivedMessageCell />
                <SentMessageCell />
                <ReceivedMessageCell />
                <ReceivedMessageCell />
                <SentMessageCell />
                <ReceivedMessageCell />
                <ReceivedMessageCell />
                <SentMessageCell />
                <ReceivedMessageCell />
              </div>
            </div>
          </div>
          <div className="kt-portlet__foot" style={{ height: `${20}%` }}>
            <div className="kt-chat__input">
              <div className="kt-chat__editor">
                <textarea
                  style={{ height: `${50}px` }}
                  placeholder="Type here..."
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
                    className="btn btn-brand btn-md btn-upper btn-bold kt-chat__reply">
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

export default Conversation;
