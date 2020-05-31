/* eslint-disable object-curly-newline */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Badge } from 'antd';
import { PATH } from '../../utils/constant';
import { showSearchBar } from '../../actions/general';
import Menu from './menu';

const Header = (props) => {
  const { userState, cartState, chatState } = props;
  const [isDisplayedMenu, setIsDisplayedMenu] = useState(false);

  const showMenuContent = () => {
    setIsDisplayedMenu(!isDisplayedMenu);
  };

  return (
    <div>
      <header
        style={{ zIndex: 998 }}
        className={isDisplayedMenu
          ? 'header fadeInDown sticky_menu_active'
          : 'header fadeInDown'}>
        <div id="logo">
          <Link to="/">
            <img
              src="/img/logo-text-2.png"
              height={40}
              data-retina="true"
              alt=""
            />
          </Link>
        </div>
        <ul id="top_menu">
          {/* SEARCH  */}
          <li>
            <Link
              style={{ fontSize: `${17}pt` }}
              onClick={props.showSearchBarAction}>
              <i className="icon-search" />
            </Link>
          </li>
          {/* MESSENGER  */}
          {userState.user && chatState.unreadMessages && (
          <li>
            <Badge count={Object.values(chatState.unreadMessages).flat().length}>
              <Link
                to={PATH.CHAT}
                style={{ fontSize: `${17}pt`, marginRight: 10 }}>
                <i className="icon-chat-1" />
              </Link>
            </Badge>
          </li>
          )}
          {/* CART  */}
          {userState.user && userState.user.role === 'learner' && (
            <li>
              <Badge count={cartState.cart ? cartState.cart.items.length : 0} style={{ backgroundColor: '#52c41a' }}>
                <Link
                  to={PATH.CART}
                  style={{ fontSize: `${17}pt`, marginRight: 10 }}>
                  <i className="icon-cart" />
                </Link>
              </Badge>
            </li>  
          )}
          

          {userState.isLogin ? (
            <>
              <li>
                <Link to={PATH.PROFILE} className="d-none d-md-inline d-lg-inline d-xl-inline" style={{ fontFamily: 'Arial', fontSize: `${14}pt` }}>
                  {userState.user
                    ? `${userState.user.firstName} ${userState.user.lastName}`
                    : ''}
                </Link>
              </li>
              <li>
                <Link
                  to={PATH.PROFILE}
                  className="kt-media kt-media--sm mr-2"
                  style={{ verticalAlign: 'middle', height: 30, width: 30 }}>
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
                <Link to={PATH.LOGIN}>
                  Login
                </Link>
              </li>
              <li>
                <Link to={PATH.REGISTER}>
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
    cartState: state.cartState,
    chatState: state.chatState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showSearchBarAction: bindActionCreators(showSearchBar, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
