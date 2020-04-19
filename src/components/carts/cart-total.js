/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-mixed-operators */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CartTotal = (props) => {
  const { currentStep, setCurrentStep, cartState } = props;
  const total = cartState.cart ? cartState.cart.items.reduce((initValue, value) => {
    return initValue + (value.discount ? value.course.price * (100 - value.discount.percentage) / 100 : value.course.price);
  }, 0) : 0;

  return (
    <aside className="col-lg-4" id="sidebar">
      <div className="box_detail">
        <div id="total_cart">
          Total <span className="float-right">{total.toFixed(2)}$</span>
        </div>
        <div className="add_bottom_30">
          The price includes promotion. Please check all products carefully before payment.
        </div>
        <Link 
          className="btn_1 full-width"
          onClick={() => {
            setCurrentStep(currentStep + 1);
          }}>
          Checkout
        </Link>
        <Link
          className="btn_1 full-width outline"
          onClick={() => {
            setCurrentStep(currentStep - 1);
          }}>
          <i className="icon-right" /> Back
        </Link>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTotal);
