import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="kt-login__signin">
      <div className="kt-login__head">
        <h3 className="kt-login__title">Sign In To Admin</h3>
      </div>
      <div className="kt-login__form">
        <form className="kt-form" action="">
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
              className="form-control form-control-last"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="kt-login__extra">
            <label className="kt-checkbox">
              <input type="checkbox" name="remember" />
              Remember me
              <span />
            </label>
            <Link to="/forgot-password" id="kt_login_forgot">
              Forget Password ?
            </Link>
          </div>
          <div className="kt-login__actions">
            <button id="kt_login_signin_submit" className="btn btn-brand btn-pill btn-elevate kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light">
              Sign In
            </button>
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

      <div className="kt-login__account">
        <span className="kt-login__account-msg">Don&apos;t have an account yet ?</span>
        &nbsp;&nbsp;
        <Link to="/register" id="kt_login_signup" className="kt-login__account-link">
          Sign Up!
        </Link>
      </div>
    </div>
  );
};

export default Login;
