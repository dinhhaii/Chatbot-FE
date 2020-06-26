/* eslint-disable no-mixed-operators */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Carousel from 'nuka-carousel';
import { addToCart } from '../../actions/cart';
import { PATH } from '../../utils/constant';
import 'antd/dist/antd.css';

const CourseSuggestion = (props) => {
  const { courses } = props;

  return (
    <div>
      <h5 className="ml-2">Suggestion</h5>
      <Carousel
        autoplay
        withoutControls
        slidesToShow={1}
        slidesToScroll="auto"
        wrapAround>
        {courses.map((course, index) => {
          const discount = course.discount.find(item => item.status === 'available');
          return course.isDelete ? null : (
            <div className="item" key={index.toString()}>
              <div className="box_grid">
                <figure style={{ textAlign: 'center' }}>
                  <Link to={`${PATH.COURSE_DETAIL}/${course._id}`}>
                    <img
                      src={course.imageURL}
                      className="img-fluid"
                      alt=""
                      style={{ height: 200 }}
                    />
                  </Link>
                  {discount 
                    ? <div className="price">${Math.floor(course.price * (100 - discount.percentage) / 100)} <del style={{ color: 'red', fontSize: '10pt' }}>${course.price}</del></div>
                    : <div className="price">${course.price}</div>}
                </figure>
                <div className="wrapper">
                  <h3>{course.name}</h3>
                  <p>{course.lecturer.firstName} {course.lecturer.lastName}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartState: state.cartState,
    userState: state.userState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCartAction: bindActionCreators(addToCart, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseSuggestion);
