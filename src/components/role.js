import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser } from '../actions/user';
import { setRole } from '../actions/general';

const Role = (props) => {
  const { generalState, userState } = props;
  if (!userState.user && !userState.isLogin) {
    return null;
  }

  if (userState.user && userState.user.role) {
    return null;
  }

  return (
    <div
      className="bg-dark"
      style={{
        display: `${generalState.isSetRole ? 'block' : 'none'}`,
        position: 'fixed',
        zIndex: 996,
        height: `${100}%`,
        width: `${100}%`,
      }}>
      <div style={{ marginTop: `${100}px` }}>
        <h1 className="text-white text-center mb-5">Choose your role</h1>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success mr-5 w-25"
            style={{ height: 50, fontSize: 14 }}
            onClick={() => {
              props.updateUserAction({ ...userState.user, role: 'learner' });
              props.setRoleAction(false);
            }}>
            Learner
          </button>
          <button
            className="btn btn-warning w-25"
            style={{ height: 50, fontSize: 14 }}
            onClick={() => {
              props.updateUserAction({ ...userState.user, role: 'lecturer' });
              props.setRoleAction(false);
            }}>
            Lecturer
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    generalState: state.generalState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserAction: bindActionCreators(updateUser, dispatch),
    setRoleAction: bindActionCreators(setRole, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Role));
