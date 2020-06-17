import React from 'react';

const CallSection = () => {
  return (
    <div className="call_section">
      <div className="container clearfix">
        <div
          className="col-lg-5 col-md-6 float-right wow"
          data-wow-offset="250">
          <div className="block-reveal">
            <div className="block-vertical" />
            <div className="box_1">
              <h3>Interact With Chatbot Now</h3>
              <p>
                Study any topic, choose from thousands of courses now, receive
                online consulting of courses through AI Chatbot
              </p>
              <button
                onClick={() => {
                  window.open('https://m.me/103199398091895', '_blank');
                }}
                className="btn_1 rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallSection;
