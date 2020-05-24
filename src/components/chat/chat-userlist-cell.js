/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { capitalize, calculateTimeTilNow } from '../../utils/helper';
import firebase from '../../utils/firebase';
import { FIREBASE_MESSAGE_REF } from '../../utils/constant';
import { setRecipient } from '../../actions/chat';
import '../../utils/css/chat.css';

const UserCell = (props) => {
  const { user, message, setMessage, chatState } = props;
  const database = firebase.database();
  const messagesRef = database.ref(FIREBASE_MESSAGE_REF);

  const unreadMessages = chatState.unreadMessages || null;
  const userStatus = chatState.statusUser ? chatState.statusUser[user._id] : null;
  const status = userStatus ? userStatus.status : 'offline';
  const timestamp = userStatus ? userStatus.lastOnline : null;
  const [lastOnline, setLastOnline] = useState(null);

  useEffect(() => {
    if (timestamp && lastOnline == null) {
      setLastOnline(calculateTimeTilNow(timestamp));
    }
  });

  const setReadMessage = () => {
    if (unreadMessages && unreadMessages[user._id]) {
      unreadMessages[user._id].forEach(value => {
        messagesRef.child(value).update({
          seen: true,
        });
      });
    }
  };

  return (
    <div
      style={{ margin: 0 }}
      className={`kt-widget__item user-cell ${user._id === message._idRecipient && 'selected'}`}
      onClick={() => {
        props.setRecipientAction(user);
        setMessage({ ...message, _idRecipient: user._id });
        setReadMessage();
        if (timestamp) {
          setLastOnline(calculateTimeTilNow(timestamp));
        }
      }}>
      <span className="kt-media kt-media--circle">
        <img src={user.imageURL} alt="" />
      </span>
      
      <div className="kt-widget__info">
        <div className="kt-widget__section">
          <Link class="kt-widget__username">
            {`${user.firstName} ${user.lastName}`}
          </Link>
          {status === 'online' && <span className="kt-badge kt-badge--success kt-badge--dot" />}
          {status === 'offline' && <span className="kt-badge kt-badge--danger kt-badge--dot" />}
          {status === 'away' && <span className="kt-badge kt-badge--warning kt-badge--dot" />}
        </div>
        <span className="kt-widget__desc">{capitalize(user.role)}</span>
      </div>
      <div className="kt-widget__action">
        <span className="kt-widget__date">{lastOnline === '0s' ? '1s' : lastOnline}</span>
        {unreadMessages[user._id] && unreadMessages[user._id].length > 0 ? <span className="kt-badge kt-badge--danger kt-font-bold">{unreadMessages[user._id].length}</span> : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    chatState: state.chatState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRecipientAction: bindActionCreators(setRecipient, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCell);
