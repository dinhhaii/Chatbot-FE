/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-mixed-operators */
import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal } from 'antd';
import { showLoading, hideLoading } from '../../actions/general';
import { makePayment } from '../../api/payment';
import { updateCart } from '../../actions/cart';

const CartPayment = (props) => {
  const {
    userState, cartState, setCurrentStep, showDialogSubmit, setShowDialogSubmit, 
  } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.showLoadingAction();
    const name = `${userState.user.firstName} ${userState.user.lastName}_${userState.user._id}`;
    try {
      cartState.cart.items.forEach(async item => {
        const { token } = await props.stripe.createToken({ name, email: userState.user.email, _id: userState.user._id });
        const course = {
          name: item.course.name,
          price: item.discount ? item.course.price * (100 - item.discount.percentage) / 100 : item.course.price,
          discount: item.discount ? item.discount : null,
        };
        const { data } = await makePayment(token, course);
        if (data) {
          props.updateCartAction({
            _idCart: cartState.cart._id,
            items: [],
          });
          setCurrentStep(2);
        }
      });
    } catch (error) {
      toast.error(error.message);
      props.hideLoadingAction();
    }
  };

  return (
    <div className="col-lg-8">
      <form id="paymentForm" onSubmit={handleSubmit}>
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

      <Modal 
        title="Payment Confirm"
        visible={showDialogSubmit}
        onOk={handleSubmit.bind(document.getElementById('paymentForm'))}
        onCancel={() => setShowDialogSubmit(false)}>
        Hello
      </Modal>
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
