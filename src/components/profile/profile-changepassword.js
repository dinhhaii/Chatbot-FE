import React from 'react';
import { Link } from 'react-router-dom';

const ProfileChangePassword = () => {
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
              <div className="kt-portlet__head-toolbar kt-hidden">
                <div className="kt-portlet__head-toolbar">
                  <div className="dropdown dropdown-inline">
                    <button
                      type="button"
                      className="btn btn-clean btn-sm btn-icon btn-icon-md"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <i className="la la-sellsy" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <ul className="kt-nav">
                        <li className="kt-nav__section kt-nav__section--first">
                          <span className="kt-nav__section-text">
                            Quick Actions
                          </span>
                        </li>
                        <li className="kt-nav__item">
                          <Link to="/" class="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-graph-1" />
                            <span className="kt-nav__link-text">Statistics</span>
                          </Link>
                        </li>
                        <li className="kt-nav__item">
                          <Link to="/" class="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-calendar-4" />
                            <span className="kt-nav__link-text">Events</span>
                          </Link>
                        </li>
                        <li className="kt-nav__item">
                          <Link to="/" class="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-layers-1" />
                            <span className="kt-nav__link-text">Reports</span>
                          </Link>
                        </li>
                        <li className="kt-nav__item">
                          <Link to="/" class="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-bell-1o" />
                            <span className="kt-nav__link-text">Notifications</span>
                          </Link>
                        </li>
                        <li className="kt-nav__item">
                          <Link to="/" class="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-file-1" />
                            <span className="kt-nav__link-text">Files</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="kt-form kt-form--label-right">
              <div className="kt-portlet__body">
                <div className="kt-section kt-section--first">
                  <div className="kt-section__body">
                    <div
                      className="alert alert-solid-danger alert-bold fade show kt-margin-t-20 kt-margin-b-40"
                      role="alert">
                      <div className="alert-icon">
                        <i className="fa fa-exclamation-triangle" />
                      </div>
                      <div className="alert-text">
                        Configure user passwords to expire periodically. Users
                        will need warning that their passwords are going to
                        expire, <br />
                        or they might inadvertently get locked out of the
                        system!
                      </div>
                      <div className="alert-close">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close">
                          <span aria-hidden="true">
                            <i className="la la-close" />
                          </span>
                        </button>
                      </div>
                    </div>
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
                          value=""
                          placeholder="Current password"
                        />
                        <Link
                          to="/"
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
                          value=""
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
                          value=""
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
                      <button type="reset" className="btn btn-brand btn-bold">
                        Change Password
                      </button>
                      &nbsp;
                      <button type="reset" className="btn btn-secondary">
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
    </div>
  );
};

export default ProfileChangePassword;
