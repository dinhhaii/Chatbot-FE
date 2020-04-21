/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StripeProvider, Elements } from 'react-stripe-elements';
import CartPayment from '../components/carts/cart-payment';
import CartItems from '../components/carts/cart-items';
import CartTotal from '../components/carts/cart-total';
import CartStep from '../components/carts/cart-step';
import { fetchCart } from '../actions/cart';
import { PUBLISH_KEY_STRIPE } from '../utils/constant';

const Cart = (props) => {
  const { userState } = props;
  const [currentStep, setCurrentStep] = useState(0);
  const [showDialogSubmit, setShowDialogSubmit] = useState(false);

  useEffect(() => {
    if (userState.user) {
      props.fetchCartAction(userState.user._id);
    }
  }, []);

  const steps = [
    {
      title: <> <i className="icon-cart mr-2" /> Your Cart </>,
      content: <CartItems />,
    },
    {
      title: <> <i className="icon-money-2 mr-2" /> Payment </>,
      content: <CartPayment setCurrentStep={setCurrentStep} showDialogSubmit={showDialogSubmit} setShowDialogSubmit={setShowDialogSubmit} />,
    },
    {
      title: <> <i className="icon-ok-5 mr-2" /> Finish </>,
      content: null,
    },
  ];

  return (
    <StripeProvider apiKey={process.env.PUBLISH_KEY_STRIPE || PUBLISH_KEY_STRIPE}>
      <Elements>
        <main>
          <section id="hero_in" className="cart_section">
            <div className="wrapper">
              <div className="container">

                <div className="bs-wizard clearfix">
                  {steps.map((item, index) => <CartStep key={index.toString()} index={index} title={item.title} currentStep={currentStep} setCurrentStep={setCurrentStep} />)}

                </div>
                {currentStep >= 2 && (
                <div id="confirm" className="mt-5">
                  <h4>Order completed!</h4>
                  <p>If you have any questions please contact email dhtc.kltn@gmail.com.</p>
                </div>
                )}
          
              </div>
            </div>
          </section>

          <div className="bg_color_1">
            <div className="container margin_60_35">
              <div className="row">
                {steps[currentStep] && steps[currentStep].content}

                {currentStep < 2 && <CartTotal currentStep={currentStep} setCurrentStep={setCurrentStep} setShowDialogSubmit={setShowDialogSubmit} />}
              </div>
            </div>
          </div>
        </main>
      </Elements>
    </StripeProvider>
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
    fetchCartAction: bindActionCreators(fetchCart, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
