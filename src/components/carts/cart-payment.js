import React from 'react';

const CartPayment = () => {
  return (
    <div className="bg_color_1">
      <div className="container margin_60_35">
        <div className="row">
          <div className="col-lg-8">
            <div className="box_cart">
              <div className="message">
                <p>
                  Exisitng Customer? <a href="#0">Click here to login</a>
                </p>
              </div>
              <div className="form_title">
                <h3>
                  <strong>1</strong>Your Details
                </h3>
                <p>Mussum ipsum cacilds, vidis litro abertis.</p>
              </div>
              <div className="step">
                <div className="row">
                  <div className="col-sm-6">
                    <span className="input">
                      <input className="input_field" type="text" />
                      <label className="input_label">
                        <span className="input__label-content">First name</span>
                      </label>
                    </span>
                  </div>
                  <div className="col-sm-6">
                    <span className="input">
                      <input className="input_field" type="text" />
                      <label className="input_label">
                        <span className="input__label-content">Last name</span>
                      </label>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <span className="input">
                      <input className="input_field" type="email" />
                      <label className="input_label">
                        <span className="input__label-content">Email</span>
                      </label>
                    </span>
                  </div>
                  <div className="col-sm-6">
                    <span className="input">
                      <input className="input_field" type="email" />
                      <label className="input_label">
                        <span className="input__label-content">Confirm email</span>
                      </label>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <span className="input">
                      <input className="input_field" type="text" />
                      <label className="input_label">
                        <span className="input__label-content">Telephone</span>
                      </label>
                    </span>
                  </div>
                </div>
              </div>
              <hr />

              <div className="form_title">
                <h3>
                  <strong>2</strong>Payment Information
                </h3>
                <p>Mussum ipsum cacilds, vidis litro abertis.</p>
              </div>
              <div className="step">
                <span className="input">
                  <input className="input_field" type="text" />
                  <label className="input_label">
                    <span className="input__label-content">Name on card</span>
                  </label>
                </span>
                <div className="row">
                  <div className="col-md-6">
                    <span className="input">
                      <input className="input_field" type="text" />
                      <label className="input_label">
                        <span className="input__label-content">Card number</span>
                      </label>
                    </span>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <img src="img/payments.png" alt="Cards" className="cards" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 add_top_30">
                    <label>Expiration date</label>
                    <div className="row">
                      <div className="col-md-6">
                        <span className="input">
                          <input className="input_field" type="text" />
                          <label className="input_label">
                            <span className="input__label-content">MM</span>
                          </label>
                        </span>
                      </div>
                      <div className="col-md-6">
                        <span className="input">
                          <input className="input_field" type="text" />
                          <label className="input_label">
                            <span className="input__label-content">Year</span>
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 add_top_30">
                    <div className="form-group">
                      <label>Security code</label>
                      <div className="row">
                        <div className="col-md-4">
                          <span className="input">
                            <input className="input_field" type="text" />
                            <label className="input_label">
                              <span className="input__label-content">CCV</span>
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h5>Or checkout with Paypal</h5>
                <p>
                  Lorem ipsum dolor sit amet, vim id accusata sensibus, id
                  ridens quaeque qui. Ne qui vocent ornatus molestie, reque
                  fierent dissentiunt mel ea.
                </p>
                <p>
                  <img src="img/paypal_bt.png" alt="" />
                </p>
              </div>
              <hr />

              <div className="form_title">
                <h3>
                  <strong>3</strong>Billing Address
                </h3>
                <p>Mussum ipsum cacilds, vidis litro abertis.</p>
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
              <div id="policy">
                <h5>Cancellation policy</h5>
                <p className="nomargin">
                  Lorem ipsum dolor sit amet, vix{' '}
                  <a href="#0">cu justo blandit deleniti</a>, discere omittantur
                  consectetuer per eu. Percipit repudiare similique ad sed, vix
                  ad decore nullam ornatus.
                </p>
              </div>
            </div>
          </div>

          <aside className="col-lg-4" id="sidebar">
            <div className="box_detail">
              <div id="total_cart">
                Total <span className="float-right">69.00$</span>
              </div>
              <div className="add_bottom_30">
                Lorem ipsum dolor sit amet, sed vide <strong>moderatius</strong>{' '}
                ad. Ex eius soleat sanctus pro, enim conceptam in quo,{' '}
                <a href="#0">brute convenire</a> appellantur an mei.
              </div>
              <a href="cart-3.html" className="btn_1 full-width">
                Checkout
              </a>
              <a
                href="courses-grid-sidebar.html"
                className="btn_1 full-width outline">
                <i className="icon-right" /> Continue Shopping
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CartPayment;
