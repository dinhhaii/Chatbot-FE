import React from 'react';
import { Link } from 'react-router-dom';

const LecturerCourseFinanceSummary = () => {
  return (
    <div className="col-xl-4 col-lg-6 order-lg-1 order-xl-1">
      {/* begin:: Widgets/Finance Summary */}
      <div className="kt-portlet kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Finance Summary</h3>
          </div>
          <div className="kt-portlet__head-toolbar">
            <Link
              to="/"
              className="btn btn-label-brand btn-sm  btn-bold dropdown-toggle"
              data-toggle="dropdown">
              Latest
            </Link>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-fit dropdown-menu-md">
              {/* begin::Nav */}
              <ul className="kt-nav">
                <li className="kt-nav__head">
                  Export Options
                  <span
                    data-toggle="kt-tooltip"
                    data-placement="right"
                    title="Click to learn more...">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      className="kt-svg-icon kt-svg-icon--brand kt-svg-icon--md1">
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd">
                        <rect x="0" y="0" width="24" height="24" />
                        <circle
                          fill="#000000"
                          opacity="0.3"
                          cx="12"
                          cy="12"
                          r="10"
                        />
                        <rect
                          fill="#000000"
                          x="11"
                          y="10"
                          width="2"
                          height="7"
                          rx="1"
                        />
                        <rect
                          fill="#000000"
                          x="11"
                          y="7"
                          width="2"
                          height="2"
                          rx="1"
                        />
                      </g>
                    </svg>
                  </span>
                </li>
                <li className="kt-nav__separator" />
                <li className="kt-nav__item">
                  <Link to="/" className="kt-nav__link">
                    <i className="kt-nav__link-icon flaticon2-drop" />
                    <span className="kt-nav__link-text">Activity</span>
                  </Link>
                </li>
                <li className="kt-nav__item">
                  <Link to="/" className="kt-nav__link">
                    <i className="kt-nav__link-icon flaticon2-calendar-8" />
                    <span className="kt-nav__link-text">FAQ</span>
                  </Link>
                </li>
                <li className="kt-nav__item">
                  <Link to="/" className="kt-nav__link">
                    <i className="kt-nav__link-icon flaticon2-telegram-logo" />
                    <span className="kt-nav__link-text">Settings</span>
                  </Link>
                </li>
                <li className="kt-nav__item">
                  <Link to="/" className="kt-nav__link">
                    <i className="kt-nav__link-icon flaticon2-new-email" />
                    <span className="kt-nav__link-text">Support</span>
                    <span className="kt-nav__link-badge">
                      <span className="kt-badge kt-badge--success kt-badge--rounded">
                        5
                      </span>
                    </span>
                  </Link>
                </li>
                <li className="kt-nav__separator" />
                <li className="kt-nav__foot">
                  <Link className="btn btn-label-danger btn-bold btn-sm" to="/">
                    Upgrade plan
                  </Link>
                  <Link
                    className="btn btn-clean btn-bold btn-sm"
                    to="/"
                    data-toggle="kt-tooltip"
                    data-placement="right"
                    title="Click to learn more...">
                    Learn more
                  </Link>
                </li>
              </ul>

              {/* end::Nav */}
            </div>
          </div>
        </div>
        <div className="kt-portlet__body">
          <div className="kt-widget12">
            <div className="kt-widget12__content">
              <div className="kt-widget12__item">
                <div className="kt-widget12__info">
                  <span className="kt-widget12__desc">
                    Annual Companies Taxes EMS
                  </span>
                  <span className="kt-widget12__value">$500,000</span>
                </div>
                <div className="kt-widget12__info">
                  <span className="kt-widget12__desc">
                    Next Tax Review Date
                  </span>
                  <span className="kt-widget12__value">July 24,2017</span>
                </div>
              </div>
              <div className="kt-widget12__item">
                <div className="kt-widget12__info">
                  <span className="kt-widget12__desc">
                    Total Annual Profit Before Tax
                  </span>
                  <span className="kt-widget12__value">$3,800,000</span>
                </div>
                <div className="kt-widget12__info">
                  <span className="kt-widget12__desc">
                    Type Of Market Share
                  </span>
                  <span className="kt-widget12__value">Grossery</span>
                </div>
              </div>
              <div className="kt-widget12__item">
                <div className="kt-widget12__info">
                  <span className="kt-widget12__desc">
                    Avarage Product Price
                  </span>
                  <span className="kt-widget12__value">$60,70</span>
                </div>
                <div className="kt-widget12__info">
                  <span className="kt-widget12__desc">Satisfication Rate</span>
                  <span className="kt-widget12__progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar kt-bg-brand"
                        role="progressbar"
                        style={{ width: `${63}%` }}
                        aria-valuenow="63"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <span className="kt-widget12__stat">63%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end:: Widgets/Finance Summary */}
    </div>
  );
};

export default LecturerCourseFinanceSummary;
