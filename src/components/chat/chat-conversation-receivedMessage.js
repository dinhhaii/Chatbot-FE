import React from 'react';
import { Link } from 'react-router-dom';

const ReceivedMessageCell = ({ conversation, user }) => {
  return (
    <div className="kt-chat__message">
      <div className="kt-chat__user">
        <span className="kt-media kt-media--circle kt-media--sm">
          <img src="assets/media/users/100_12.jpg" alt="" />
        </span>
        <Link to="/" class="kt-chat__username">
          Jason Muller
        </Link>
        <span className="kt-chat__datetime">30 Seconds</span>
      </div>
      <div className="kt-chat__text kt-bg-light-success">
        Discover what students who viewed Learn Figma - UI/UX Design <br />
        Essential Training also viewed
      </div>
    </div>
  );
};

export default ReceivedMessageCell;
