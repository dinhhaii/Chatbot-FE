/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import { PATH } from '../../utils/constant';
import { registerUser } from '../../api/user';
import { showLoading, hideLoading } from '../../actions/general';

const Register = (props) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rpassword: '',
    role: 'learner',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.showLoadingAction();
    const { firstName, lastName, email, password, role } = state;

    if (state.password === state.rpassword) {
      registerUser(firstName, lastName, email, password, role)
        .then((response) => {
          const { data } = response;
          if (data) {
            toast.success('Register successfully!');
          } else {
            toast.error('Register failed!');
          }
        })
        .catch((error) => {
          toast.error(error.message);
        })
        .finally(() => {
          props.hideLoadingAction();
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="kt-login__signup">
      <div className="kt-login__head">
        <h3 className="kt-login__title">Sign Up</h3>
        <div className="kt-login__desc">
          Enter your details to create your account:
        </div>
      </div>
      <div className="kt-login__form">
        <form className="kt-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={state.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={state.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              name="email"
              autoComplete="off"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control form-control-last"
              type="password"
              placeholder="Confirm Password"
              name="rpassword"
              value={state.rpassword}
              onChange={handleChange}
            />
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
                checked={state.role === 'learner'}
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
                checked={state.role === 'lecturer'}
                onChange={handleChange}
              />
              Lecturer
              <span />
            </label>
          </div>

          <div className="kt-login__actions">
            <button
              type="submit"
              className="btn btn-brand btn-pill btn-elevate">
              Sign Up
            </button>
            <Link to={PATH.LOGIN} className="btn btn-outline-brand btn-pill">
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
