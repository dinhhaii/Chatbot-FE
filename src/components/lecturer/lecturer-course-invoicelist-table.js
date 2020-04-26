/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Rate } from 'antd';
import { PATH } from '../../utils/constant';
import 'antd/dist/antd.css';
import { capitalize } from '../../utils/helper';

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
  ];
  const { data } = props;
  
  const showTableContent = () => {
    return data.map((invoice, index) => {
      const rateAverage = Math.round(invoice.feedback.reduce((total, num) => total + num.rate, 0) / invoice.feedback.length);

      return (
        <tr
          className="kt-datatable__row"
          style={{ left: `${0}px` }}
          key={index.toString()}>
          <td>
            <div className="kt-user-card-v2">
              <div className="kt-user-card-v2__pic">
                <img src={invoice.course.imageURL} style={{ borderRadius: 0 }} alt="" />
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
  
          <td style={{ textAlign: 'center' }}>
            <span className="kt-font-bold">
              <Rate defaultValue={rateAverage} disabled />
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
            
        </tr>
      );
    });
  };

  return (
    <div
      className="table-responsive mb-3">
      <table
        className="table table-hover shadow"
        style={{ maxHeight: `${500}px` }}>
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
