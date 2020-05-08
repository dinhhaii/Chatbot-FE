/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import { PATH } from '../../utils/constant';
import { updateCart } from '../../actions/cart';

const CoursesGrid = (props) => {
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
    <div className="row">
      {data.map((value, index) => {
        const rateAverage = value.feedback.reduce((total, num) => total + num.rate, 0) / value.feedback.length;
        if (!value.isDelete) {
          return (
            <div className="col-md-6" key={index.toString()}>
              <div className="box_grid wow">
                <figure className="block-reveal" style={{ height: 250 }}>
                  <div className="block-horizzontal" />
                  <Link href="#0" class="wish_bt" />
                  <Link to={`${PATH.COURSE_DETAIL}/${value._id}`}>
                    <img src={value.imageURL} className="img-fluid w-100" alt="" />
                  </Link>
                  <div className="price">${value.price}</div>
                  <div className="preview" onClick={() => props.history.push(`${PATH.COURSE_DETAIL}/${value._id}`)}>
                    <span>Preview course</span>
                  </div>
                </figure>
                <div className="wrapper">
                  <small>{value.subject.name}</small>
                  <h3>{value.name}</h3>
                  <Link
                    to={`${PATH.PROFILE_USER}/${value.lecturer._id}`}
                    className="mb-2 pt-2 badge badge-success">
                    {`${value.lecturer.firstName.toUpperCase()} ${value.lecturer.lastName.toUpperCase()}`}
                  </Link>
                  <p style={{ height: 120, maxHeight: 120, overflow: 'hidden' }}>{value.description}</p>
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
                    <i className="icon_clock_alt" /> {value.duration}
                  </li>
                  <li>
                    <Link onClick={() => addToCart(value)}>Add to cart</Link>
                  </li>
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CoursesGrid));
