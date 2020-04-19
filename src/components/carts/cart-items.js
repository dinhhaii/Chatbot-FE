/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRandom } from '../../utils/helper';

const CartItems = (props) => {
  const headers = ['Item', 'Discount', 'Price', 'Actions'];
  const { cartState } = props;
  return (
    <div className="col-lg-8">
      <div className="box_cart">
        <table className="table table-hover table-striped cart-list shadow">
          <thead style={{ paddingTop: 20 }}>
            <tr>
              {headers.map((value, index) => <th key={index.toString()}>{value}</th>)}
            </tr>
          </thead>
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
                  <td>{item.discount ? (
                    <> <span className={`badge ${getRandom(['badge-danger', 'badge-info', 'badge-success', 'badge-warning'])}`}>{item.discount.code}</span> {`(${item.discount.percentage}%)`} </>
                  ) : '0%'}
                  </td>
                  <td>
                    <strong>${price}</strong>
                  </td>
                  <td
                    className="options"
                    style={{ width: `${5}%`, textAlign: 'center' }}>
                    <Link onClick={() => {}}>
                      <i className="icon-trash" />
                    </Link>
                  </td>
                </tr>
              );
            })}
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
