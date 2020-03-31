import React from 'react';
import { Link } from 'react-router-dom';

const SentMessageCell = ({ conversation }) => {
  return (
    <div className="kt-chat__message kt-chat__message--right">
      <div className="kt-chat__user">
        <span className="kt-chat__datetime">Just Now</span>
        <Link to="/" class="kt-chat__username">
          You
        </Link>
        <span className="kt-media kt-media--circle kt-media--sm">
          <img src="assets/media/users/300_21.jpg" alt="" />
        </span>
      </div>
      <div className="kt-chat__text kt-bg-light-brand">
        Most purchased Business courses during this sale!
      </div>
    </div>
  );
};

export default SentMessageCell;
