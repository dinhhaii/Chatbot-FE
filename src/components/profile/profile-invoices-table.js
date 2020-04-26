/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { bindActionCreators } from 'redux';
import { PATH } from '../../utils/constant';
import { updateInvoice } from '../../actions/invoice';
import { capitalize } from '../../utils/helper';

const InvoiceTable = (props) => {
  const headers = [
    { name: 'Name' },
    { name: 'Price' },
    { name: 'Pay Day' },
    { name: 'Duration' },
    { name: 'Accessible Days' },
    { name: 'Status' },
    { name: 'Lecturer' },
    { name: '', width: 200 },
  ];

  const msg = ['The video, audio, image quality of course is low.', 'The content of the course is not as description.', 'This course is not payable.', 'The resources are few and not enough for the whole course.'];
  const { data } = props; 
  const [visibleModal, setVisibleModal] = useState(false);
  const [state, setState] = useState({
    _idInvoice: '',
    reportMsg: '',
    courseName: '',
    disableOther: true,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    if (value === 'other') {
      setState({ 
        ...state,
        disableOther: false,
      });
    } else {
      setState({
        ...state,
        other: true,
        [name]: value,
      });
    }
  };

  const handleReport = () => {
    const invoice = {
      _idInvoice: state._idInvoice,
      reportMsg: state.reportMsg,
      status: 'reported',
    };
    
    props.updateInvoiceAction(invoice);

    setState({
      ...state,
      reportMsg: '',
    });
  };

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
                <td className="kt-datatable__cell">
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

                {element.invoice.status === 'success' && (
                <td className="text-center">
                  <button 
                    className="btn btn-warning"
                    onClick={() => { 
                      setState({
                        ...state,
                        _idInvoice: element.invoice._id,
                        courseName: element.course.name, 
                      });
                      setVisibleModal(true); 
                    }}>Report
                  </button>
                </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal 
        title="Report course"
        visible={visibleModal}
        onOk={() => handleReport()}
        onCancel={() => setVisibleModal(false)}
        okText="Report">
        <h3 className="mb-4">{state.courseName}</h3>
        <form>
          {msg.map((value, index) => {
            return (
              <div className="form-group">
                <input
                  key={index.toString()}
                  id={index.toString()}
                  className="mr-3"
                  type="radio"
                  name="reportMsg"
                  value={value}
                  onChange={handleChange}
                  />
                <label htmlFor={index.toString()}>{value}</label>
              </div>
            );
          })}
          <div className="form-group">
            <input
              className="mr-3"
              type="radio"
              name="reportMsg"
              value="other"
              onChange={handleChange}
            />
            <label htmlFor="other">
              Other:
            </label>
            <div>
              <textarea
                className="form-control"
                type="text"
                name="reportMsg"
                onChange={handleChange}
                disabled={state.disableOther}
              />
            </div>
          </div>
        </form>
      </Modal>
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
