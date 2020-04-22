import React, { useEffect } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AUTH_TOKEN } from '../../utils/constant';
import { fetchUserFailed, setIsNotLogin } from '../../actions/user';

const Logout = (props) => {
  useEffect(() => {
    props.resetUserAction();
    props.setIsNotLogin();
    localStorage.removeItem(AUTH_TOKEN);
  });

  return <Redirect to="/" />;
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetUserAction: bindActionCreators(fetchUserFailed, dispatch),
    setIsNotLogin: bindActionCreators(setIsNotLogin, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Logout));
