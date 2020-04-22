import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PATH } from '../../utils/constant';
import { changePassword } from '../../actions/user';

const ProfileChangePassword = (props) => {
  const [state, setState] = useState({
    currentpassword: '',
    password: '',
    rpassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.changePasswordAction(state.currentpassword, state.password, state.rpassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="kt-grid__item kt-grid__item--fluid kt-app__content">
      <div className="row">
        <div className="col-xl-12">
          <div className="kt-portlet kt-portlet--height-fluid">
            <div className="kt-portlet__head">
              <div className="kt-portlet__head-label">
                <h3 className="kt-portlet__head-title">
                  Change Password
                  <small>change or reset your account password</small>
                </h3>
              </div>
            </div>
            <form
              className="kt-form kt-form--label-right"
              onSubmit={handleSubmit}>
              <div className="kt-portlet__body">
                <div className="kt-section kt-section--first">
                  <div className="kt-section__body">
                    <div className="row">
                      <label className="col-xl-3" />
                      <div className="col-lg-9 col-xl-6">
                        <h3 className="kt-section__title kt-section__title-sm">
                          Change Or Recover Your Password:
                        </h3>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        Current Password
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <input
                          type="password"
                          className="form-control"
                          name="currentpassword"
                          value={state.currentpassword}
                          onChange={handleChange}
                          placeholder="Current password"
                        />
                        <Link
                          to={PATH.FORGOT_PASSWORD}
                          class="kt-link kt-font-sm kt-font-bold kt-margin-t-5">
                          Forgot password ?
                        </Link>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        New Password
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={state.password}
                          onChange={handleChange}
                          placeholder="New password"
                        />
                      </div>
                    </div>
                    <div className="form-group form-group-last row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        Verify Password
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <input
                          type="password"
                          className="form-control"
                          name="rpassword"
                          value={state.rpassword}
                          onChange={handleChange}
                          placeholder="Verify password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kt-portlet__foot">
                <div className="kt-form__actions">
                  <div className="row">
                    <div className="col-lg-3 col-xl-3" />
                    <div className="col-lg-9 col-xl-9">
                      <button
                        type="submit"
                        className="btn btn-brand btn-bold w-25 mr-5">
                        Save
                      </button>
                      &nbsp;
                      <button 
                        type="reset" 
                        className="btn btn-secondary w-25"
                        onClick={() => setState({
                          currentpassword: '',
                          password: '',
                          rpassword: '',
                        })}>
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePasswordAction: bindActionCreators(changePassword, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChangePassword);
