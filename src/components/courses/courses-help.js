import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../utils/constant';

const CourseHelp = () => {
  return (
    <div className="bg_color_1">
      <div className="container margin_60_35">
        <div className="row">
          <div className="col-md-4">
            <Link to={PATH.CONTACT} className="boxed_list">
              <i className="pe-7s-help2" />
              <h4>Need Help? Contact us</h4>
              <p>Cum appareat maiestatis interpretaris et, et sit.</p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/" className="boxed_list">
              <i className="pe-7s-wallet" />
              <h4>Payments and Refunds</h4>
              <p>Qui ea nemore eruditi, magna prima possit eu mei.</p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/" className="boxed_list">
              <i className="pe-7s-note2" />
              <h4>Quality Standards</h4>
              <p>Hinc vituperata sed ut, pro laudem nonumes ex.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHelp;
