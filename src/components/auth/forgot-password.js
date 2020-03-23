import React from 'react';

const ForgotPassword = (props) => {
  return (
    <div className="kt-login__forgot">
      <div className="kt-login__head">
        <h3 className="kt-login__title">Forgotten Password ?</h3>
        <div className="kt-login__desc">Enter your email to reset your password:</div>
      </div>
      <div className="kt-login__form">
        <form className="kt-form" action="">
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Email" name="email" id="kt_email" autoComplete="off" />
          </div>
          <div className="kt-login__actions">
            <button id="kt_login_forgot_submit" className="btn btn-brand btn-pill btn-elevate">
              Request
            </button>
            <button id="kt_login_forgot_cancel" className="btn btn-outline-brand btn-pill">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
