import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import { PATH } from '../../utils/constant';
import { forgotPasswordUser } from '../../api/user';
import { showLoading, hideLoading } from '../../actions/general';

const ForgotPassword = (props) => {
  const [state, setState] = useState({
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = state;
    
    props.showLoadingAction();
    
    if (state.password === state.rpassword) {
      forgotPasswordUser(email)
        .then((response) => {
          const { data } = response;
          if (data) {
            toast.success(
              'Sent email successfully! Please open your email to confirm.',
            );
          } else {
            toast.error('Sent email failed!');
          }
        })
        .catch((error) => {
          toast.error(error.message);
        })
        .finally(() => props.hideLoadingAction());
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
    <div className="kt-login__forgot">
      <div className="kt-login__head">
        <h3 className="kt-login__title">Forgotten Password ?</h3>
        <div className="kt-login__desc">
          Enter your email to reset your password:
        </div>
      </div>
      <div className="kt-login__form">
        <form className="kt-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              name="email"
              id="kt_email"
              autoComplete="off"
              onChange={handleChange}
              value={state.email}
            />
          </div>
          <div className="kt-login__actions">
            <button
              id="kt_login_forgot_submit"
              className="btn btn-brand btn-pill btn-elevate">
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
