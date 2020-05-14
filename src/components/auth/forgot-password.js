import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { PATH } from '../../utils/constant';
import { forgotPasswordUser } from '../../api/user';
import { showLoading, hideLoading } from '../../actions/general';
import ErrorInput from '../error-input';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required.'),

});

const ForgotPassword = (props) => {
  return (
    <div className="kt-login__forgot">
      <div className="kt-login__head">
        <h3 className="kt-login__title">Forgotten Password ?</h3>
        <div className="kt-login__desc">
          Enter your email to reset your password:
        </div>
      </div>
      <Formik 
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          props.showLoadingAction();
          setSubmitting(true);

          forgotPasswordUser(values.email)
            .then((response) => {
              const { data } = response;
              if (data) {
                toast.success('Sent email successfully! Please open your email to confirm.');
              } else {
                toast.error('Sent email failed!');
              }
            })
            .catch((error) => {
              toast.error(error.message);
            })
            .finally(() => {
              props.hideLoadingAction();
              setSubmitting(false);
              resetForm();
            });
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
                  placeholder="Email"
                  name="email"
                  id="kt_email"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorInput message={errors.email} />
              </div>
              <div className="kt-login__actions">
                <button
                  id="kt_login_forgot_submit"
                  type="submit"
                  className="btn btn-brand btn-pill btn-elevate"
                  disabled={isSubmitting}>
                  Request
                </button>
                <Link
                  to={PATH.LOGIN}
                  id="kt_login_forgot_cancel"
                  className="btn btn-outline-brand btn-pill">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    generalState: state.generalState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLoadingAction: bindActionCreators(showLoading, dispatch),
    hideLoadingAction: bindActionCreators(hideLoading, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ForgotPassword));
