import React from 'react';
import { Modal } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { PATH } from '../../utils/constant';

const ReportModal = (props) => {
  const { state, setState, history } = props;

  return (
    <Modal 
      title={state.courseName}
      visible={state.visibleReportModal}
      onCancel={() => setState({ ...state, visibleReportModal: false })}
      onOk={() => history.push(PATH.CHAT)}
      okText="Chat to learner">
      <h4 className="mb-4">Reason:</h4>
      <p>{state.reportMsg}</p>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReportModal));
