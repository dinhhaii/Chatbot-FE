/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/helper';
import '../../utils/css/chat.css';

const UserCell = (props) => {
  const { user, message, setRecipient, setMessage, statusUsers, countUnreadMessages } = props;
  const status = statusUsers[user._id] ? statusUsers[user._id].status : 'offline';
  return (
    <div
      style={{ margin: 0 }}
      className={`kt-widget__item user-cell ${user._id === message._idRecipient && 'selected'}`}
      onClick={() => {
        setRecipient(user);
        setMessage({ ...message, _idRecipient: user._id });
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
        <span className="kt-widget__date">12 mins</span>
        {countUnreadMessages[user._id] && countUnreadMessages[user._id] > 0 ? <span className="kt-badge kt-badge--danger kt-font-bold">{countUnreadMessages[user._id]}</span> : null}
      </div>
    </div>
  );
};

export default UserCell;
