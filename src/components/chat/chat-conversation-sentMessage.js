/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SentMessageCell = (props) => {
  const { message, userState } = props;
  return (
    <div className="kt-chat__message kt-chat__message--right">
      <div className="kt-chat__user">
        <span className="kt-chat__datetime">Just Now</span>
        <Link class="kt-chat__username">
          You
        </Link>
        <span className="kt-media kt-media--circle kt-media--sm">
          <img src={userState.user.imageURL} alt="" />
        </span>
      </div>
      <div className="kt-chat__text kt-bg-light-brand">
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

export default connect(mapStateToProps, mapDispatchToProps)(SentMessageCell);

