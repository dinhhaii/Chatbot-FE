import React from 'react';
import { Link } from 'react-router-dom';

const LecturerCourseStatistic = () => {
  return (
    <div className="col-xl-4 col-lg-6 order-lg-3 order-xl-1">
      {/* begin:: Widgets/Sales States */}
      <div className="kt-portlet kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Sales Stats</h3>
          </div>
          <div className="kt-portlet__head-toolbar">
            <div className="dropdown dropdown-inline">
              <button
                type="button"
                className="btn btn-clean btn-sm btn-icon btn-icon-md"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <i className="flaticon-more-1" />
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <ul className="kt-nav">
                  <li className="kt-nav__item">
                    <Link to="/" className="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-line-chart" />
                      <span className="kt-nav__link-text">Reports</span>
                    </Link>
                  </li>
                  <li className="kt-nav__item">
                    <Link to="/" className="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-send" />
                      <span className="kt-nav__link-text">Messages</span>
                    </Link>
                  </li>
                  <li className="kt-nav__item">
                    <Link to="/" className="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-pie-chart-1" />
                      <span className="kt-nav__link-text">Charts</span>
                    </Link>
                  </li>
                  <li className="kt-nav__item">
                    <Link to="/" className="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-avatar" />
                      <span className="kt-nav__link-text">Members</span>
                    </Link>
                  </li>
                  <li className="kt-nav__item">
                    <Link to="/" className="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-settings" />
                      <span className="kt-nav__link-text">Settings</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="kt-portlet__body">
          <div className="kt-widget6">
            <div className="kt-widget6__head">
              <div className="kt-widget6__item">
                <span>Sceduled</span>
                <span>Count</span>
                <span>Amount</span>
              </div>
            </div>
            <div className="kt-widget6__body">
              <div className="kt-widget6__item">
                <span>16/13/17</span>
                <span>67</span>
                <span className="kt-font-success kt-font-bold">$14,740</span>
              </div>
              <div className="kt-widget6__item">
                <span>02/28/17</span>
                <span>120</span>
                <span className="kt-font-brand kt-font-bold">$11,002</span>
              </div>
              <div className="kt-widget6__item">
                <span>03/06/17</span>
                <span>32</span>
                <span className="kt-font-warning kt-font-bold">$10,900</span>
              </div>
              <div className="kt-widget6__item">
                <span>10/21/17</span>
                <span>130</span>
                <span className="kt-font-danger kt-font-bold">$14,740</span>
              </div>
              <div className="kt-widget6__item">
                <span>01/02/17</span>
                <span>5</span>
                <span className="kt-font-info kt-font-bold">$18,540</span>
              </div>
              <div className="kt-widget6__item">
                <span>03/06/17</span>
                <span>32</span>
                <span className="kt-font-danger kt-font-bold">$10,900</span>
              </div>
              <div className="kt-widget6__item">
                <span>12/31/17</span>
                <span>201</span>
                <span className="kt-font-success kt-font-bold">$25,609</span>
              </div>
            </div>
            <div className="kt-widget6__foot">
              <div className="kt-widget6__action kt-align-right">
                <Link to="/" className="btn btn-label-brand btn-sm btn-bold">
                  Export...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end:: Widgets/Sales States */}
    </div>
  );
};

export default LecturerCourseStatistic;
