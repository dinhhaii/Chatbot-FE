/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
import LecturerInvoiceListTable from './lecturer-course-invoicelist-table';
import { fetchInvoiceLecturerList } from '../../actions/invoice';
import { usePrevious } from '../../utils/helper';
import 'antd/dist/antd.css';
import { PATH } from '../../utils/constant';

const LecturerInvoiceList = (props) => {
  const prevProps = usePrevious(props);
  const { invoiceState, idLecturer } = props;
  const dataPerPage = 5;
  
  const [timer, setTimer] = useState(null);

  const [filter, setFilter] = useState({
    search: '',
    status: '',
  });

  const [pagination, setPagination] = useState({
    indexFirst: 0,
    indexLast: 0,
    currentPage: 1,
    totalPage: 1,
    data: [],
  });

  useEffect(() => {
    props.fetchInvoiceLecturerListAction(idLecturer);
  }, []);

  // DID UPDATE 
  useEffect(() => {
    if (prevProps && prevProps.invoiceState.invoiceLecturerList !== props.invoiceState.invoiceLecturerList) {
      setPagination({
        indexFirst: 0,
        indexLast: dataPerPage,
        currentPage: 1,
        totalPage: Math.ceil(invoiceState.invoiceLecturerList.length / dataPerPage),
        data: invoiceState.invoiceLecturerList.slice(0, dataPerPage),
      });
    }
  });

  const choosePage = (page) => {
    const indexFirst = (page - 1) * dataPerPage;
    const indexLast = page * dataPerPage;
    const currentPage = page;
    const data = handleFilter(invoiceState.invoiceLecturerList, filter)
      .slice(indexFirst, indexLast);

    setPagination({
      ...pagination,
      indexFirst,
      indexLast,
      currentPage,
      data,
    });
  };

  const handleFilter = (list, filterState) => {
    const { search, status } = filterState;
    return list
      .filter(e => search === ''
        || e.course.name.toLowerCase().includes(search.toLowerCase())
        || e.lecturer.firstName.toLowerCase().includes(search.toLowerCase())
        || e.lecturer.lastName.toLowerCase().includes(search.toLowerCase()))
      .filter(e => status === '' || e.status.toLowerCase().includes(status.toLowerCase()));
  };

  const handleFilterChange = filterState => {
    const data = handleFilter(invoiceState.invoiceLecturerList, filterState);
    setPagination({
      ...pagination,
      indexFirst: 0,
      indexLast: dataPerPage,
      totalPage: Math.ceil(data.length / dataPerPage),
      data: data.slice(0, dataPerPage),
    });
  };

  return (
    <div className="col-xl-12 order-lg-2 order-xl-1">
      <div className="kt-portlet kt-portlet--height-fluid kt-portlet--mobile ">
        <div className="kt-portlet__head kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Invoices</h3>
          </div>
          <div className="kt-portlet__head-toolbar">
            <div className="dropdown dropdown-inline">
              <Link
                to={PATH.COURSE_EDIT}
                className="btn btn-dark">
                Course Management <i className="icon-logout" />
              </Link>
            </div>
          </div>
        </div>
        <div className="kt-portlet__body kt-portlet__body--fit">
          <div className="row mb-3">
            <div className="col-lg-7 col-sm-12 kt-margin-b-20-tablet-and-mobile pr-5">
              <div className="kt-input-icon kt-input-icon--left ml-5 pr-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search course name, lecturer..."
                  onChange={(e) => {
                    const _filter = {
                      ...filter,
                      search: e.target.value,
                    };
                    setFilter(_filter);
                    clearInterval(timer);
                    setTimer(setTimeout(() => handleFilterChange(_filter), 500));
                  }}
                />
                <span className="kt-input-icon__icon kt-input-icon__icon--left">
                  <span>
                    <i className="icon-search" />
                  </span>
                </span>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 kt-margin-b-20-tablet-and-mobile">
              <div className="kt-form__group kt-form__group--inline ml-5 mr-5">
                <label>Status:</label>
                <div className="kt-form__control ml-3" style={{ display: 'inline-block' }}>
                  <select
                    className="form-control bootstrap-select"
                    value={filter.status}
                    onChange={(e) => {
                      const _filter = { ...filter, status: e.target.value };
                      setFilter(_filter);
                      handleFilterChange(_filter);
                    }}>
                    <option value="">None</option>
                    <option value="success">Success</option>
                    <option value="canceled">Canceled</option>
                    <option value="reported">Reported</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <LecturerInvoiceListTable data={pagination.data} />
          <div className="pb-5 pr-5 d-flex justify-content-end">
            <Pagination
              onChange={choosePage}
              defaultCurrent={1}
              defaultPageSize={1}
              current={pagination.currentPage}
              total={pagination.totalPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    invoiceState: state.invoiceState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInvoiceLecturerListAction: bindActionCreators(fetchInvoiceLecturerList, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LecturerInvoiceList);
