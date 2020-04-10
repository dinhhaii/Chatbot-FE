/* eslint-disable jsx-a11y/anchor-is-valid */
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
import { showSearchBar } from '../../actions/general';

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
          props.fetchUserSuccessAction({ user: data });
          toast.success(`Hi, ${firstName} ${lastName}!`);
        }
      })
      .catch((error) => {
        console.log(error);
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
              to={`${PATH.COURSE_DETAIL}/5e89e7383d0842056c73a8be`}
              className="btn btn-dark"
              style={{ fontSize: `${17}pt` }}>
              BUTTON TEST NHA
            </Link>
          </li>
          {/* SEARCH  */}
          <li>
            <Link
              className="search-overlay-menu-btn mr-2"
              style={{ fontSize: `${17}pt` }}
              onClick={props.showSearchBarAction}>
              <i className="icon-search" />
            </Link>
          </li>
          {/* CART  */}
          <li>
            <Link
              className="search-overlay-menu-btn"
              style={{ fontSize: `${17}pt`, marginRight: `${20}px` }}
              onClick={props.showSearchBarAction}>
              <i className="icon-cart" />
            </Link>
          </li>

          {userState.isLogin ? (
            <>
              <li>
                <Link to={PATH.PROFILE} style={{ fontSize: `${14}pt` }}>
                  {userState.user
                    ? `${userState.user.firstName} ${userState.user.lastName}`
                    : ''}
                </Link>
              </li>
              <li>
                <Link
                  to={PATH.PROFILE}
                  className="kt-media kt-media--sm"
                  style={{ verticalAlign: 'middle' }}>
                  <img
                    src={userState.user ? userState.user.imageURL : ''}
                    alt=""
                  />
                </Link>
              </li>
            </>
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

      <Menu
        userState={props.userState}
        isDisplayedMenu={isDisplayedMenu}
        showMenuContent={showMenuContent}
      />
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
    showSearchBarAction: bindActionCreators(showSearchBar, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
