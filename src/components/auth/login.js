/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import queryString from 'query-string';
import { PATH, SERVER_URL, AUTH_TOKEN } from '../../utils/constant';
import { fetchUser, fetchUserSuccess } from '../../actions/user';
import ErrorInput from '../error-input';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required.'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 characters minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const Login = (props) => {
  const { history, location } = props;

  const initialValues = {
    email: '',
    password: '',
  };

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (props.userState.isLogin) {
      if (localStorage.getItem('checkbox') === 'false') {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('checkbox');
      } else {
        localStorage.setItem('email', props.userState.user.email);
      }
      props.history.push('/');
    }
  });

  useEffect(() => {
    if (localStorage.getItem('checkbox') === 'true' && localStorage.getItem('email') !== '') {
      setIsChecked(true);
      initialValues.email = localStorage.getItem('email');
    }

    const params = queryString.parse(location.search);
    if (Object.keys(params).length !== 0) {
      const { token, previousPath } = params;
      delete params.token;

      if (previousPath) {
        delete params.previousPath;
      }

      const data = {
        user: { ...params },
        token,
      };
      localStorage.setItem(AUTH_TOKEN, token);
      props.fetchUserSuccessAction(data);
      if (previousPath) {
        history.push(previousPath);
      } else {
        history.push('/');
      }
    }
  }, []);

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
                  id="email"
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
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Password"
                />
                <ErrorInput message={errors.password} />
              </div>
              <div className="kt-login__extra">
                <label className="kt-checkbox">
                  <input type="checkbox" checked={isChecked} onChange={() => { setIsChecked(!isChecked); localStorage.checkbox = !isChecked; console.log(localStorage.checkbox); }} name="remember" />
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
            onClick={() => window.location.replace(`${SERVER_URL}/user/facebook`)}
            className="btn btn-brand btn-pill btn-elevate btn-facebook btn-custom"
            disabled={props.generalState.isLoading}>
            <i className="icon-facebook" /> Facebook
          </button>
          <button
            onClick={() => window.location.replace(`${SERVER_URL}/user/google`)}
            className="btn btn-brand btn-pill btn-elevate btn-google btn-custom"
            disabled={props.generalState.isLoading}>
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
    fetchUserSuccessAction: bindActionCreators(fetchUserSuccess, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
