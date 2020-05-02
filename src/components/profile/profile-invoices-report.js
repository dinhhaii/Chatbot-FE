import React from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateInvoice } from '../../actions/invoice';

const ReportModal = (props) => {
  const { state, setState } = props;
  const msg = ['The video, audio, image quality of course is low.', 'The content of the course is not as description.', 'This course is not payable.', 'The resources are few and not enough for the whole course.'];

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
    <Modal 
      title="Report course"
      visible={state.visibleReportModal}
      onOk={() => handleReport()}
      onCancel={() => setState({ ...state, visibleReportModal: false })}
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

export default connect(mapStateToProps, mapDispatchToProps)(ReportModal);
