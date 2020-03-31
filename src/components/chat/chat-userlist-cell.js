import React from 'react';
import { Link } from 'react-router-dom';

const UserCell = () => {
  return (
    <div className="kt-widget__item">
      <span className="kt-media kt-media--circle">
        <img src="assets/media/users/300_9.jpg" alt="" />
      </span>
      <div className="kt-widget__info">
        <div className="kt-widget__section">
          <Link to="/" class="kt-widget__username">
            Matt Pears
          </Link>
          <span className="kt-badge kt-badge--success kt-badge--dot" />
        </div>
        <span className="kt-widget__desc">Head of Development</span>
      </div>
      <div className="kt-widget__action">
        <span className="kt-widget__date">36 Mines</span>
        <span className="kt-badge kt-badge--success kt-font-bold">7</span>
      </div>
    </div>
  );
};

export default UserCell;
