import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="kt-login__signup">
      <div className="kt-login__head">
        <h3 className="kt-login__title">Sign Up</h3>
        <div className="kt-login__desc">Enter your details to create your account:</div>
      </div>
      <div className="kt-login__form">
        <form className="kt-form" action="">
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Fullname" name="fullname" />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              name="email"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control form-control-last"
              type="password"
              placeholder="Confirm Password"
              name="rpassword"
            />
          </div>
          <div className="kt-login__extra">
            {/* <label className="kt-checkbox">
              <input type="checkbox" name="agree" />
              <span>
                I Agree the
                <Link to="/register">terms and conditions</Link>
                .
              </span>
            </label> */}
          </div>
          <div className="kt-login__actions">
            <button className="btn btn-brand btn-pill btn-elevate">
              Sign Up
            </button>
            <Link to="/login" className="btn btn-outline-brand btn-pill">
              Cancel
            </Link>
          </div>
        </form>
      </div>

      <hr className="hr-text" data-content="OR" />
      <div>
        <div className="kt-login__actions">
          <button className="btn btn-brand btn-pill btn-elevate btn-facebook btn-custom">
            Facebook
          </button>
          <button className="btn btn-brand btn-pill btn-elevate btn-google btn-custom">
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
