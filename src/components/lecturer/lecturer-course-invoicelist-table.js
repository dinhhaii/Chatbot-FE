/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Rate } from 'antd';
import { PATH } from '../../utils/constant';
import 'antd/dist/antd.css';
import { capitalize } from '../../utils/helper';
import ReportModal from './lecturer-course-invoicelist-report';
import FeedbackModal from './lecturer-course-invoicelist-feedback';

const LecturerInvoiceListTable = (props) => {
  const headers = [
    { name: "Course's Name" },
    { name: 'Rate' },
    { name: 'Price' },
    { name: 'Total' },
    { name: 'Pay Day' },
    { name: 'Duration' },
    { name: 'Accessible Days' },
    { name: 'Status', width: 'auto' },
    { name: '' },
  ];
  const { data } = props;
  const [state, setState] = useState({
    visibleReportModal: false,
    visibleFeedbackModal: false,
  });

  const showTableContent = () => {
    return data.map((invoice, index) => {
      const fb = invoice.feedback.find(item => item._idInvoice === invoice._id);
      const rate = fb ? fb.rate : 0;

      return (
        <tr
          className="kt-datatable__row"
          style={{ left: `${0}px` }}
          key={index.toString()}>
          <td>
            <div className="kt-user-card-v2">
              <div className="kt-user-card-v2__pic">
                <img src={invoice.course.imageURL} style={{ borderRadius: 0, width: '100%' }} alt="" />
              </div>
              <div className="kt-user-card-v2__details">
                <Link
                  to={`${PATH.COURSE_DETAIL}/${invoice.course._id}`}
                  class="kt-user-card-v2__name">
                  {invoice.course.name}
                </Link>
              </div>
            </div>
          </td>
  
          <td className="text-nowrap" style={{ textAlign: 'center' }}>
            <span className="kt-font-bold">
              <Rate defaultValue={rate} disabled />
            </span>
          </td>

          <td style={{ textAlign: 'center' }}>
            <span className="kt-font-bold">
              ${invoice.course.price}
            </span>
          </td>

          <td style={{ textAlign: 'center' }}>
            <span className="kt-font-bold">
              ${invoice.totalPrice}
            </span>
          </td>
  
          <td style={{ textAlign: 'center' }}>
            <span className="kt-font-bold">{invoice.payDay.substr(0, 10)}</span>
          </td>
  
          <td style={{ textAlign: 'center' }}>
            <span className="kt-font-bold">
              {invoice.course.duration}
            </span>
          </td>
  
          <td style={{ textAlign: 'center' }}>
            <span className="kt-font-bold">
              {invoice.course.accessibleDays}
            </span>
          </td>
  
          <td style={{ textAlign: 'center' }}>
            <span style={{ width: `${120}px` }}>
              <span className={`btn btn-bold btn-sm btn-font-sm 
                  ${invoice.status === 'success' ? 'btn-label-success' : ''}
                  ${invoice.status === 'canceled' ? 'btn-label-danger' : ''}
                  ${invoice.status === 'reported' ? 'btn-label-warning' : ''}`}>
                {capitalize(invoice.status)}
              </span>
            </span>
          </td>
          
          <td>
            <button 
              className="btn btn-outline-primary"
              onClick={() => {
                if (invoice.status === 'reported') {
                  setState({
                    ...state, 
                    visibleReportModal: true,
                    courseName: invoice.course.name,
                    reportMsg: invoice.reportMsg, 
                  });
                } else {
                  setState({
                    ...state, 
                    visibleFeedbackModal: true,
                    course: invoice.course,
                    lecturer: invoice.lecturer,
                    feedback: invoice.feedback, 
                  });
                }
              }}
              disabled={invoice.status !== 'reported' && invoice.feedback.length === 0}>
              <i className="icon-eye pr-0" />
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div
      className="table-responsive mb-3">
      <table
        className="table table-hover shadow"
        style={{ maxHeight: 350, height: 350 }}>
        {/* HEAD */}
        <thead className="kt-datatable__head bg-light">
          <tr className="kt-datatable__row" style={{ left: `${0}px` }}>
            {headers.map((value, index) => {
              const { name, width } = value;
              return (
                <th
                  key={index.toString()}
                  scope="col"
                  style={{ width, textAlign: 'center' }}>
                  <span>{name}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        {/* BODY */}
        <tbody
          style={{ maxHeight: `${447}px` }}>
          {showTableContent()}
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

export default connect(mapStateToProps, null)(LecturerInvoiceListTable);
