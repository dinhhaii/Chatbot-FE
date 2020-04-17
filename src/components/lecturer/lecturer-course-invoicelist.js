/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import LecturerInvoiceListTable from './lecturer-course-invoicelist-table';

const LecturerInvoiceList = (props) => {
  const { courseLecturerList } = props;
  
  return (
    <div className="col-xl-12 order-lg-2 order-xl-1">
      <div className="kt-portlet kt-portlet--height-fluid kt-portlet--mobile ">
        <div className="kt-portlet__head kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Invoices</h3>
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
            </div>
          </div>
        </div>
        <div className="kt-portlet__body kt-portlet__body--fit">
          <LecturerInvoiceListTable courseLecturerList={courseLecturerList} />
        </div>
      </div>
    </div>
  );
};

export default LecturerInvoiceList;
