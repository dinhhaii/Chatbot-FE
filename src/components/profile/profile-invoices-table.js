/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PATH } from '../../utils/constant';
import { updateInvoice } from '../../actions/invoice';
import { capitalize } from '../../utils/helper';
import ReportModal from './profile-invoices-report';
import FeedbackModal from './profile-invoices-feedback';

const InvoiceTable = (props) => {
  const headers = [
    { name: 'Name' },
    { name: 'Price' },
    { name: 'Pay Day' },
    { name: 'Duration' },
    { name: 'Accessible Days' },
    { name: 'Status' },
    { name: 'Lecturer' },
    { name: 'Feedback', width: 120 },
    { name: '', width: 150 },
  ];

  const { data } = props; 
  const [state, setState] = useState({
    _idInvoice: '',
    reportMsg: '',
    courseName: '',
    course: null,
    disableOther: true,
    visibleReportModal: false,
    visibleFeedbackModal: false,
  });

  return (
    <div
      className="table-responsive">
      <table
        className="table table-hover shadow"
        style={{ display: 'block', maxHeight: `${500}px` }}>
        {/* HEAD */}
        <thead className="kt-datatable__head">
          <tr className="kt-datatable__row" style={{ left: `${0}px` }}>
            {headers.map((value, index) => {
              const { name, width } = value;
              return (
                <th
                  key={index.toString()}
                  className="text-center"
                  style={{ width }}>
                  <span>{name}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        {/* BODY */}
        <tbody
          className="kt-datatable__body ps ps--active-y"
          style={{ maxHeight: `${447}px` }}>
          {data.map((element, index) => {
            return (
              <tr
                className="kt-datatable__row"
                style={{ left: `${0}px` }}
                key={index.toString()}>
                <td className="kt-datatable__cell text-nowrap">
                  <div className="kt-user-card-v2">
                    <div className="kt-user-card-v2__pic">
                      <img src={element.course.imageURL} style={{ borderRadius: 0 }} alt="" />
                    </div>
                    <div className="kt-user-card-v2__details">
                      <Link
                        to={`${PATH.COURSE_DETAIL}/${element.course._id}`}
                        class="kt-user-card-v2__name">
                        {element.course.name}
                      </Link>
                    </div>
                  </div>
                </td>

                <td className="kt-datatable__cell text-center">
                  <span className="kt-font-bold">
                    {element.invoice.totalPrice}
                  </span>
                </td>

                <td className="kt-datatable__cell text-center text-nowrap">
                  <span className="kt-font-bold">{element.invoice.payDay.substr(0, 10)}</span>
                </td>

                <td className="kt-datatable__cell">
                  <span className="kt-font-bold">
                    {element.course.duration}
                  </span>
                </td>

                <td className="kt-datatable__cell text-center">
                  <span className="kt-font-bold">
                    {element.course.accessibleDays}
                  </span>
                </td>

                <td className="kt-datatable__cell text-center">
                  <span style={{ width: `${100}px` }}>
                    <span className={`btn btn-bold btn-sm btn-font-sm 
                      ${element.invoice.status === 'success' ? 'btn-label-success' : ''}
                      ${element.invoice.status === 'canceled' ? 'btn-label-danger' : ''}
                      ${element.invoice.status === 'reported' ? 'btn-label-warning' : ''}`}>
                      {capitalize(element.invoice.status)}
                    </span>
                  </span>
                </td>

                <td className="kt-datatable__cell">
                  <div className="kt-user-card-v2">
                    <div className="kt-user-card-v2__pic">
                      <img src={element.course.lecturer.imageURL} style={{ borderRadius: 0 }} alt="" />
                    </div>
                    <div className="kt-user-card-v2__details text-nowrap">
                      <Link
                        to={`${PATH.PROFILE_USER}/${element.course.lecturer._id}`}
                        class="kt-user-card-v2__name">
                        {`${element.course.lecturer.firstName} ${element.course.lecturer.lastName}`}
                      </Link>
                    </div>
                  </div>
                </td>

                <td className="text-center">
                  <button 
                    className="btn btn-info text-center"
                    onClick={() => { 
                      setState({
                        ...state,
                        _idInvoice: element.invoice._id,
                        course: element.course,
                        visibleFeedbackModal: true,
                      });
                    }}
                    style={{ width: 120 }}
                    disabled={element.feedback}>
                    Feedback {element.feedback && <i className="icon-check-1 pr-0 mr-0" />}
                  </button>
                </td>

                {element.invoice.status === 'success' ? (
                  <td className="text-center">
                    <button 
                      className="btn btn-warning"
                      onClick={() => { 
                        setState({
                          ...state,
                          courseName: element.course.name, 
                          visibleReportModal: true,
                        });
                      }}>Report
                    </button>
                  </td>
                ) : <td />}

              </tr>
            );
          })}
        </tbody>
      </table>
      <ReportModal state={state} setState={setState} />
      <FeedbackModal state={state} setState={setState} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    invoiceState: state.invoiceState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateInvoiceAction: bindActionCreators(updateInvoice, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceTable);
