/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PATH } from '../../utils/constant';
import { showLoading, hideLoading } from '../../actions/general';
import { changePasswordWithoutConfirm } from '../../actions/user';

const ChangePassword = (props) => {
  const { match } = props;
  const [state, setState] = useState({
    password: '',
    rpassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, token } = match.params;
    const { password, rpassword } = state;
    props.changePasswordWithoutConfirmAction(id, token, password, rpassword);
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
        <h3 className="kt-login__title">Reset Password</h3>
        <div className="kt-login__desc">
          Enter your new password:
        </div>
      </div>
      <div className="kt-login__form">
        <form className="kt-form" onSubmit={handleSubmit}>
            
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

          <div className="kt-login__actions">
            <button
              type="submit"
              className="btn btn-brand btn-pill btn-elevate">
              Request
            </button>
            <Link to={PATH.LOGIN} className="btn btn-outline-brand btn-pill">
              Reset
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
    changePasswordWithoutConfirmAction: bindActionCreators(changePasswordWithoutConfirm, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ChangePassword));
