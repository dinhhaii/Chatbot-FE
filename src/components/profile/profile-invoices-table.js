/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PATH } from '../../utils/constant';

const InvoiceTable = (props) => {
  const headers = [
    { name: 'Name', width: `${200}px` },
    { name: 'Price', width: `${80}px` },
    { name: 'Pay Day', width: `${120}px` },
    { name: 'Duration', width: `${80}px` },
    { name: 'Accessible Days', width: `${100}px` },
    { name: 'Status', width: `${100}px` },
    { name: 'Lecturer', width: `${200}px` },
  ];
  const { data } = props; 
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
          {data.map((element, index) => {
            return (
              <tr
                className="kt-datatable__row"
                style={{ left: `${0}px` }}
                key={index.toString()}>
                <td className="kt-datatable__cell" style={{ width: headers[0].width }}>
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

                <td className="kt-datatable__cell" style={{ width: headers[1].width }}>
                  <span className="kt-font-bold">
                    {element.invoice.totalPrice}
                  </span>
                </td>

                <td className="kt-datatable__cell" style={{ width: headers[2].width }}>
                  <span className="kt-font-bold">{element.invoice.payDay.substr(0,10)}</span>
                </td>

                <td className="kt-datatable__cell" style={{ width: headers[3].width }}>
                  <span className="kt-font-bold">
                    {element.course.duration}
                  </span>
                </td>

                <td className="kt-datatable__cell" style={{ width: headers[4].width }}>
                  <span className="kt-font-bold">
                    {element.course.accessibleDays}
                  </span>
                </td>

                <td className="kt-datatable__cell" style={{ width: headers[5].width }}>
                  <span style={{ width: `${100}px` }}>
                    <span className={`btn btn-bold btn-sm btn-font-sm 
                      ${element.invoice.status === 'success' ? 'btn-label-success' : ''}
                      ${element.invoice.status === 'canceled' ? 'btn-label-danger' : ''}
                      ${element.invoice.status === 'reported' ? 'btn-label-warning' : ''}`}>
                      {element.invoice.status}
                    </span>
                  </span>
                </td>

                <td className="kt-datatable__cell" style={{ width: headers[6].width }}>
                  <div className="kt-user-card-v2">
                    <div className="kt-user-card-v2__pic">
                      <img src={element.course.lecturer.imageURL} style={{ borderRadius: 0 }} alt="" />
                    </div>
                    <div className="kt-user-card-v2__details">
                      <Link
                        to={`${PATH.PROFILE_USER}/${element.course.lecturer._id}`}
                        class="kt-user-card-v2__name">
                        {`${element.course.lecturer.firstName} ${element.course.lecturer.lastName}`}
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
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

export default connect(mapStateToProps, null)(InvoiceTable);
