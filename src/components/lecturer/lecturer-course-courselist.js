/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const LecturerCourseList = () => {
  return (
    <div className="col-xl-12 order-lg-2 order-xl-1">
      <div className="kt-portlet kt-portlet--height-fluid kt-portlet--mobile ">
        <div className="kt-portlet__head kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">
              Exclusive Datatable Plugin
            </h3>
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
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-md dropdown-menu-fit">
                {/* <!--begin::Nav--> */}
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
                    <Link to="/" class="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-drop" />
                      <span className="kt-nav__link-text">Activity</span>
                    </Link>
                  </li>
                  <li className="kt-nav__item">
                    <Link to="/" class="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-calendar-8" />
                      <span className="kt-nav__link-text">FAQ</span>
                    </Link>
                  </li>
                  <li className="kt-nav__item">
                    <Link to="/" class="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-telegram-logo" />
                      <span className="kt-nav__link-text">Settings</span>
                    </Link>
                  </li>
                  <li className="kt-nav__item">
                    <Link to="/" class="kt-nav__link">
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
                    <Link class="btn btn-label-danger btn-bold btn-sm" to="/">
                      Upgrade plan
                    </Link>
                    <Link
                      class="btn btn-clean btn-bold btn-sm"
                      to="/"
                      data-toggle="kt-tooltip"
                      data-placement="right"
                      title="Click to learn more...">
                      Learn more
                    </Link>
                  </li>
                </ul>

                {/* <!--end::Nav--> */}
              </div>
            </div>
          </div>
        </div>
        <div className="kt-portlet__body kt-portlet__body--fit">
          {/* <!--begin: Datatable --> */}
          <div
            className="kt-datatable kt-datatable--default kt-datatable--brand kt-datatable--scroll kt-datatable--loaded"
            id="kt_datatable_latest_orders"
           >
            <table
              className="kt-datatable__table"
              style={{ display: 'block', maxHeight: `${500}px` }}>
              <thead className="kt-datatable__head">
                <tr className="kt-datatable__row" style={{ left: `${0}px` }}>
                  <th
                    data-field="RecordID"
                    className="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check">
                    <span style={{ width: `${40}px` }}>
                      <label className="kt-checkbox kt-checkbox--single kt-checkbox--all kt-checkbox--solid">
                        <input type="checkbox" /> &nbsp;<span> </span>
                      </label>
                    </span>
                  </th>
                  <th
                    data-field="ShipName"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell kt-datatable__cell--sort">
                    <span style={{ width: `${252}px` }}>Company</span>
                  </th>
                  <th
                    data-field="ShipDate"
                    className="kt-datatable__cell kt-datatable__cell--sort">
                    <span style={{ width: `${100}px` }}>Date</span>
                  </th>
                  <th
                    data-field="Status"
                    className="kt-datatable__cell kt-datatable__cell--sort">
                    <span style={{ width: `${100}px` }}>Status</span>
                  </th>
                  <th
                    data-field="Type"
                    className="kt-datatable__cell kt-datatable__cell--sort">
                    <span style={{ width: `${200}px` }}>Managed By</span>
                  </th>
                  <th
                    data-field="Actions"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell kt-datatable__cell--sort">
                    <span style={{ width: `${80}px` }}>Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody
                className="kt-datatable__body ps ps--active-y"
                style={{ maxHeight: `${447}px` }}>
                <tr
                  data-row="0"
                  className="kt-datatable__row"
                  style={{ left: `${0}px` }}>
                  <td
                    className="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check"
                    data-field="RecordID">
                    <span style={{ width: `${40}px` }}>
                      <label className="kt-checkbox kt-checkbox--single kt-checkbox--solid">
                        <input type="checkbox" value="1" />
                        &nbsp;
                        <span />
                      </label>
                    </span>
                  </td>
                  <td
                    data-field="ShipName"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ width: `${252}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img
                            src="assets/media/client-logos/logo1.png"
                            alt=""
                          />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Gleichner, Ziemann and Gutkowski
                          </Link>
                          <span className="kt-user-card-v2__email">
                            Angular, React
                          </span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td data-field="ShipDate" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="kt-font-bold">2/12/2018</span>
                    </span>
                  </td>
                  <td data-field="Status" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="btn btn-bold btn-sm btn-font-sm  btn-label-success">
                        Success
                      </span>
                    </span>
                  </td>
                  <td data-field="Type" className="kt-datatable__cell">
                    <span style={{ width: `${200}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <div className="kt-badge kt-badge--xl kt-badge--danger">
                            N
                          </div>
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Nixie Sailor
                          </Link>
                          <span className="kt-user-card-v2__desc">Manager</span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td
                    data-field="Actions"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ overflow: 'visible', position: 'relative', width: `${80}px` }}>
                      <div className="dropdown">
                        <Link
                          
                          class="btn btn-sm btn-clean btn-icon btn-icon-md"
                          data-toggle="dropdown">
                          <i className="flaticon-more-1" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul className="kt-nav">
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-expand" />
                                <span className="kt-nav__link-text">View</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-contract" />
                                <span className="kt-nav__link-text">Edit</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-trash" />
                                <span className="kt-nav__link-text">
                                  Delete
                                </span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-mail-1" />
                                <span className="kt-nav__link-text">
                                  Export
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr
                  data-row="1"
                  className="kt-datatable__row kt-datatable__row--even"
                  style={{ left: `${0}px` }}>
                  <td
                    className="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check"
                    data-field="RecordID">
                    <span style={{ width: `${40}px` }}>
                      <label className="kt-checkbox kt-checkbox--single kt-checkbox--solid">
                        <input type="checkbox" value="2" />
                        &nbsp;
                        <span />
                      </label>
                    </span>
                  </td>
                  <td
                    data-field="ShipName"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ width: `${252}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img
                            src="assets/media/client-logos/logo2.png"
                            alt=""
                          />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Rosenbaum-Reichel
                          </Link>
                          <span className="kt-user-card-v2__email">
                            Vue, Kendo
                          </span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td data-field="ShipDate" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="kt-font-bold">8/6/2017</span>
                    </span>
                  </td>
                  <td data-field="Status" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="btn btn-bold btn-sm btn-font-sm  btn-label-danger">
                        Done
                      </span>
                    </span>
                  </td>
                  <td data-field="Type" className="kt-datatable__cell">
                    <span style={{ width: `${200}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <div className="kt-badge kt-badge--xl kt-badge--info">
                            E
                          </div>
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Emelita Giraldez
                          </Link>
                          <span className="kt-user-card-v2__desc">
                            Designer
                          </span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td
                    data-field="Actions"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ overflow: 'visible', position: 'relative', width: `${80}px` }}>
                      <div className="dropdown">
                        <Link
                          to="/"
                          class="btn btn-sm btn-clean btn-icon btn-icon-md"
                          data-toggle="dropdown">
                          <i className="flaticon-more-1" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul className="kt-nav">
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-expand" />
                                <span className="kt-nav__link-text">View</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-contract" />
                                <span className="kt-nav__link-text">Edit</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-trash" />
                                <span className="kt-nav__link-text">
                                  Delete
                                </span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-mail-1" />
                                <span className="kt-nav__link-text">
                                  Export
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr
                  data-row="2"
                  className="kt-datatable__row"
                  style={{ left: `${0}px` }}>
                  <td
                    className="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check"
                    data-field="RecordID">
                    <span style={{ width: `${40}px` }}>
                      <label className="kt-checkbox kt-checkbox--single kt-checkbox--solid">
                        <input type="checkbox" value="3" />
                        &nbsp;
                        <span />
                      </label>
                    </span>
                  </td>
                  <td
                    data-field="ShipName"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ width: `${252}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img
                            src="assets/media/client-logos/logo3.png"
                            alt=""
                          />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Kulas, Cassin and Batz
                          </Link>
                          <span className="kt-user-card-v2__email">
                            .NET, Oracle, MySQL
                          </span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td data-field="ShipDate" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="kt-font-bold">5/26/2016</span>
                    </span>
                  </td>
                  <td data-field="Status" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="btn btn-bold btn-sm btn-font-sm  btn-label-brand">
                        Pending
                      </span>
                    </span>
                  </td>
                  <td data-field="Type" className="kt-datatable__cell">
                    <span style={{ width: `${200}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img src="assets/media/users/100_6.jpg" alt="" />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Ula Luckin
                          </Link>
                          <span className="kt-user-card-v2__desc">
                            Developer
                          </span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td
                    data-field="Actions"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ overflow: 'visible', position: 'relative', width: `${80}px` }}>
                      <div className="dropdown">
                        <Link
                          
                          class="btn btn-sm btn-clean btn-icon btn-icon-md"
                          data-toggle="dropdown">
                          <i className="flaticon-more-1" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul className="kt-nav">
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-expand" />
                                <span className="kt-nav__link-text">View</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-contract" />
                                <span className="kt-nav__link-text">Edit</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-trash" />
                                <span className="kt-nav__link-text">
                                  Delete
                                </span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-mail-1" />
                                <span className="kt-nav__link-text">
                                  Export
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr
                  data-row="3"
                  className="kt-datatable__row kt-datatable__row--even"
                  style={{ left: `${0}px` }}>
                  <td
                    className="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check"
                    data-field="RecordID">
                    <span style={{ width: `${40}px` }}>
                      <label className="kt-checkbox kt-checkbox--single kt-checkbox--solid">
                        <input type="checkbox" value="4" />
                        &nbsp;
                        <span />
                      </label>
                    </span>
                  </td>
                  <td
                    data-field="ShipName"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ width: `${252}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img
                            src="assets/media/client-logos/logo4.png"
                            alt=""
                          />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Pfannerstill-Treutel
                          </Link>
                          <span className="kt-user-card-v2__email">
                            Node, SASS, Webpack
                          </span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td data-field="ShipDate" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="kt-font-bold">7/2/2016</span>
                    </span>
                  </td>
                  <td data-field="Status" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="btn btn-bold btn-sm btn-font-sm  btn-label-brand">
                        Pending
                      </span>
                    </span>
                  </td>
                  <td data-field="Type" className="kt-datatable__cell">
                    <span style={{ width: `${200}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img src="assets/media/users/100_7.jpg" alt="" />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Evangeline Cure
                          </Link>
                          <span className="kt-user-card-v2__desc">Manager</span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td
                    data-field="Actions"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ overflow: 'visible', position: 'relative', width: `${80}px` }}>
                      <div className="dropdown">
                        <Link
                          
                          class="btn btn-sm btn-clean btn-icon btn-icon-md"
                          data-toggle="dropdown">
                          <i className="flaticon-more-1" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul className="kt-nav">
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-expand" />
                                <span className="kt-nav__link-text">View</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-contract" />
                                <span className="kt-nav__link-text">Edit</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-trash" />
                                <span className="kt-nav__link-text">
                                  Delete
                                </span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-mail-1" />
                                <span className="kt-nav__link-text">
                                  Export
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr
                  data-row="4"
                  className="kt-datatable__row"
                  style={{ left: `${0}px` }}>
                  <td
                    className="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check"
                    data-field="RecordID">
                    <span style={{ width: `${40}px` }}>
                      <label className="kt-checkbox kt-checkbox--single kt-checkbox--solid">
                        <input type="checkbox" value="5" />
                        &nbsp;
                        <span />
                      </label>
                    </span>
                  </td>
                  <td
                    data-field="ShipName"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ width: `${252}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img
                            src="assets/media/client-logos/logo5.png"
                            alt=""
                          />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Dicki-Kling
                          </Link>
                          <span className="kt-user-card-v2__email">
                            MangoDB, Java
                          </span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td data-field="ShipDate" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="kt-font-bold">5/20/2017</span>
                    </span>
                  </td>
                  <td data-field="Status" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="btn btn-bold btn-sm btn-font-sm  btn-label-danger">
                        Processing
                      </span>
                    </span>
                  </td>
                  <td data-field="Type" className="kt-datatable__cell">
                    <span style={{ width: `${200}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img src="assets/media/users/100_8.jpg" alt="" />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Tierney St. Louis
                          </Link>
                          <span className="kt-user-card-v2__desc">Manager</span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td
                    data-field="Actions"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ overflow: 'visible', position: 'relative', width: `${80}px` }}>
                      <div className="dropdown">
                        <Link
                          
                          class="btn btn-sm btn-clean btn-icon btn-icon-md"
                          data-toggle="dropdown">
                          <i className="flaticon-more-1" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul className="kt-nav">
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-expand" />
                                <span className="kt-nav__link-text">View</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-contract" />
                                <span className="kt-nav__link-text">Edit</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-trash" />
                                <span className="kt-nav__link-text">
                                  Delete
                                </span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-mail-1" />
                                <span className="kt-nav__link-text">
                                  Export
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr
                  data-row="5"
                  className="kt-datatable__row kt-datatable__row--even"
                  style={{ left: `${0}px` }}>
                  <td
                    className="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check"
                    data-field="RecordID">
                    <span style={{ width: `${40}px` }}>
                      <label className="kt-checkbox kt-checkbox--single kt-checkbox--solid">
                        <input type="checkbox" value="6" />
                        &nbsp;
                        <span />
                      </label>
                    </span>
                  </td>
                  <td
                    data-field="ShipName"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ width: `${252}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img
                            src="assets/media/client-logos/logo3.png"
                            alt=""
                          />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Gleason, Kub and Marquardt
                          </Link>
                          <span className="kt-user-card-v2__email">
                            .NET, Oracle, MySQL
                          </span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td data-field="ShipDate" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="kt-font-bold">11/26/2016</span>
                    </span>
                  </td>
                  <td data-field="Status" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="btn btn-bold btn-sm btn-font-sm  btn-label-warning">
                        Canceled
                      </span>
                    </span>
                  </td>
                  <td data-field="Type" className="kt-datatable__cell">
                    <span style={{ width: `${200}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img src="assets/media/users/100_9.jpg" alt="" />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Gerhard Reinhard
                          </Link>
                          <span className="kt-user-card-v2__desc">
                            Designer
                          </span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td
                    data-field="Actions"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ overflow: 'visible', position: 'relative', width: `${80}px` }}>
                      <div className="dropdown">
                        <Link
                          
                          class="btn btn-sm btn-clean btn-icon btn-icon-md"
                          data-toggle="dropdown">
                          <i className="flaticon-more-1" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul className="kt-nav">
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-expand" />
                                <span className="kt-nav__link-text">View</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-contract" />
                                <span className="kt-nav__link-text">Edit</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-trash" />
                                <span className="kt-nav__link-text">
                                  Delete
                                </span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-mail-1" />
                                <span className="kt-nav__link-text">
                                  Export
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr
                  data-row="6"
                  className="kt-datatable__row"
                  style={{ left: `${0}px` }}>
                  <td
                    className="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check"
                    data-field="RecordID">
                    <span style={{ width: `${40}px` }}>
                      <label className="kt-checkbox kt-checkbox--single kt-checkbox--solid">
                        <input type="checkbox" value="7" />
                        &nbsp;
                        <span />
                      </label>
                    </span>
                  </td>
                  <td
                    data-field="ShipName"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ width: `${252}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img
                            src="assets/media/client-logos/logo4.png"
                            alt=""
                          />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Jenkins Inc
                          </Link>
                          <span className="kt-user-card-v2__email">
                            Node, SASS, Webpack
                          </span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td data-field="ShipDate" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="kt-font-bold">6/28/2016</span>
                    </span>
                  </td>
                  <td data-field="Status" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="btn btn-bold btn-sm btn-font-sm  btn-label-danger">
                        Processing
                      </span>
                    </span>
                  </td>
                  <td data-field="Type" className="kt-datatable__cell">
                    <span style={{ width: `${200}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img src="assets/media/users/100_10.jpg" alt="" />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Englebert Shelley
                          </Link>
                          <span className="kt-user-card-v2__desc">CEO</span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td
                    data-field="Actions"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ overflow: 'visible', position: 'relative', width: `${80}px` }}>
                      <div className="dropdown">
                        <Link
                          
                          class="btn btn-sm btn-clean btn-icon btn-icon-md"
                          data-toggle="dropdown">
                          <i className="flaticon-more-1" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul className="kt-nav">
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-expand" />
                                <span className="kt-nav__link-text">View</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-contract" />
                                <span className="kt-nav__link-text">Edit</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-trash" />
                                <span className="kt-nav__link-text">
                                  Delete
                                </span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-mail-1" />
                                <span className="kt-nav__link-text">
                                  Export
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr
                  data-row="7"
                  className="kt-datatable__row kt-datatable__row--even"
                  style={{ left: `${0}px` }}>
                  <td
                    className="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check"
                    data-field="RecordID">
                    <span style={{ width: `${40}px` }}>
                      <label className="kt-checkbox kt-checkbox--single kt-checkbox--solid">
                        <input type="checkbox" value="8" />
                        &nbsp;
                        <span />
                      </label>
                    </span>
                  </td>
                  <td
                    data-field="ShipName"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ width: `${252}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img
                            src="assets/media/client-logos/logo5.png"
                            alt=""
                          />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Streich LLC
                          </Link>
                          <span className="kt-user-card-v2__email">
                            MangoDB, Java
                          </span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td data-field="ShipDate" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="kt-font-bold">8/5/2016</span>
                    </span>
                  </td>
                  <td data-field="Status" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="btn btn-bold btn-sm btn-font-sm  btn-label-danger">
                        Done
                      </span>
                    </span>
                  </td>
                  <td data-field="Type" className="kt-datatable__cell">
                    <span style={{ width: `${200}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img src="assets/media/users/100_11.jpg" alt="" />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Hazlett Kite
                          </Link>
                          <span className="kt-user-card-v2__desc">Sales</span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td
                    data-field="Actions"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ overflow: 'visible', position: 'relative', width: `${80}px` }}>
                      <div className="dropdown">
                        <Link
                          
                          class="btn btn-sm btn-clean btn-icon btn-icon-md"
                          data-toggle="dropdown">
                          <i className="flaticon-more-1" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul className="kt-nav">
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-expand" />
                                <span className="kt-nav__link-text">View</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-contract" />
                                <span className="kt-nav__link-text">Edit</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-trash" />
                                <span className="kt-nav__link-text">
                                  Delete
                                </span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-mail-1" />
                                <span className="kt-nav__link-text">
                                  Export
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr
                  data-row="8"
                  className="kt-datatable__row"
                  style={{ left: `${0}px` }}>
                  <td
                    className="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check"
                    data-field="RecordID">
                    <span style={{ width: `${40}px` }}>
                      <label className="kt-checkbox kt-checkbox--single kt-checkbox--solid">
                        <input type="checkbox" value="9" />
                        &nbsp;
                        <span />
                      </label>
                    </span>
                  </td>
                  <td
                    data-field="ShipName"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ width: `${252}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img
                            src="assets/media/client-logos/logo3.png"
                            alt=""
                          />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Haley, Schamberger and Durgan
                          </Link>
                          <span className="kt-user-card-v2__email">
                            .NET, Oracle, MySQL
                          </span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td data-field="ShipDate" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="kt-font-bold">3/31/2017</span>
                    </span>
                  </td>
                  <td data-field="Status" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="btn btn-bold btn-sm btn-font-sm  btn-label-danger">
                        Processing
                      </span>
                    </span>
                  </td>
                  <td data-field="Type" className="kt-datatable__cell">
                    <span style={{ width: `${200}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img src="assets/media/users/100_12.jpg" alt="" />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Freida Morby
                          </Link>
                          <span className="kt-user-card-v2__desc">Sales</span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td
                    data-field="Actions"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ overflow: 'visible', position: 'relative', width: `${80}px` }}>
                      <div className="dropdown">
                        <Link
                          class="btn btn-sm btn-clean btn-icon btn-icon-md"
                          data-toggle="dropdown">
                          <i className="flaticon-more-1" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul className="kt-nav">
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-expand" />
                                <span className="kt-nav__link-text">View</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-contract" />
                                <span className="kt-nav__link-text">Edit</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-trash" />
                                <span className="kt-nav__link-text">
                                  Delete
                                </span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-mail-1" />
                                <span className="kt-nav__link-text">
                                  Export
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr
                  data-row="9"
                  className="kt-datatable__row kt-datatable__row--even"
                  style={{ left: `${0}px` }}>
                  <td
                    className="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check"
                    data-field="RecordID">
                    <span style={{ width: `${40}px` }}>
                      <label className="kt-checkbox kt-checkbox--single kt-checkbox--solid">
                        <input type="checkbox" value="10" />
                        &nbsp;
                        <span />
                      </label>
                    </span>
                  </td>
                  <td
                    data-field="ShipName"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ width: `${252}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img
                            src="assets/media/client-logos/logo4.png"
                            alt=""
                          />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Labadie, Predovic and Hammes
                          </Link>
                          <span className="kt-user-card-v2__email">
                            Node, SASS, Webpack
                          </span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td data-field="ShipDate" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="kt-font-bold">1/26/2017</span>
                    </span>
                  </td>
                  <td data-field="Status" className="kt-datatable__cell">
                    <span style={{ width: `${100}px` }}>
                      <span className="btn btn-bold btn-sm btn-font-sm  btn-label-brand">
                        Pending
                      </span>
                    </span>
                  </td>
                  <td data-field="Type" className="kt-datatable__cell">
                    <span style={{ width: `${200}px` }}>
                      <div className="kt-user-card-v2">
                        <div className="kt-user-card-v2__pic">
                          <img src="assets/media/users/100_10.jpg" alt="" />
                        </div>
                        <div className="kt-user-card-v2__details">
                          <Link to="/" class="kt-user-card-v2__name">
                            Obed Helian
                          </Link>
                          <span className="kt-user-card-v2__desc">Sales</span>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td
                    data-field="Actions"
                    data-autohide-disabled="false"
                    className="kt-datatable__cell">
                    <span style={{ overflow: 'visible', position: 'relative', width: `${80}px` }}>
                      <div className="dropdown">
                        <Link
                          to="/"
                          className="btn btn-sm btn-clean btn-icon btn-icon-md"
                          data-toggle="dropdown">
                          <i className="flaticon-more-1" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul className="kt-nav">
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-expand" />
                                <span className="kt-nav__link-text">View</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-contract" />
                                <span className="kt-nav__link-text">Edit</span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-trash" />
                                <span className="kt-nav__link-text">
                                  Delete
                                </span>
                              </Link>
                            </li>
                            <li className="kt-nav__item">
                              <Link to="/" class="kt-nav__link">
                                <i className="kt-nav__link-icon flaticon2-mail-1" />
                                <span className="kt-nav__link-text">
                                  Export
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </span>
                  </td>
                </tr>
                <div className="ps__rail-x" style={{ left: `${0}px`, bottom: `${0}px` }}>
                  <div
                    className="ps__thumb-x"
                    tabIndex="0"
                    style={{ width: `${0}px`, left: `${0}px` }}
                  />
                </div>
                <div
                  className="ps__rail-y"
                  style={{ height: `${447}px`, top: `${0}px`, right: `${0}px` }}>
                  <div
                    className="ps__thumb-y"
                    tabIndex="0"
                    style={{ top: `${0}px`, height: `${300}px` }}
                  />
                </div>
              </tbody>
            </table>
            <div className="kt-datatable__pager kt-datatable--paging-loaded">
              <ul className="kt-datatable__pager-nav">
                <li>
                  <Link
                    title="First"
                    class="kt-datatable__pager-link kt-datatable__pager-link--first kt-datatable__pager-link--disabled"
                    data-page="1"
                    disabled="disabled">
                    <i className="flaticon2-fast-back" />
                  </Link>
                </li>
                <li>
                  <Link
                    title="Previous"
                    class="kt-datatable__pager-link kt-datatable__pager-link--prev kt-datatable__pager-link--disabled"
                    data-page="1"
                    disabled="disabled">
                    <i className="flaticon2-back" />
                  </Link>
                </li>
                <li />
                <li style={{ display: 'none' }}>
                  <input
                    type="text"
                    className="kt-pager-input form-control"
                    title="Page number"
                  />
                </li>
                <li>
                  <Link
                    class="kt-datatable__pager-link kt-datatable__pager-link-number kt-datatable__pager-link--active"
                    data-page="1"
                    title="1">
                    1
                  </Link>
                </li>
                <li>
                  <Link
                    class="kt-datatable__pager-link kt-datatable__pager-link-number"
                    data-page="2"
                    title="2">
                    2
                  </Link>
                </li>
                <li>
                  <Link
                    class="kt-datatable__pager-link kt-datatable__pager-link-number"
                    data-page="3"
                    title="3">
                    3
                  </Link>
                </li>
                <li>
                  <Link
                    class="kt-datatable__pager-link kt-datatable__pager-link-number"
                    data-page="4"
                    title="4">
                    4
                  </Link>
                </li>
                <li>
                  <Link
                    class="kt-datatable__pager-link kt-datatable__pager-link-number"
                    data-page="5"
                    title="5">
                    5
                  </Link>
                </li>
                <li />
                <li>
                  <Link
                    title="Next"
                    class="kt-datatable__pager-link kt-datatable__pager-link--next"
                    data-page="2">
                    <i className="flaticon2-next" />
                  </Link>
                </li>
                <li>
                  <Link
                    title="Last"
                    class="kt-datatable__pager-link kt-datatable__pager-link--last"
                    data-page="20">
                    <i className="flaticon2-fast-next" />
                  </Link>
                </li>
              </ul>
              <div className="kt-datatable__pager-info">
                <div
                  className="dropdown bootstrap-select kt-datatable__pager-size"
                  style={{ width: `${60}px` }}>
                  <select
                    className="selectpicker kt-datatable__pager-size"
                    title="Select page size"
                    data-width="60px"
                    data-container="body"
                    data-selected="10"
                    tabIndex="-98">
                    <option className="bs-title-option" value="" />
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  <button
                    type="button"
                    className="btn dropdown-toggle btn-light"
                    data-toggle="dropdown"
                    role="combobox"
                    aria-owns="bs-select-1"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    title="Select page size">
                    <div className="filter-option">
                      <div className="filter-option-inner">
                        <div className="filter-option-inner-inner">10</div>
                      </div>
                    </div>
                  </button>
                  <div className="dropdown-menu ">
                    <div
                      className="inner show"
                      role="listbox"
                      id="bs-select-1"
                      tabIndex="-1">
                      <ul
                        className="dropdown-menu inner show"
                        role="presentation"
                      />
                    </div>
                  </div>
                </div>
                <span className="kt-datatable__pager-detail">
                  Showing 1 - 10 of 200
                </span>
              </div>
            </div>
          </div>
          {/* <!--end: Datatable --> */}
        </div>
      </div>
    </div>
  );
};

export default LecturerCourseList;
