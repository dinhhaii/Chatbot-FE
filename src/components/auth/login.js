/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { PATH } from '../../utils/constant';
import { fetchUser } from '../../actions/user';
import ErrorInput from '../error-input';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required.'),
  // password: Yup.string()
  //   .required('No password provided.') 
  //   .min(8, 'Password is too short - should be 8 characters minimum.')
  //   .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const Login = (props) => {
  const initialValues = {
    email: '',
    password: '',
  };

  useEffect(() => {
    if (props.userState.isLogin) {
      props.history.push('/');
    }
  });

  return (
    <div className="kt-login__signin">
      <div className="kt-login__head">
        <h3 className="kt-login__title">Sign In</h3>
      </div>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          props.fetchUserAction(values.email, values.password);
        }}>
        {({
          values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, 
        }) => (
          <div className="kt-login__form">
            <form className="kt-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className={`form-control ${touched.email && errors.email && 'is-invalid'} ${touched.email && !errors.email && 'is-valid'}`}
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  placeholder="Email"
                />
                <ErrorInput message={errors.email} />
              </div>
              <div className="form-group">
                <input
                  className={`form-control ${touched.password && errors.password && 'is-invalid'} ${touched.password && !errors.password && 'is-valid'}`}
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Password"
                />
                <ErrorInput message={errors.password} />
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
                  className={`btn btn-brand btn-pill btn-elevate ${props.generalState.isLoading && 'kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light disabled'}`}
                  disabled={props.generalState.isLoading}>
                  Sign In
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
