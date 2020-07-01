/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Carousel from 'nuka-carousel';
import { Rate, Spin } from 'antd';
import { updateCart, addToCart } from '../../actions/cart';
import { PATH } from '../../utils/constant';
import { getRandom } from '../../utils/helper';
import 'antd/dist/antd.css';
import { fetchInvoiceLearnerList } from '../../actions/invoice';

const CourseCarousel = (props) => {
  const { courseList, userState, invoiceState } = props;

  const courses = courseList
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  useEffect(() => {
    if (userState.user) {
      props.fetchInvoiceLearnerListAction(props.userState.user._id);
    }
  }, [userState.user]);

  if (courses && courses.length !== 0) {
    return (
      <Carousel
        withoutControls
        slidesToShow={3}
        slidesToScroll="auto"
        wrapAround
        transitionMode="scroll3d">
        {courses.map((course, index) => {
          const rateAverage = parseFloat((course.feedback.reduce((total, num) => total + num.rate, 0) / course.feedback.length).toFixed(1));
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
                    <img
                      src={course.imageURL}
                      className="img-fluid"
                      alt=""
                      style={{ height: 200 }}
                    />
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
                  <p className="description">
                    {course.description}
                  </p>
                  <div className="rating">
                    <Rate
                      defaultValue={rateAverage}
                      style={{ padding: 0 }}
                      allowHalf
                      disabled
                    />
                  </div>
                </div>
                <ul>
                  <li>
                    <i className="icon_clock_alt" /> {course.duration}
                  </li>
                  {userState.user && userState.user.role === 'learner' ? (
                    <li>
                      {invoiceState.invoiceLearnerList.some(value => value.invoice.status !== 'canceled' && value.course._id === course._id) 
                        ? (
                          <Link className="preview-btn">
                            <i className="icon-check-1" /> Purchased
                          </Link>
                        )
                        : (
                          <Link onClick={() => {
                            if (userState.user) {
                              props.addToCartAction(userState.user._id, course._id);
                            }
                          }}>
                            Add to cart
                          </Link>
                        )}
                    </li>
                  ) : (
                    <li>
                      <Link
                        className="preview-btn" 
                        to={`${PATH.COURSE_DETAIL}/${course._id}`}>
                        Preview
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          );
        })}
      </Carousel>
    );
  }
  return <div className="text-center m-5"><Spin /></div>;
};

const mapStateToProps = (state) => {
  return {
    cartState: state.cartState,
    userState: state.userState,
    invoiceState: state.invoiceState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartAction: bindActionCreators(updateCart, dispatch),
    addToCartAction: bindActionCreators(addToCart, dispatch),
    fetchInvoiceLearnerListAction: bindActionCreators(fetchInvoiceLearnerList, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseCarousel);
