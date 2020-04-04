/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PATH } from '../../utils/constant';
import { fetchUser } from '../../actions/user';

const Login = (props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchUserAction(state.email, state.password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="kt-login__signin">
      <div className="kt-login__head">
        <h3 className="kt-login__title">Sign In</h3>
      </div>
      <div className="kt-login__form">
        <form className="kt-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="email"
              value={state.email}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control form-control-last"
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <div className="kt-login__extra">
            <label className="kt-checkbox">
              <input type="checkbox" name="remember" />
              Remember me
              <span />
            </label>
            <Link to={PATH.FORGOT_PASSWORD} id="kt_login_forgot">
              Forget Password ?
            </Link>
          </div>
          <div className="kt-login__actions">
            <button
              type="submit"
              id="kt_login_signin_submit"
              className={`btn btn-brand btn-pill btn-elevate ${
                props.generalState.isLoading
                  ? 'kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light disabled'
                  : ''
              }`}>
              Sign In
            </button>
          </div>
        </form>
      </div>
      <hr className="hr-text" data-content="OR" />
      <div>
        <div className="kt-login__actions">
          <button
            className={`btn btn-brand btn-pill btn-elevate btn-facebook btn-custom ${
              props.generalState.isLoading ? 'disabled' : ''
            }`}>
            <i className="icon-facebook" /> Facebook
          </button>
          <button
            className={`btn btn-brand btn-pill btn-elevate btn-google btn-custom ${
              props.generalState.isLoading ? 'disabled' : ''
            }`}>
            <i className="icon-google" /> Google
          </button>
        </div>
      </div>

      <div className="kt-login__account">
        <span className="kt-login__account-msg">
          Don&apos;t have an account yet ?
        </span>
        &nbsp;&nbsp;
        <Link
          to={PATH.REGISTER}
          id="kt_login_signup"
          className="kt-login__account-link">
          Sign Up!
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    generalState: state.generalState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserAction: bindActionCreators(fetchUser, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
