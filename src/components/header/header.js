/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../actions/user';

import Menu from './menu';

const Header = (props) => {
  const [isDisplayedMenu, setIsDisplayedMenu] = useState(false);

  const showMenuContent = () => {
    setIsDisplayedMenu(!isDisplayedMenu);
  };

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
            <button
              className="btn btn-info"
              onClick={() => props.fetchUserAction('dinhhhaii@gmail.com', '1')}>
              Test Button
            </button>
          </li>
          <li>
            <Link to="/auth/login" className="login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/auth/register" className="login">
              Register
            </Link>
          </li>
          <li>
            <Link href="/" className="search-overlay-menu-btn">
              <i className="icon-search" /> Search
            </Link>
          </li>
          <li>
            <span className="kt-media kt-media--sm" style={{verticalAlign: 'middle'}}>
              <img
                src="https://cdn.pixabay.com/photo/2020/03/29/15/35/coronavirus-4981176_1280.png"
                alt=""
              />
            </span>
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

      <Menu isDisplayedMenu={isDisplayedMenu} />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
