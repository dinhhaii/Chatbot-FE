import React from 'react';

const LessonComment = () => {
  return (
    <section id="reviews">
      <div className="reviews-container">
        <div className="review-box clearfix">
          <figure className="rev-thumb">
            <img
              src="http://via.placeholder.com/150x150/ccc/fff/avatar1.jpg"
              alt=""
            />
          </figure>
          <div className="rev-content">
            <div className="rev-info">Admin – April 03, 2016:</div>
            <div className="rev-text">
              <p>
                Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo
                pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
              </p>
            </div>
          </div>
        </div>
        {/* /review-box */}
        <div className="review-box clearfix">
          <figure className="rev-thumb">
            <img
              src="http://via.placeholder.com/150x150/ccc/fff/avatar2.jpg"
              alt=""
            />
          </figure>
          <div className="rev-content">
            <div className="rev-info">Ahsan – April 01, 2016:</div>
            <div className="rev-text">
              <p>
                Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo
                pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
              </p>
            </div>
          </div>
        </div>
        {/* /review-box */}
        <div className="review-box clearfix">
          <figure className="rev-thumb">
            <img
              src="http://via.placeholder.com/150x150/ccc/fff/avatar3.jpg"
              alt=""
            />
          </figure>
          <div className="rev-content">
            <div className="rev-info">Sara – March 31, 2016:</div>
            <div className="rev-text">
              <p>
                Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo
                pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
              </p>
            </div>
          </div>
        </div>
        {/* /review-box */}
      </div>
      {/* /review-container */}
    </section>
  );
};

export default LessonComment;
