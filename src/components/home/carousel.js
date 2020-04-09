/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { Rate } from 'antd';
import { PATH } from '../../utils/constant';
import 'antd/dist/antd.css';
import { getRandom } from '../../utils/helper';

const CourseCarousel = ({ courseList }) => {
  return (
    <Carousel
      withoutControls={false}
      slidesToShow={3}
      slidesToScroll="auto"
      wrapAround
      autoplay
      transitionMode="scroll3d">
      {courseList.map((course, index) => {
        const rateAverage = course.feedback.reduce((total, num) => total + num.rate, 0) / course.feedback.length;
        return course.isDelete ? null : (
          <div className="item" key={index.toString()}>
            <div className="box_grid">
              <figure>
                <Link
                  to={`${PATH.COURSE_DETAIL}/${course._id}`}
                  className="wish_bt"
                />
                <Link to={`${PATH.COURSE_DETAIL}/${course._id}`}>
                  <div className="preview">
                    <span>Preview course</span>
                  </div>
                  <img src={course.imageURL} className="img-fluid" alt="" />
                </Link>
                <div className="price">${course.price}</div>
              </figure>
              <div className="wrapper">
                <small>{course.subject.name}</small>
                <h3>{course.name}</h3>
                <Link
                  to={`${PATH.PROFILE_USER}/${course.lecturer._id}`}
                  className={`mb-2 badge ${getRandom([
                    'badge-success',
                    'badge-danger',
                    'badge-warning',
                    'badge-info',
                  ])}`}>
                  {`${course.lecturer.firstName.toUpperCase()} ${course.lecturer.lastName.toUpperCase()}`}
                </Link>
                <p>{course.description}</p>
                <div className="rating">
                  <Rate
                    defaultValue={rateAverage}
                    style={{ padding: 0 }}
                    disabled
                  />
                </div>
              </div>
              <ul>
                <li>
                  <i className="icon_clock_alt" /> {course.duration}
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
