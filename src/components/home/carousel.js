/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { PATH } from '../../utils/constant';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const carouselOptions = {
  margin: 30,
  pullDrag: true,
  responsiveClass: true,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};

const CourseCarousel = ({ courseList }) => {
  return (
    <OwlCarousel className="owl-stage-outer owl-drag" {...carouselOptions}>
      {courseList.map((course, index) => {
        return course.isDelete ? null : (
          <div className="item" key={index.toString()}>
            <div className="box_grid">
              <figure>
                <Link to={`${PATH.COURSE_DETAIL}`} className="wish_bt" />
                <Link to={`${PATH.COURSE_DETAIL}`}>
                  <div className="preview">
                    <span>Preview course</span>
                  </div>
                  <img
                    src="http://via.placeholder.com/800x533/ccc/fff/course__list_1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
                <div className="price">$39</div>
              </figure>
              <div className="wrapper">
                <small>Category</small>
                <h3>Name</h3>
                <p>
                  Id placerat tacimates definitionem sea, prima quidam vim no.
                  Duo nobis persecuti cu.
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
    </OwlCarousel>
  );
};

export default CourseCarousel;
