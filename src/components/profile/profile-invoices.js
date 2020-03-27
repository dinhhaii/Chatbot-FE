import React from 'react';
import { Link } from 'react-router-dom';

const ProfileInvoices = () => {
  return (
    <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
      <div className="alert alert-light alert-elevate" role="alert">
        <div className="alert-icon">
          <i className="flaticon-warning kt-font-brand" />
        </div>
        <div className="alert-text">
          The Metronic Datatable allows the end user to select single or
          multiple rows using checkbox to perform operations over rows.
        </div>
      </div>
      <div className="kt-portlet kt-portlet--mobile">
        <div className="kt-portlet__head kt-portlet__head--lg">
          <div className="kt-portlet__head-label">
            <span className="kt-portlet__head-icon">
              <i className="kt-font-brand flaticon2-line-chart" />
            </span>
            <h3 className="kt-portlet__head-title">Record Selection</h3>
          </div>
          <div className="kt-portlet__head-toolbar">
            <div className="kt-portlet__head-wrapper">
              <Link to="/" class="btn btn-clean btn-icon-sm">
                <i className="la la-long-arrow-left" />
                Back
              </Link>
              &nbsp;
              <div className="dropdown dropdown-inline">
                <button
                  type="button"
                  className="btn btn-brand btn-icon-sm"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  <i className="flaticon2-plus" /> Add New
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="kt-nav">
                    <li className="kt-nav__section kt-nav__section--first">
                      <span className="kt-nav__section-text">
                        Choose an action:
                      </span>
                    </li>
                    <li className="kt-nav__item">
                      <Link to="/" class="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-open-text-book" />
                        <span className="kt-nav__link-text">Reservations</span>
                      </Link>
                    </li>
                    <li className="kt-nav__item">
                      <Link to="/" class="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-calendar-4" />
                        <span className="kt-nav__link-text">Appointments</span>
                      </Link>
                    </li>
                    <li className="kt-nav__item">
                      <Link to="/" class="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-bell-alarm-symbol" />
                        <span className="kt-nav__link-text">Reminders</span>
                      </Link>
                    </li>
                    <li className="kt-nav__item">
                      <Link to="/" class="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-contract" />
                        <span className="kt-nav__link-text">Announcements</span>
                      </Link>
                    </li>
                    <li className="kt-nav__item">
                      <Link to="/" class="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-shopping-cart-1" />
                        <span className="kt-nav__link-text">Orders</span>
                      </Link>
                    </li>
                    <li className="kt-nav__separator kt-nav__separator--fit" />
                    <li className="kt-nav__item">
                      <Link to="/" class="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-rocket-1" />
                        <span className="kt-nav__link-text">Projects</span>
                      </Link>
                    </li>
                    <li className="kt-nav__item">
                      <Link to="/" class="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-chat-1" />
                        <span className="kt-nav__link-text">
                          User Feedbacks
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="kt-portlet__body">
          {/* begin: Search Form */}
          <div className="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10">
            <div className="row align-items-center">
              <div className="col-xl-8 order-2 order-xl-1">
                <div className="row align-items-center">
                  <div className="col-md-4 kt-margin-b-20-tablet-and-mobile">
                    <div className="kt-input-icon kt-input-icon--left">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        id="generalSearch"
                      />
                      <span className="kt-input-icon__icon kt-input-icon__icon--left">
                        <span>
                          <i className="la la-search" />
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 kt-margin-b-20-tablet-and-mobile">
                    <div className="kt-form__group kt-form__group--inline">
                      <div className="kt-form__label">
                        <label>Status:</label>
                      </div>
                      <div className="kt-form__control">
                        <select
                          className="form-control bootstrap-select"
                          id="kt_form_status">
                          <option value="">All</option>
                          <option value="1">Pending</option>
                          <option value="2">Delivered</option>
                          <option value="3">Canceled</option>
                          <option value="4">Success</option>
                          <option value="5">Info</option>
                          <option value="6">Danger</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 kt-margin-b-20-tablet-and-mobile">
                    <div className="kt-form__group kt-form__group--inline">
                      <div className="kt-form__label">
                        <label>Type:</label>
                      </div>
                      <div className="kt-form__control">
                        <select
                          className="form-control bootstrap-select"
                          id="kt_form_type">
                          <option value="">All</option>
                          <option value="1">Online</option>
                          <option value="2">Retail</option>
                          <option value="3">Direct</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 order-1 order-xl-2 kt-align-right">
                <Link to="/" class="btn btn-default kt-hidden">
                  <i className="la la-cart-plus" /> New Order
                </Link>
                <div className="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none" />
              </div>
            </div>
          </div>

          {/* end: Search Form */}

          {/* begin: Selected Rows Group Action Form */}
          <div
            className="kt-form kt-form--label-align-right kt-margin-t-20 collapse"
            id="kt_datatable_group_action_form">
            <div className="row align-items-center">
              <div className="col-xl-12">
                <div className="kt-form__group kt-form__group--inline">
                  <div className="kt-form__label kt-form__label-no-wrap">
                    <label className="kt-font-bold kt-font-danger-">
                      Selected
                      <span id="kt_datatable_selected_number">0</span> records:
                    </label>
                  </div>
                  <div className="kt-form__control">
                    <div className="btn-toolbar">
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-brand btn-sm dropdown-toggle"
                          data-toggle="dropdown">
                          Update status
                        </button>
                        <div className="dropdown-menu">
                          <Link class="dropdown-item" to="/">
                            Pending
                          </Link>
                          <Link class="dropdown-item" to="/">
                            Delivered
                          </Link>
                          <Link class="dropdown-item" to="/">
                            Canceled
                          </Link>
                        </div>
                      </div>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        className="btn btn-sm btn-danger"
                        type="button"
                        id="kt_datatable_delete_all">
                        Delete All
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        className="btn btn-sm btn-success"
                        type="button"
                        data-toggle="modal"
                        data-target="#kt_modal_fetch_id">
                        Fetch Selected Records
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* end: Selected Rows Group Action Form */}
        </div>
        <div className="kt-portlet__body kt-portlet__body--fit">
          {/* begin: Datatable */}
          <div className="kt-datatable" id="local_record_selection" />

          {/* end: Datatable */}
        </div>
      </div>
      <div className="kt-portlet kt-portlet--mobile">
        <div className="kt-portlet__head kt-portlet__head--lg">
          <div className="kt-portlet__head-label">
            <span className="kt-portlet__head-icon">
              <i className="kt-font-brand flaticon2-line-chart" />
            </span>
            <h3 className="kt-portlet__head-title">
              AJAX Datatable
              <small>data loaded from remote data source</small>
            </h3>
          </div>
          <div className="kt-portlet__head-toolbar">
            <div className="kt-portlet__head-wrapper">
              <Link to="/" class="btn btn-clean btn-icon-sm">
                <i className="la la-long-arrow-left" />
                Back
              </Link>
              &nbsp;
              <div className="dropdown dropdown-inline">
                <button
                  type="button"
                  className="btn btn-brand btn-icon-sm"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  <i className="flaticon2-plus" /> Add New
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="kt-nav">
                    <li className="kt-nav__section kt-nav__section--first">
                      <span className="kt-nav__section-text">
                        Choose an action:
                      </span>
                    </li>
                    <li className="kt-nav__item">
                      <Link to="/" class="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-open-text-book" />
                        <span className="kt-nav__link-text">Reservations</span>
                      </Link>
                    </li>
                    <li className="kt-nav__item">
                      <Link to="/" class="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-calendar-4" />
                        <span className="kt-nav__link-text">Appointments</span>
                      </Link>
                    </li>
                    <li className="kt-nav__item">
                      <Link to="/" class="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-bell-alarm-symbol" />
                        <span className="kt-nav__link-text">Reminders</span>
                      </Link>
                    </li>
                    <li className="kt-nav__item">
                      <Link to="/" class="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-contract" />
                        <span className="kt-nav__link-text">Announcements</span>
                      </Link>
                    </li>
                    <li className="kt-nav__item">
                      <Link to="/" class="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-shopping-cart-1" />
                        <span className="kt-nav__link-text">Orders</span>
                      </Link>
                    </li>
                    <li className="kt-nav__separator kt-nav__separator--fit" />
                    <li className="kt-nav__item">
                      <Link to="/" class="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-rocket-1" />
                        <span className="kt-nav__link-text">Projects</span>
                      </Link>
                    </li>
                    <li className="kt-nav__item">
                      <Link to="/" class="kt-nav__link">
                        <i className="kt-nav__link-icon flaticon2-chat-1" />
                        <span className="kt-nav__link-text">
                          User Feedbacks
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="kt-portlet__body">
          {/* begin: Search Form */}
          <div className="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10">
            <div className="row align-items-center">
              <div className="col-xl-8 order-2 order-xl-1">
                <div className="row align-items-center">
                  <div className="col-md-4 kt-margin-b-20-tablet-and-mobile">
                    <div className="kt-input-icon kt-input-icon--left">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        id="generalSearch"
                      />
                      <span className="kt-input-icon__icon kt-input-icon__icon--left">
                        <span>
                          <i className="la la-search" />
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 kt-margin-b-20-tablet-and-mobile">
                    <div className="kt-form__group kt-form__group--inline">
                      <div className="kt-form__label">
                        <label>Status:</label>
                      </div>
                      <div className="kt-form__control">
                        <select
                          className="form-control bootstrap-select"
                          id="kt_form_status">
                          <option value="">All</option>
                          <option value="1">Pending</option>
                          <option value="2">Delivered</option>
                          <option value="3">Canceled</option>
                          <option value="4">Success</option>
                          <option value="5">Info</option>
                          <option value="6">Danger</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 kt-margin-b-20-tablet-and-mobile">
                    <div className="kt-form__group kt-form__group--inline">
                      <div className="kt-form__label">
                        <label>Type:</label>
                      </div>
                      <div className="kt-form__control">
                        <select
                          className="form-control bootstrap-select"
                          id="kt_form_type">
                          <option value="">All</option>
                          <option value="1">Online</option>
                          <option value="2">Retail</option>
                          <option value="3">Direct</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 order-1 order-xl-2 kt-align-right">
                <Link to="/" class="btn btn-default kt-hidden">
                  <i className="la la-cart-plus" /> New Order
                </Link>
                <div className="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none" />
              </div>
            </div>
          </div>

          {/* end: Search Form */}

          {/* begin: Selected Rows Group Action Form */}
          <div
            className="kt-form kt-form--label-align-right kt-margin-t-20 collapse"
            id="kt_datatable_group_action_form1">
            <div className="row align-items-center">
              <div className="col-xl-12">
                <div className="kt-form__group kt-form__group--inline">
                  <div className="kt-form__label kt-form__label-no-wrap">
                    <label className="kt-font-bold kt-font-danger-">
                      Selected
                      <span id="kt_datatable_selected_number1">0</span> records:
                    </label>
                  </div>
                  <div className="kt-form__control">
                    <div className="btn-toolbar">
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-brand btn-sm dropdown-toggle"
                          data-toggle="dropdown">
                          Update status
                        </button>
                        <div className="dropdown-menu">
                          <Link class="dropdown-item" to="/">
                            Pending
                          </Link>
                          <Link class="dropdown-item" to="/">
                            Delivered
                          </Link>
                          <Link class="dropdown-item" to="/">
                            Canceled
                          </Link>
                        </div>
                      </div>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        className="btn btn-sm btn-danger"
                        type="button"
                        id="kt_datatable_delete_all1">
                        Delete All
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        className="btn btn-sm btn-success"
                        type="button"
                        data-toggle="modal"
                        data-target="#kt_modal_fetch_id_server">
                        Fetch Selected Records
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* end: Selected Rows Group Action Form */}
        </div>
        <div className="kt-portlet__body kt-portlet__body--fit">
          {/* begin: Datatable */}
          <div className="kt-datatable" id="server_record_selection" />

          {/* end: Datatable */}

          {/* begin::Modal */}
          <div
            className="modal fade"
            id="kt_modal_fetch_id"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div
                    className="kt-scrollable"
                    data-scrollbar-shown="true"
                    data-scrollable="true"
                    data-height="200">
                    <ul className="kt-datatable_selected_ids" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* end::Modal */}

          {/* begin::Modal */}
          <div
            className="modal fade"
            id="kt_modal_fetch_id_server"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div
                    className="kt-scrollable"
                    data-scrollbar-shown="true"
                    data-scrollable="true"
                    data-height="200">
                    <ul className="kt-datatable_selected_ids" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* end::Modal */}
        </div>
      </div>
    </div>
  );
};

export default ProfileInvoices;
