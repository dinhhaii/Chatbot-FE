import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../utils/constant';

const CallSection = () => {
  return (
    <div className="call_section">
      <div className="container clearfix">
        <div className="col-lg-5 col-md-6 float-right wow" data-wow-offset="250">
          <div className="block-reveal">
            <div className="block-vertical" />
            <div className="box_1">
              <h3>Interact With Chatbot Now</h3>
              <p>Study any topic, choose from thousands of courses now, receive online consulting of courses through AI Chatbot</p>
              <Link to={PATH.ABOUT} className="btn_1 rounded">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallSection;
