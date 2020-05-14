/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PATH, AUTH_TOKEN } from '../utils/constant';
import { authorizeUser } from '../api/user';
import { setIsLogin, fetchUserSuccess } from '../actions/user';
import { fetchCart } from '../actions/cart';

const checkAuth = async (props) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  try {
    const { data } = await authorizeUser(token);
    if (data) {
      //   const { firstName, lastName, _id } = data;
      //   if (!props.userState.isLogin) {
      //     updateStatusUser(_id);
      //     props.setIsLoginAction();
      //     props.fetchCartAction(_id);
      //     props.fetchUserSuccessAction({ user: data });
      //     toast.success(`Hi, ${firstName} ${lastName}!`);
      //   }
      return true;
    }
    toast.warn('You don\'t have permission to access this site.');
    return false;
  } catch (error) {
    console.log(error);
    toast.warn('Please login to access this site.');
    return false;
  }
};

const AuthRoute = (props) => {
  const [check, setCheck] = useState(true);
  useEffect(() => {
    checkAuth(props).then(result => setCheck(result));
  }, []);

  return check ? <Route {...props} /> : <Redirect to={PATH.LOGIN} />;
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};
  
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserSuccessAction: bindActionCreators(fetchUserSuccess, dispatch),
    setIsLoginAction: bindActionCreators(setIsLogin, dispatch),
    fetchCartAction: bindActionCreators(fetchCart, dispatch),
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);
