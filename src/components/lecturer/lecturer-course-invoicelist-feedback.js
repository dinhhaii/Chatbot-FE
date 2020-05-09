import React from 'react';
import { Modal, Rate } from 'antd';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import { PATH, IMAGE_URL } from '../../utils/constant';

const FeedbackModal = (props) => {
  const { state, setState } = props;

  return (
    <Modal 
      title="Feedback"
      visible={state.visibleFeedbackModal}
      onOk={() => setState({ ...state, visibleFeedbackModal: false })}
      onCancel={() => setState({ ...state, visibleFeedbackModal: false })}
      okText="Save">
      {state.course && (
        <>
          <h3 className="d-inline mr-2">{state.course.name}</h3>
          <Link to={`${PATH.PROFILE_USER}/${state.lecturer._id}`}>{`${state.lecturer.firstName} ${state.lecturer.lastName}`}</Link>
        </>
      )}
      
      <div className="reviews-container mt-3" style={{ maxHeight: 300, overflow: 'auto' }}>
        {state.feedback && state.feedback.map((value, index) => {
          const user = props.userState.userList.find((e) => e._id === value._idUser);
          return (
            <div className="review-box clearfix" key={index.toString()}>
              <figure className="rev-thumb">
                <img
                  src={user ? user.imageURL : IMAGE_URL.BACKGROUND_1}
                  alt=""
                />
              </figure>
              <div className="rev-content">
                <Rate
                  defaultValue={value.rate}
                  style={{ paddingBottom: 5, fontSize: `${11}pt` }}
                  disabled
                />
                <div className="rev-info">
                  {user
                    ? `${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()} - ${moment(
                      value.createdAt,
                    ).format('LLLL')}`
                    : ''}
                </div>
                <div className="rev-text">
                  <p>{value.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FeedbackModal));
