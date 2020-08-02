/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-mixed-operators */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PATH } from '../../utils/constant';
import { getRandom } from '../../utils/helper';
import { updateCart, addToCart } from '../../actions/cart';

const CoursePurchase = (props) => {
  const { course, isRegistered, userState } = props;

  const aDiscount = course.discount && course.discount.find(value => value.status === 'available');

  return (
    <aside className="col-lg-4" id="sidebar">
      <div className="box_detail">
        <figure>
          <Link
            to={`${PATH.LESSON_DETAIL}/${course.lessons && course.lessons[0]._id}`}
            className="video">
            <i className="arrow_triangle-right" />
            <img src={course.imageURL} className="img-fluid w-100" alt="" />
            <span>View course preview</span>
          </Link>
        </figure>
        {isRegistered ? (
          <div className="mt-5 mb-5">
            You have already registered for this course.
          </div>
        ) : (
          <>
            <div className="price">
              {aDiscount ? (
                <>
                  <h4 className="d-inline">Price: </h4>$
                  {Math.round(
                    (course.price * (100 - aDiscount.percentage)) / 100,
                  )}
                  <span className="original_price">
                    <em style={{ color: 'red' }}>${course.price}</em>-
                    {aDiscount.percentage}%
                  </span>
                </>
              ) : (
                <>
                  <h4 className="d-inline">Price: </h4>${course.price}
                </>
              )}
            </div>
            {course.discount && course.discount.some((value) => value.status === 'coupon') && (
              <div className="price">
                <h4>Coupon</h4>
                {course.discount.map((value, index) => {
                  if (value.isDelete || value.status !== 'coupon') {
                    return null;
                  }
                  return (
                    <div key={index.toString()}>
                      <span
                        className={`badge ${getRandom([
                          'badge-danger',
                          'badge-success',
                          'badge-primary',
                          'badge-warning',
                        ])}`}
                        style={{ fontSize: `${10}pt` }}>
                        {value.code}
                      </span>
                      <span className="original_price ml-2">
                        {value.percentage}% discount price
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        {!isRegistered && (
          <button
            style={{ display: `${userState.user && userState.user.role === 'lecturer' && 'none'}` }}
            onClick={() => props.addToCartAction(userState.user._id, course._id)}
            className="btn_1 full-width"
            disabled={isRegistered}>
            Add to cart
          </button>
        )}
        
        <Link to={PATH.CHAT} className="btn_1 full-width outline">
          <i className="icon-chat-empty" /> Contact to Lecturer
        </Link>
        <div id="list_feat">
          <h3>What&apos;s includes</h3>
          <ul>
            <li>
              <i className="icon_mobile" />
              Mobile support
            </li>
            <li>
              <i className="icon_archive_alt" />
              Lesson archive
            </li>
            <li>
              <i className="icon_chat_alt" />
              Tutor chat
            </li>
          </ul>
        </div>
      </div>
    </aside>
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
    updateCartAction: bindActionCreators(updateCart, dispatch),
    addToCartAction: bindActionCreators(addToCart, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CoursePurchase));
