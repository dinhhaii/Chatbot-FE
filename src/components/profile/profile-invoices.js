/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable  react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Pagination } from 'antd';
import InvoiceTable from './profile-invoices-table';
import { fetchInvoiceLearnerList } from '../../actions/invoice';
import { usePrevious } from '../../utils/helper';
import 'antd/dist/antd.css';

const ProfileInvoices = (props) => {
  const prevProps = usePrevious(props);
  const { invoiceState, userState } = props;
  const dataPerPage = 3;

  // const [filter, setFilter] = useState({
  //   search: '',
  // });

  const [pagination, setPagination] = useState({
    indexFirst: 0,
    indexLast: 0,
    currentPage: 1,
    totalPage: 1,
    data: [],
  });

  // DID MOUNT
  useEffect(() => {
    props.fetchInvoiceLearnerListAction(userState.user._id);
  }, []);

  // DID UPDATE 
  useEffect(() => {
    if (prevProps && prevProps.invoiceState.invoiceLearnerList !== props.invoiceState.invoiceLearnerList) {
      setPagination({
        indexFirst: 0,
        indexLast: dataPerPage,
        currentPage: 1,
        totalPage: Math.ceil(
          invoiceState.invoiceLearnerList.length / dataPerPage,
        ),
        data: [...invoiceState.invoiceLearnerList].slice(0, dataPerPage),
      });
    }
  });

  const choosePage = (page) => {
    const indexFirst = (page - 1) * dataPerPage;
    const indexLast = page * dataPerPage;
    const currentPage = page;
    const data = invoiceState.invoiceLearnerList
      .filter(e => true)
      .slice(indexFirst, indexLast);

    setPagination({
      ...pagination,
      indexFirst,
      indexLast,
      currentPage,
      data,
    });
  };

  return (
    <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
      <div className="kt-portlet kt-portlet--mobile">
        <div className="kt-portlet__head kt-portlet__head--lg">
          <div className="kt-portlet__head-label">
            <span className="kt-portlet__head-icon">
              <i className="icon-newspaper" />
            </span>
            <h3 className="kt-portlet__head-title">Invoices</h3>
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
                          <i className="icon-search" />
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
                </div>
              </div>
            </div>
          </div>

          {/* end: Search Form */}
        </div>
        <div className="kt-portlet__body kt-portlet__body--fit">
          <InvoiceTable data={pagination.data} />
          <div className="pb-5 pr-5 d-flex justify-content-end">
            <Pagination onChange={choosePage} defaultCurrent={1} defaultPageSize={1} current={pagination.currentPage} total={pagination.totalPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    invoiceState: state.invoiceState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInvoiceLearnerListAction: bindActionCreators(
      fetchInvoiceLearnerList,
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ProfileInvoices));
