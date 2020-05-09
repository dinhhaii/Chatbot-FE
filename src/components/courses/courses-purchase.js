/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-mixed-operators */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { PATH } from '../../utils/constant';
import { getRandom } from '../../utils/helper';
import { updateCart } from '../../actions/cart';

const CoursePurchase = (props) => {
  const { course, cartState } = props;

  const aDiscount = course.discount.find(value => value.status === 'available');

  const addToCart = (_course) => {
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
    if (cartState.cart.items.find(value => value.course._id === _course._id)) {
      toast.warn('The course is already in cart.');
    } else {
      const availableDiscount = _course.discount.find(value => value.status === 'available');
      items.push({
        _idCourse: _course._id,
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
    <aside className="col-lg-4" id="sidebar">
      <div className="box_detail">
        <figure>
          <Link to={`${PATH.LESSON_DETAIL}/${course.lessons[0]._id}`} className="video">
            <i className="arrow_triangle-right" />
            <img src={course.imageURL} className="img-fluid" alt="" />
            <span>View course preview</span>
          </Link>
        </figure>
        <div className="price">
          {aDiscount ? (
            <>
              <h4 className="d-inline">Price: </h4>${Math.round(course.price * (100 - aDiscount.percentage) / 100)}
              <span className="original_price">
                <em style={{ color: 'red' }}>${course.price}</em>
                -{aDiscount.percentage}%
              </span> 
            </>
          ) : (
            <>
              <h4 className="d-inline">Price: </h4>${course.price} 
            </>
          )}
        </div>
        {course.discount.some(value => value.status === 'coupon') && (
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
        
        <Link onClick={() => addToCart(course)} className="btn_1 full-width">
          Add to cart
        </Link>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartAction: bindActionCreators(updateCart, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CoursePurchase));
