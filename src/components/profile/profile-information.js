/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import { requestVerificationEmail } from '../../api/user';
import { showLoading, hideLoading } from '../../actions/general';
import { updateUser } from '../../actions/user';

const ProfileInformation = (props) => {
  const { userState } = props;
  const [isVerified, setIsVerified] = useState(false);
  const [state, setState] = useState({
    imageURL: userState.user.imageURL,
    _id: userState.user._id,
    firstName: userState.user.firstName,
    lastName: userState.user.lastName,
    bio: userState.user.bio,
  });

  const requestVerification = () => {
    props.showLoadingAction();
    requestVerificationEmail(userState.user._id, userState.user.email)
      .then((response) => {
        const { data } = response;
        if (data) {
          toast.success(data.message);
          setIsVerified(true);
        }
      })
      .catch((error) => {
        toast.error(error.message);
        props.hideLoadingAction();
      });
    props.hideLoadingAction();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateUserAction(state);
  };

  const handleChangle = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="kt-grid__item kt-grid__item--fluid kt-app__content">
      {userState.user ? (
        <div className="row">
          <div className="col-xl-12">
            <div className="kt-portlet">
              <div className="kt-portlet__head">
                <div className="kt-portlet__head-label">
                  <h3 className="kt-portlet__head-title">
                    Personal Information
                    <small>update your personal informaiton</small>
                  </h3>
                </div>
              </div>
              <form
                className="kt-form kt-form--label-right"
                onSubmit={handleSubmit}>
                <div className="kt-portlet__body">
                  <div className="kt-section kt-section--first">
                    <div className="kt-section__body">
                      {userState.user.status === 'unverified' ? (
                        <div
                          className="alert alert-solid-danger alert-bold fade show kt-margin-t-20 kt-margin-b-40"
                          role="alert">
                          <div className="alert-icon">
                            <i className="icon-warning" />
                          </div>
                          <div className="alert-text">
                            Your account is not verified!
                          </div>
                          <div className="alert-close">
                            <button
                              type="button"
                              className={`btn btn-warning ${
                                isVerified ? 'disabled' : ''
                              }`}
                              onClick={requestVerification}>
                              VERIFY NOW{' '}
                              {isVerified ? (
                                <i className="icon-check-1" />
                              ) : null}
                            </button>
                          </div>
                        </div>
                      ) : null}

                      <div className="row">
                        <label className="col-xl-3" />
                        <div className="col-lg-9 col-xl-6">
                          <h3 className="kt-section__title kt-section__title-sm">
                            My Info:
                          </h3>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">
                          Avatar
                        </label>
                        <div className="col-lg-9 col-xl-6">
                          <div
                            className="kt-avatar kt-avatar--outline"
                            id="kt_user_avatar">
                            <div
                              className="kt-avatar__holder"
                              style={{
                                backgroundImage: `url(${state.imageURL})`,
                              }}
                            />
                            <label
                              className="kt-avatar__upload"
                              data-toggle="kt-tooltip"
                              title=""
                              data-original-title="Change avatar">
                              <i className="icon-pen" />
                              <input
                                type="file"
                                name="profile_avatar"
                                accept=".png, .jpg, .jpeg"
                              />
                            </label>
                            <span
                              className="kt-avatar__cancel"
                              data-toggle="kt-tooltip"
                              title=""
                              data-original-title="Cancel avatar">
                              <i className="fa fa-times" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">
                          ID
                        </label>
                        <div className="col-lg-9 col-xl-6">
                          <input
                            className="form-control disabled"
                            name="_id"
                            type="text"
                            value={state._id}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">
                          First Name
                        </label>
                        <div className="col-lg-9 col-xl-6">
                          <input
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={state.firstName}
                            onChange={handleChangle}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">
                          Last Name
                        </label>
                        <div className="col-lg-9 col-xl-6">
                          <input
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={state.lastName}
                            onChange={handleChangle}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">
                          Bio
                        </label>
                        <div className="col-lg-9 col-xl-6">
                          <textarea
                            className="form-control"
                            name="bio"
                            value={state.bio}
                            onChange={handleChangle}
                          />
                          {/* <span className="form-text text-muted">
                            If you want your invoices addressed to a company.
                            Leave blank to use your full name.
                          </span> */}
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
                          className="btn btn-success w-25 mr-5">
                          Save
                        </button>
                        <button type="reset" className="btn btn-secondary w-25">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
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
    showLoadingAction: bindActionCreators(showLoading, dispatch),
    hideLoadingAction: bindActionCreators(hideLoading, dispatch),
    updateUserAction: bindActionCreators(updateUser, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ProfileInformation));
