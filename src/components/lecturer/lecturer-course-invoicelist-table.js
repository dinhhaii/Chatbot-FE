/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PATH } from '../../utils/constant';

const LecturerInvoiceListTable = (props) => {
  const headers = [
    { name: "Course's Name", width: `${200}px` },
    { name: 'Price', width: `${80}px` },
    { name: 'Pay Day', width: `${120}px` },
    { name: 'Duration', width: `${80}px` },
    { name: 'Accessible Days', width: `${100}px` },
    { name: 'Status', width: `${100}px` },
  ];
  const { courseLecturerList } = props;
  
  const showTableContent = () => {
    const result = [];

    courseLecturerList.forEach(course => {
      course.invoices.forEach(invoice => {
        result.push(
          <tr
            className="kt-datatable__row"
            style={{ left: `${0}px` }}
            key={invoice._id}>
            <td className="kt-datatable__cell" style={{ width: headers[0].width }}>
              <div className="kt-user-card-v2">
                <div className="kt-user-card-v2__pic">
                  <img src={course.imageURL} alt="" />
                </div>
                <div className="kt-user-card-v2__details">
                  <Link
                    to={`${PATH.COURSE_DETAIL}/${course._id}`}
                    class="kt-user-card-v2__name">
                    {course.name}
                  </Link>
                </div>
              </div>
            </td>
  
            <td className="kt-datatable__cell" style={{ width: headers[1].width }}>
              <span className="kt-font-bold">
                {invoice.totalPrice}
              </span>
            </td>
  
            <td className="kt-datatable__cell" style={{ width: headers[2].width }}>
              <span className="kt-font-bold">{invoice.payDay.substr(0, 10)}</span>
            </td>
  
            <td className="kt-datatable__cell" style={{ width: headers[3].width }}>
              <span className="kt-font-bold">
                {course.duration}
              </span>
            </td>
  
            <td className="kt-datatable__cell" style={{ width: headers[4].width }}>
              <span className="kt-font-bold">
                {course.accessibleDays}
              </span>
            </td>
  
            <td className="kt-datatable__cell" style={{ width: headers[5].width }}>
              <span style={{ width: `${100}px` }}>
                <span className={`btn btn-bold btn-sm btn-font-sm 
                  ${invoice.status === 'success' ? 'btn-label-success' : ''}
                  ${invoice.status === 'canceled' ? 'btn-label-danger' : ''}
                  ${invoice.status === 'reported' ? 'btn-label-warning' : ''}`}>
                  {invoice.status}
                </span>
              </span>
            </td>
            
          </tr>,
        ); 
      }); 
    });
    

    return result;
  };
  return (
    <div
      className="kt-datatable kt-datatable--default kt-datatable--brand kt-datatable--scroll kt-datatable--loaded"
      id="kt_datatable_latest_orders">
      <table
        className="kt-datatable__table"
        style={{ display: 'block', maxHeight: `${500}px` }}>
        {/* HEAD */}
        <thead className="kt-datatable__head">
          <tr className="kt-datatable__row" style={{ left: `${0}px` }}>
            {headers.map((value, index) => {
              const { name, width } = value;
              return (
                <th
                  key={index.toString()}
                  className="kt-datatable__cell kt-datatable__cell--sort"
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
