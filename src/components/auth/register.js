/* eslint-disable object-curly-newline */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { PATH } from '../../utils/constant';
import { registerUser } from '../../api/user';
import { showLoading, hideLoading } from '../../actions/general';
import ErrorInput from '../error-input';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required.'),
  lastName: Yup.string()
    .required('Last Name is required.'),
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required.'),
  password: Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 characters minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  rpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  role: Yup.string().required('Role is required.'),

});

const Register = (props) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rpassword: '',
    role: 'learner',
  };

  return (
    <div className="kt-login__signup">
      <div className="kt-login__head">
        <h3 className="kt-login__title">Sign Up</h3>
        <div className="kt-login__desc">
          Enter your details to create your account:
        </div>
      </div>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          props.showLoadingAction();
          setSubmitting(true);
          const { firstName, lastName, email, password, role } = values;
          registerUser(firstName, lastName, email, password, role)
            .then((response) => {
              const { data } = response;
              if (!data.error) {
                toast.success('Register successfully!');
              } else {
                toast.warn(data.error);
              }
            })
            .catch((error) => {
              toast.error(error.message);
            })
            .finally(() => {
              setSubmitting(false);
              resetForm();
              props.hideLoadingAction();
            });
        }}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <div className="kt-login__form">
            <form className="kt-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <input
                      className={`form-control ${touched.firstName && errors.firstName && 'is-invalid'} ${touched.firstName && !errors.firstName && 'is-valid'}`}
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur} />
                    <ErrorInput message={errors.firstName} />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <input
                      className={`form-control ${touched.lastName && errors.lastName && 'is-invalid'} ${touched.lastName && !errors.lastName && 'is-valid'}`}
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorInput message={errors.lastName} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  className={`form-control ${touched.email && errors.email && 'is-invalid'} ${touched.email && !errors.email && 'is-valid'}`}
                  type="text"
                  placeholder="Email"
                  name="email"
                  autoComplete="off"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorInput message={errors.email} />
              </div>
              <div className="form-group">
                <input
                  className={`form-control ${touched.password && errors.password && 'is-invalid'} ${touched.password && !errors.password && 'is-valid'}`}
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorInput message={errors.password} />
              </div>
              <div className="form-group">
                <input
                  className={`form-control ${touched.rpassword && errors.rpassword && 'is-invalid'} ${touched.rpassword && !errors.rpassword && 'is-valid'}`}
                  type="password"
                  placeholder="Confirm Password"
                  name="rpassword"
                  value={values.rpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorInput message={errors.rpassword} />
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: `${20}px`,
                }}>
                <label className="kt-checkbox">
                  <input
                    type="radio"
                    name="role"
                    value="learner"
                    checked={values.role === 'learner'}
                    onChange={handleChange}
                  />
                  Learner
                  <span />
                </label>
                <label className="kt-checkbox">
                  <input
                    type="radio"
                    name="role"
                    value="lecturer"
                    checked={values.role === 'lecturer'}
                    onChange={handleChange}
                  />
                  Lecturer
                  <span />
                </label>
              </div>
              <ErrorInput message={errors.role} />

              <div className="kt-login__actions">
                <button
                  type="submit"
                  className="btn btn-brand btn-pill btn-elevate"
                  disabled={isSubmitting}>
                  Sign Up
                </button>
                <button onClick={() => props.history.push(PATH.LOGIN)} className="btn btn-outline-brand btn-pill">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>

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
)(withRouter(Register));
