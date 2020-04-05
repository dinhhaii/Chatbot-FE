/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import { fetchUser, setIsLogin, fetchUserSuccess } from '../../actions/user';

import Menu from './menu';
import { AUTH_TOKEN, PATH } from '../../utils/constant';
import { authorizeUser } from '../../api/user';

const Header = (props) => {
  const { userState } = props;
  const [isDisplayedMenu, setIsDisplayedMenu] = useState(false);
  const showMenuContent = () => {
    setIsDisplayedMenu(!isDisplayedMenu);
  };

  useEffect(() => {
    // AUTHORIZATION
    const token = localStorage.getItem(AUTH_TOKEN);

    authorizeUser(token)
      .then((response) => {
        const { data } = response;
        if (data) {
          const { firstName, lastName } = data;
          props.setIsLoginAction();
          props.fetchUserSuccessAction(data);
          toast.success(`Hi, ${firstName} ${lastName}!`);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, []);

  return (
    <div>
      <header
        className={
          isDisplayedMenu
            ? 'header fadeInDown sticky_menu_active'
            : 'header fadeInDown'
        }>
        <div id="logo">
          <Link to="/">
            <img
              src="img/logo.png"
              width="149"
              height="42"
              data-retina="true"
              alt=""
            />
          </Link>
        </div>
        <ul id="top_menu">
          <li>
            <Link
              to="/auth/abc"
              className="btn btn-info"
              onClick={() => toast('test')}>
              Test Button
            </Link>
          </li>

          {userState.isLogin ? (
            <li>
              <span
                className="kt-media kt-media--sm"
                style={{ verticalAlign: 'middle' }}>
                <img
                  src="https://cdn.pixabay.com/photo/2020/03/29/15/35/coronavirus-4981176_1280.png"
                  alt=""
                />
              </span>
            </li>
          ) : (
            <>
              <li>
                <Link to={PATH.LOGIN} className="login">
                  Login
                </Link>
              </li>
              <li>
                <Link to={PATH.REGISTER} className="login">
                  Register
                </Link>
              </li>
            </>
          )}
          {/* SEARCH  */}
          <li>
            <Link to="/" className="search-overlay-menu-btn">
              <i className="icon-search" /> Search
            </Link>
          </li>

          <li>
            <div
              className={
                isDisplayedMenu
                  ? 'hamburger hamburger--spin is-active'
                  : 'hamburger hamburger--spin'
              }
              onClick={showMenuContent}>
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </li>
        </ul>
      </header>

      <Menu userState={props.userState} isDisplayedMenu={isDisplayedMenu} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserAction: bindActionCreators(fetchUser, dispatch),
    fetchUserSuccessAction: bindActionCreators(fetchUserSuccess, dispatch),
    setIsLoginAction: bindActionCreators(setIsLogin, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
