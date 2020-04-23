import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PATH } from '../../utils/constant';

const ReceivedMessageCell = (props) => {
  const { message, recipient } = props;
  return (
    <div className="kt-chat__message">
      <div className="kt-chat__user">
        <span className="kt-media kt-media--circle kt-media--sm">
          <img src={recipient.imageURL} alt="" />
        </span>
        <Link to={`${PATH.PROFILE_USER}/${recipient._id}`} class="kt-chat__username">
          {`${recipient.firstName} ${recipient.lastName}`}
        </Link>
        <span className="kt-chat__datetime">{message.createdAt}</span>
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

