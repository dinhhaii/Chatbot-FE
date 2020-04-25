import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PATH } from '../../utils/constant';
import { calculateTimeTilNow, formatDateToString2 } from '../../utils/helper';
import '../../utils/css/chat.css';

const ReceivedMessageCell = (props) => {
  const { message, recipient } = props;
  const diffTime = calculateTimeTilNow(message.createdAt);
  const date = diffTime.includes('d') ? formatDateToString2(message.createdAt) : `${diffTime} ago`;
  return (
    <div className="kt-chat__message">
      <div className="kt-chat__user">
        <span className="kt-media kt-media--circle kt-media--sm">
          <img src={recipient.imageURL} alt="" />
        </span>
        <Link to={`${PATH.PROFILE_USER}/${recipient._id}`} class="kt-chat__username">
          {`${recipient.firstName} ${recipient.lastName}`}
        </Link>
        <span className="kt-chat__datetime spoiler">
          <span>{date === '0s ago' ? 'Just Now' : date}</span>
        </span>
      </div>
      <div className="kt-chat__text kt-bg-light-success">
        {message.content}
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ReceivedMessageCell);

