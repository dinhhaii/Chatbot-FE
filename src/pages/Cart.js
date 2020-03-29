/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import CartPayment from '../components/carts/cart-payment';
import CartItems from '../components/carts/cart-items';


const Cart = () => {
  return (
    <main>
      <section id="hero_in" className="cart_section">
        <div className="wrapper">
          <div className="container">
            <div className="bs-wizard clearfix">
              <div className="bs-wizard-step active">
                <div className="text-center bs-wizard-stepnum">Your cart</div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <Link href="#0" class="bs-wizard-dot" />
              </div>

              <div className="bs-wizard-step">
                <div className="text-center bs-wizard-stepnum">Payment</div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <Link href="#0" class="bs-wizard-dot" />
              </div>

              <div className="bs-wizard-step disabled">
                <div className="text-center bs-wizard-stepnum">Finish!</div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <Link href="#0" class="bs-wizard-dot" />
              </div>
            </div>
          </div>
          <div id="confirm" className="mt-5">
            <h4>Order completed!</h4>
            <p>You&apos;ll receive a confirmation email at mail@example.com</p>
          </div>
        </div>
      </section>

      <CartItems />
      <CartPayment />
    </main>
  );
};

export default Cart;
