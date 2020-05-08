/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import { getRandom } from '../../utils/helper';
import { PATH } from '../../utils/constant';
import { updateCart } from '../../actions/cart';

const CoursesList = (props) => {
  const { data, cartState } = props;

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
    <div>
      {data.map((value, index) => {
        const rateAverage = value.feedback.reduce((total, num) => total + num.rate, 0) / value.feedback.length;

        if (!value.isDelete) {
          return (
            <div className="box_list wow" key={index.toString()}>
              <div className="row no-gutters">
                <div className="col-lg-5">
                  <figure className="block-reveal">
                    <div className="block-horizzontal" />
                    <Link to={`${PATH.COURSE_DETAIL}/${value._id}`}>
                      <img src={value.imageURL} className="w-100" alt="" />
                    </Link>
                    <div className="preview" onClick={() => props.history.push(`${PATH.COURSE_DETAIL}/${value._id}`)}>
                      <span>Preview course</span>
                    </div>
                  </figure>
                </div>
                <div className="col-lg-7">
                  <div className="wrapper">
                    <Link href="#0" class="wish_bt" />
                    <div className="price">${value.price}</div>
                    <small>{value.subject.name}</small>
                    <h3>{value.name}</h3>
                    <Link
                      to={`${PATH.PROFILE_USER}/${value.lecturer._id}`}
                      className={`mb-2 pt-2 badge ${getRandom([
                        'badge-success',
                        'badge-danger',
                        'badge-warning',
                        'badge-info',
                      ])}`}>
                      {`${value.lecturer.firstName.toUpperCase()} ${value.lecturer.lastName.toUpperCase()}`}
                    </Link>
                    <p style={{ height: 100, maxHeight: 100, overflow: 'hidden' }}>{value.description}</p>
                    <Rate
                      defaultValue={rateAverage}
                      style={{ padding: 0 }}
                      disabled
                    />
                  </div>
                  <ul>
                    <li>
                      <i className="icon_clock_alt" /> {value.duration}
                    </li>
                    <li>
                      <Link onClick={() => addToCart(value)}>Add to cart</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CoursesList));
