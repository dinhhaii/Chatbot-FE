/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileChangePassword from '../components/profile/profile-changepassword';
import ProfileInformation from '../components/profile/profile-information';
import ProfileInvoices from '../components/profile/profile-invoices';
import { capitalize } from '../utils/helper';

const TAB = {
  PERSONAL_INFORMATION: 1,
  CHANGE_PASSWORD: 2,
  INVOICES: 3,
};

const Profile = (props) => {
  const { userState } = props;
  const [tabName, setTabName] = useState(TAB.PERSONAL_INFORMATION);

  return (
    <main>
      <section id="hero_in" className="contacts">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp">
              <span />
              Profile
            </h1>
          </div>
        </div>
      </section>
      {userState.user ? (
        <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid mt-3">
          <div className="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">
            <button
              className="kt-app__aside-close"
              id="kt_user_profile_aside_close">
              <i className="icon-dot-3" />
            </button>

            <div
              className="kt-grid__item kt-app__toggle kt-app__aside"
              id="kt_user_profile_aside">
              <div className="kt-portlet ">
                <div className="kt-portlet__head  kt-portlet__head--noborder">
                  <div className="kt-portlet__head-label">
                    <h3 className="kt-portlet__head-title" />
                  </div>
                  <div className="kt-portlet__head-toolbar">
                    <Link
                      to="/"
                      className="btn btn-clean btn-sm btn-icon btn-icon-md"
                      data-toggle="dropdown">
                      <i className="icon-dot-3" />
                    </Link>
                  </div>
                </div>
                <div className="kt-portlet__body kt-portlet__body--fit-y">
                  <div className="kt-widget kt-widget--user-profile-1">
                    <div className="kt-widget__head">
                      <div className="kt-widget__media">
                        <img
                          src={userState.user ? userState.user.imageURL : ''}
                          alt=""
                        />
                      </div>
                      <div className="kt-widget__content">
                        <div className="kt-widget__section">
                          <Link to="/" class="kt-widget__username">
                            {`${userState.user.firstName} ${userState.user.lastName}`}
                            {userState.user.status === 'verified' ? (
                              <i className="icon-ok-circled kt-font-success" />
                            ) : null}
                          </Link>
                          <span className="kt-widget__subtitle">
                            {capitalize(userState.user.role)}
                          </span>
                        </div>
                        <div className="kt-widget__action">
                          <button type="button" className="btn btn-info btn-sm">
                            Messages
                          </button>
                          <button
                            type="button"
                            className="btn btn-success btn-sm">
                            Payment
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="kt-widget__body">
                      <div className="kt-widget__content">
                        <div className="kt-widget__info">
                          <span className="kt-widget__label">ID:</span>
                          <span className="kt-widget__data">
                            {userState.user._id}
                          </span>
                        </div>
                        <div className="kt-widget__info">
                          <span className="kt-widget__label">Email:</span>
                          <span className="kt-widget__data">
                            {userState.user.email}
                          </span>
                        </div>
                        <div className="kt-widget__info">
                          <span className="kt-widget__label">Account:</span>
                          <span className="kt-widget__data">
                            {capitalize(userState.user.type)}
                          </span>
                        </div>
                      </div>
                      <div className="kt-widget__items">
                        <Link
                          className={`kt-widget__item ${
                            tabName === TAB.PERSONAL_INFORMATION
                              ? 'kt-widget__item--active'
                              : ''
                          }`}
                          onClick={() => setTabName(TAB.PERSONAL_INFORMATION)}>
                          <span className="kt-widget__section">
                            <span className="icon-user" />
                            <span className="kt-widget__desc">
                              Personal Information
                            </span>
                          </span>
                        </Link>
                        <Link
                          className={`kt-widget__item ${
                            tabName === TAB.CHANGE_PASSWORD
                              ? 'kt-widget__item--active'
                              : ''
                          }`}
                          onClick={() => setTabName(TAB.CHANGE_PASSWORD)}>
                          <span className="kt-widget__section">
                            <span className="icon-shield" />
                            <span className="kt-widget__desc">
                              Change Password
                            </span>
                          </span>
                        </Link>
                        <Link
                          className={`kt-widget__item ${
                            tabName === TAB.INVOICES
                              ? 'kt-widget__item--active'
                              : ''
                          }`}
                          onClick={() => setTabName(TAB.INVOICES)}>
                          <span className="kt-widget__section">
                            <span className="icon-doc-text-inv" />
                            <span className="kt-widget__desc">Invoices</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {tabName === TAB.PERSONAL_INFORMATION ? (
              <ProfileInformation />
            ) : null}
            {tabName === TAB.CHANGE_PASSWORD ? <ProfileChangePassword /> : null}
            {tabName === TAB.INVOICES ? <ProfileInvoices /> : null}
          </div>
        </div>
      ) : null}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Profile));
