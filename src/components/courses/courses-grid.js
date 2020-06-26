/* eslint-disable no-mixed-operators */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PATH } from '../../utils/constant';
import { updateCart, addToCart } from '../../actions/cart';

const CoursesGrid = (props) => {
  const { data, userState } = props;

  if (data.length === 0 || !data) {
    return <div className="text-center m-5">No courses were found.</div>;
  }
  return (
    <div className="row">
      {data.map((value, index) => {
        const rateAverage = parseFloat((value.feedback.reduce((total, num) => total + num.rate, 0) / value.feedback.length).toFixed(1));
        console.log(index, rateAverage);
        const discount = value.discount.find(item => item.status === 'available');
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
                  {discount 
                    ? <div className="price">${Math.floor(value.price * (100 - discount.percentage) / 100)} <del style={{ color: 'red', fontSize: '10pt' }}>${value.price}</del></div>
                    : <div className="price">${value.price}</div>}
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
                  <p className="description">{value.description}</p>
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
                    <i className="icon_clock_alt" /> {value.duration}
                  </li>
                  <li>
                    {userState.user && userState.user.role === 'learner' ? (
                      <Link onClick={() => {
                        if (userState.user) {
                          props.addToCartAction(userState.user._id, value._id);
                        }
                      }}>
                        Add to cart
                      </Link>
                    ) : (
                      <Link to={`${PATH.COURSE_DETAIL}/${value._id}`}>
                        Preview
                      </Link>
                    )}
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
    userState: state.userState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartAction: bindActionCreators(updateCart, dispatch),
    addToCartAction: bindActionCreators(addToCart, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CoursesGrid));
