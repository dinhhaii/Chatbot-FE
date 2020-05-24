/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Carousel from 'nuka-carousel';
import { Rate } from 'antd';
import { toast } from 'react-toastify';
import { updateCart } from '../../actions/cart';
import { PATH } from '../../utils/constant';
import 'antd/dist/antd.css';
import { getRandom } from '../../utils/helper';

const CourseCarousel = (props) => {
  const { courseList, cartState } = props;

  const courses = courseList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);

  const addToCart = (course) => {
    // Map CartState to items
    const items = [];
    cartState.cart.items.forEach(element => {
      if (!element.course.isDelete) {
        if (element.discount) {
          const discount = element.course.discountList.find(value => value._id === element.discount._id && value.status !== 'expired'); 
          items.push({
            _idCourse: element.course._id,
            _idDiscount: discount ? discount._id : null,
          });
        } else {
          const availableDiscount = element.course.discountList.find(value => value.status === 'available');
          items.push({
            _idCourse: element.course._id,
            _idDiscount: availableDiscount ? availableDiscount._id : null,
          });
        }
      }
    });
    // Add new course to Cart
    if (cartState.cart.items.find(value => value.course._id === course._id)) {
      toast.warn('The course is already in cart.');
    } else {
      const availableDiscount = course.discount.find(value => value.status === 'available');
      items.push({
        _idCourse: course._id,
        _idDiscount: availableDiscount ? availableDiscount._id : null,
      });
    }

    // Update Data
    const updateData = {
      _idCart: cartState.cart._id,
      items,
    };
    props.updateCartAction(updateData);
  };

  return (
    <Carousel
      withoutControls={false}
      slidesToShow={3}
      slidesToScroll="auto"
      wrapAround
      transitionMode="scroll3d">
      {courses.map((course, index) => {
        const rateAverage = course.feedback.reduce((total, num) => total + num.rate, 0) / course.feedback.length;
        return course.isDelete ? null : (
          <div className="item" key={index.toString()}>
            <div className="box_grid">
              <figure style={{ textAlign: 'center' }}>
                <Link
                  to={`${PATH.COURSE_DETAIL}/${course._id}`}
                  className="wish_bt"
                />
                <Link to={`${PATH.COURSE_DETAIL}/${course._id}`}>
                  <div className="preview">
                    <span>Preview course</span>
                  </div>
                  <img src={course.imageURL} className="img-fluid" alt="" style={{ height: 200 }} />
                </Link>
                <div className="price">${course.price}</div>
              </figure>
              <div className="wrapper">
                <small>{course.subject.name}</small>
                <h3>{course.name}</h3>
                <Link
                  to={`${PATH.PROFILE_USER}/${course.lecturer._id}`}
                  className={`pt-2 mb-2 badge ${getRandom([
                    'badge-success',
                    'badge-danger',
                    'badge-warning',
                    'badge-info',
                  ])}`}>
                  {`${course.lecturer.firstName.toUpperCase()} ${course.lecturer.lastName.toUpperCase()}`}
                </Link>
                <p style={{ height: 100, overflow: 'hidden' }}>{course.description}</p>
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
                  <Link onClick={() => addToCart(course)}>Add to cart</Link>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};


const mapStateToProps = (state) => {
  return {
    cartState: state.cartState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartAction: bindActionCreators(updateCart, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseCarousel);
