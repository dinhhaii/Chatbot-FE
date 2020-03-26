import React from 'react';
import { Link } from 'react-router-dom';

const CartItems = () => {
  return (
    <div className="bg_color_1">
      <div className="container margin_60_35">
        <div className="row">
          <div className="col-lg-8">
            <div className="box_cart">
              <table className="table table-striped cart-list">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Discount</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="thumb_cart">
                        <img
                          src="http://via.placeholder.com/150x150/ccc/fff/thumb_cart_1.jpg"
                          alt=""
                        />
                      </div>
                      <span className="item_cart">Persius delenit has cu</span>
                    </td>
                    <td>0%</td>
                    <td>
                      <strong>24,71$</strong>
                    </td>
                    <td
                      className="options"
                      style={{ width: `${5}%`, textAlign: 'center' }}>
                      <Link to="/">
                        <i className="icon-trash" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="thumb_cart">
                        <img
                          src="http://via.placeholder.com/150x150/ccc/fff/thumb_cart_2.jpg"
                          alt=""
                        />
                      </div>
                      <span className="item_cart">
                        At deseruisse scriptorem
                      </span>
                    </td>
                    <td>0%</td>
                    <td>
                      <strong>15,50$</strong>
                    </td>
                    <td
                      className="options"
                      style={{ width: `${5}%`, textAlign: 'center' }}>
                      <Link to="/">
                        <i className="icon-trash" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="thumb_cart">
                        <img
                          src="http://via.placeholder.com/150x150/ccc/fff/thumb_cart_3.jpg"
                          alt=""
                        />
                      </div>
                      <span className="item_cart">
                        Ea vel semper quaerendum
                      </span>
                    </td>
                    <td>0%</td>
                    <td>
                      <strong>24,71$</strong>
                    </td>
                    <td
                      className="options"
                      style={{ width: `${5}%`, textAlign: 'center' }}>
                      <Link to="/">
                        <i className="icon-trash" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="thumb_cart">
                        <img
                          src="http://via.placeholder.com/150x150/ccc/fff/thumb_cart_4.jpg"
                          alt=""
                        />
                      </div>
                      <span className="item_cart">Ei has exerci graecis</span>
                    </td>
                    <td>0%</td>
                    <td>
                      <strong>24,71$</strong>
                    </td>
                    <td
                      className="options"
                      style={{ width: `${5}%`, textAlign: 'center' }}>
                      <Link to="/">
                        <i className="icon-trash" />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="cart-options clearfix">
                <div className="float-left">
                  <div className="apply-coupon">
                    <div className="form-group">
                      <input
                        type="text"
                        name="coupon-code"
                        value=""
                        placeholder="Your Coupon Code"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <button type="button" className="btn_1 outline">
                        Apply Coupon
                      </button>
                    </div>
                  </div>
                </div>
                <div className="float-right fix_mobile">
                  <button type="button" className="btn_1 outline">
                    Update Cart
                  </button>
                </div>
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
                <Link href="#0">brute convenire</Link> appellantur an mei.
              </div>
              <Link href="cart-2.html" class="btn_1 full-width">
                Checkout
              </Link>
              <Link
                href="courses-grid-sidebar.html"
                class="btn_1 full-width outline">
                <i className="icon-right" /> Continue Shopping
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
