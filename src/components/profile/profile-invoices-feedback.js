import React from 'react';
import { Modal, Rate } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { createFeedback } from '../../actions/feedback';
import { PATH } from '../../utils/constant';

const FeedbackModal = (props) => {
  const { state, setState, userState } = props;

  const handleChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleRateChange = value => {
    setState({
      ...state,
      rate: value,
    });
  };

  const handleSubmit = () => {
    if (userState.user) {
      const { rate, content, course, _idInvoice } = state;
      const _idCourse = course._id;
      const _idUser = userState.user._id;
      
      const feedback = {
        _idCourse, _idUser, rate, content, _idInvoice,
      };
      console.log("handleSubmit -> feedback", feedback);
      
      props.createFeedbackAction(feedback);
  
      setState({
        ...state,
        rate: 0,
        content: '',
      });
    }
  };

  return (
    <Modal 
      title="Feedback"
      visible={state.visibleFeedbackModal}
      onOk={() => handleSubmit()}
      onCancel={() => setState({ ...state, visibleFeedbackModal: false })}
      okText="Save">
      {state.course && (
        <>
          <h3>{state.course.name}</h3>
          <Link to={`${PATH.PROFILE_USER}/${state.course.lecturer._id}`}>{`${state.course.lecturer.firstName} ${state.course.lecturer.lastName}`}</Link>
        </>
      )}
      
      <form className="mt-4">
        <div className="form-group">
          <label htmlFor="rate">
            Rate:
          </label>
          <Rate className="ml-5" allowClear defaultValue={0} onChange={handleRateChange} name="rate" id="rate" />
        </div>
        <div className="form-group">
          <label htmlFor="content">
            Content:
          </label>
          <div>
            <textarea
              className="form-control"
              type="text"
              id="content"
              name="content"
              onChange={handleChange}
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
    createFeedbackAction: bindActionCreators(createFeedback, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackModal);
