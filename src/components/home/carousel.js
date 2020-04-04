/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { PATH, IMAGE_URL } from '../../utils/constant';

const CourseCarousel = ({ courseList }) => {
  return (
    <Carousel withoutControls={false} slidesToShow={3} slidesToScroll="auto" wrapAround autoplay transitionMode="scroll3d">
      {courseList.map((course, index) => {
        return course.isDelete ? null : (
          <div className="item" key={index.toString()}>
            <div className="box_grid">
              <figure>
                <Link to={`${PATH.COURSE_DETAIL}/${course._id}`} className="wish_bt" />
                <Link to={`${PATH.COURSE_DETAIL}/${course._id}`}>
                  <div className="preview">
                    <span>Preview course</span>
                  </div>
                  <img
                    src={IMAGE_URL.BACKGROUND_1}
                    className="img-fluid"
                    alt=""
                  />
                </Link>
                <div className="price">${course.price}</div>
              </figure>
              <div className="wrapper">
                <small>{course._idSubject}</small>
                <h3>{course.name}</h3>
                <p>
                  {course.description}
                </p>
                <div className="rating">
                  <i className="icon_star voted" />
                  <i className="icon_star voted" />
                  <i className="icon_star voted" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <small>(145)</small>
                </div>
              </div>
              <ul>
                <li>
                  <i className="icon_clock_alt" /> 1h 30min
                </li>
                <li>
                  <i className="icon_like" /> 890
                </li>
                <li>
                  <Link to="/">Enroll now</Link>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default CourseCarousel;
