/* eslint-disable no-mixed-operators */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRandom } from '../../utils/helper';
import { PATH } from '../../utils/constant';
import { updateCart, addToCart } from '../../actions/cart';

const CoursesList = (props) => {
  const { data, userState, invoiceState } = props;
  
  if (data.length === 0 || !data) {
    return <div className="text-center m-5">No courses were found.</div>;
  }
  return (
    <div>
      {data.map((value, index) => {
        const rateAverage = parseFloat((value.feedback.reduce((total, num) => total + num.rate, 0) / value.feedback.length).toFixed(1));
        const discount = value.discount.find(item => item.status === 'available');

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
                    {discount 
                      ? <div className="price">${Math.floor(value.price * (100 - discount.percentage) / 100)} <del style={{ color: 'red', fontSize: '10pt' }}>${value.price}</del></div>
                      : <div className="price">${value.price}</div>}
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
                    <p className="description-2">{value.description}</p>
                    <Rate
                      defaultValue={rateAverage}
                      style={{ padding: 0 }}
                      allowHalf
                      disabled
                    />
                  </div>
                  <ul>
                    <li>
                      <i className="icon_clock_alt" /> {value.duration}
                    </li>
                    {userState.user && userState.user.role === 'learner' ? (
                      <li>
                        {invoiceState.invoiceLearnerList.some(item => item.invoice.status !== 'canceled' && item.course._id === value._id) 
                          ? (
                            <Link className="preview-btn">
                              <i className="icon-check-1" /> Purchased
                            </Link>
                          )
                          : (
                            <Link onClick={() => {
                              if (userState.user) {
                                props.addToCartAction(userState.user._id, value._id);
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
                          to={`${PATH.COURSE_DETAIL}/${value._id}`}>
                          Preview
                        </Link>
                      </li>
                    )}
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
    userState: state.userState,
    invoiceState: state.invoiceState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartAction: bindActionCreators(updateCart, dispatch),
    addToCartAction: bindActionCreators(addToCart, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CoursesList));
