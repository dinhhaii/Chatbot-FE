/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-mixed-operators */
import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { confirmAlert } from 'react-confirm-alert'; // Import
import { showLoading, hideLoading } from '../../actions/general';
import { makePayment } from '../../api/payment';
import { updateCart } from '../../actions/cart';
import 'react-confirm-alert/src/react-confirm-alert.css';

const CartPayment = (props) => {
  const { userState, cartState, setCurrentStep } = props;
  const total = cartState.cart ? cartState.cart.items.reduce((initValue, value) => {
    return initValue + (value.discount ? value.course.price * (100 - value.discount.percentage) / 100 : value.course.price);
  }, 0) : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    confirmAlert({
      title: 'Are you sure you pay for these courses?',
      message: (
        <table className="table table-hover table-borderless cart-list" style={{ fontFamily: 'Poppins' }}>
          <tbody>
            {cartState.cart && cartState.cart.items.map((item, index) => {
              const price = item.discount ? ((item.course.price * (100 - item.discount.percentage)) / 100).toFixed(2) : item.course.price;
              return (
                <tr key={index.toString()}>
                  <td>
                    <div className="thumb_cart" style={{ borderRadius: 0 }}>
                      <img src={item.course.imageURL} alt="" />
                    </div>
                    <span className="item_cart">{item.course.name}</span>
                  </td>
                  <td className="text-center">
                    <strong>${price}</strong>
                  </td>
                </tr>
              );
            })}
            <tr style={{ borderTop: '1px solid gray' }}>
              <td className="text-center"><h4>Total</h4></td>
              <td className="text-center">
                <h4>${total}</h4>
              </td>
            </tr>
          </tbody>
        </table>
      ),
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            props.showLoadingAction();
            const name = `${userState.user.firstName} ${userState.user.lastName}_${userState.user._id}`;
            try {
              const { token } = await props.stripe.createToken({ name, email: userState.user.email, _id: userState.user._id });
              const courses = cartState.cart.items.map(item => {
                return {
                  price: item.discount ? item.course.price * (100 - item.discount.percentage) / 100 : item.course.price,
                  discount: item.discount ? item.discount : null,
                  idLearner: userState.user._id,
                  course: item.course,
                };
              });

              const { data } = await makePayment(token, courses);
              if (data) {
                props.updateCartAction({
                  _idCart: cartState.cart._id,
                  items: [],
                });
                toast.success('Payment successfully!');
                setCurrentStep(2);
              } else {
                toast.error('Payment failed!');
              }
            } catch (error) {
              toast.error(error.message);
              props.hideLoadingAction();
            }
          },
        },
        {
          label: 'No',
        },
      ],
    });
  };

  return (
    <div className="col-lg-8">
      <form
        id="paymentForm"
        onSubmit={handleSubmit}>
        <div className="box_cart">
          <div className="form_title">
            <h3>
              <strong>1</strong>Your Details
            </h3>
          </div>
          <div className="step">
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="col-form-label">
                    First name
                  </label>
                  <div>
                    <input
                      className="form-control"
                      name="_id"
                      type="text"
                      value=""
                  />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="col-form-label">
                    Last name
                  </label>
                  <div>
                    <input
                      className="form-control"
                      name="_id"
                      type="text"
                      value=""
                  />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label className="col-form-label">
                    Email
                  </label>
                  <div>
                    <input
                      className="form-control"
                      name="_id"
                      type="text"
                      value=""
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="form_title">
            <h3>
              <strong>2</strong>Payment Information
            </h3>
          </div>
          <div className="step">
            <div className="col-md-6 col-sm-6 mb-5">
              <img src="img/payments.png" alt="Cards" className="cards" />
            </div>
            <CardElement />
          </div>
          <hr />

          <div className="form_title">
            <h3>
              <strong>3</strong>Billing Address
            </h3>
          </div>
          <div className="step">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <span className="input">
                  <input className="input_field" type="text" />
                  <label className="input_label">
                    <span className="input__label-content">Country</span>
                  </label>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <span className="input">
                  <input className="input_field" type="text" />
                  <label className="input_label">
                    <span className="input__label-content">Street line 1</span>
                  </label>
                </span>
              </div>
              <div className="col-md-6 col-sm-6">
                <span className="input">
                  <input className="input_field" type="text" />
                  <label className="input_label">
                    <span className="input__label-content">Street line 2</span>
                  </label>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <span className="input">
                  <input className="input_field" type="text" />
                  <label className="input_label">
                    <span className="input__label-content">City</span>
                  </label>
                </span>
              </div>
              <div className="col-md-3">
                <span className="input">
                  <input className="input_field" type="text" />
                  <label className="input_label">
                    <span className="input__label-content">State</span>
                  </label>
                </span>
              </div>
              <div className="col-md-3">
                <span className="input">
                  <input className="input_field" type="text" />
                  <label className="input_label">
                    <span className="input__label-content">Postal code</span>
                  </label>
                </span>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    cartState: state.cartState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLoadingAction: bindActionCreators(showLoading, dispatch),
    hideLoadingAction: bindActionCreators(hideLoading, dispatch),
    updateCartAction: bindActionCreators(updateCart, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(CartPayment));
