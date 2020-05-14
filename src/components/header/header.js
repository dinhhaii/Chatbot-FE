/* eslint-disable object-curly-newline */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import { Badge } from 'antd';
import { fetchUser, setIsLogin, fetchUserSuccess, fetchUserList } from '../../actions/user';
import { AUTH_TOKEN, PATH, FIREBASE_MESSAGE_REF, FIREBASE_STATUS_REF } from '../../utils/constant';
import { authorizeUser } from '../../api/user';
import { showSearchBar, updateUnreadMessages, setStatusUser } from '../../actions/general';
import { fetchCart } from '../../actions/cart';
import { updateStatusUser } from '../../utils/presence';
import firebase from '../../utils/firebase';
import Menu from './menu';

const Header = (props) => {
  const { userState, cartState, generalState } = props;
  const [isDisplayedMenu, setIsDisplayedMenu] = useState(false);
  const database = firebase.database();

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
          const { firstName, lastName, _id } = data;
          props.fetchUserListAction();
          console.log(userState);
          if (!userState.isLogin) {
            updateStatusUser(_id);
            props.setIsLoginAction();
            props.fetchCartAction(_id);
            props.fetchUserSuccessAction({ user: data });
            toast.success(`Hi, ${firstName} ${lastName}!`);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (userState.user) {
      props.fetchCartAction(userState.user._id);
    }
  }, [cartState.updatedCart]);

  useEffect(() => {
    database.ref(FIREBASE_STATUS_REF).on('value', snapshot => {
      props.setStatusUserAction(snapshot.val());
    });

    database.ref(FIREBASE_MESSAGE_REF).on('value', snapshot => {
      const countUnread = {};
      userState.userList.forEach(item => {
        const messages = snapshot.val();
        const keys = Object.keys(messages);

        for (const key of keys) {
          const val = messages[key];
          if (!countUnread[item._id]) {
            countUnread[item._id] = [];
          }
          
          if (val.seen === false && val._idSender === item._id && val._idRecipient === userState.user._id) {
            countUnread[item._id].push(key);
          }
        }
      });
      props.updateUnreadMessageAction(countUnread);
    });
  }, [userState.userList]);

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
              src="/img/logo-text-2.png"
              height={42}
              data-retina="true"
              alt=""
            />
          </Link>
        </div>
        <ul id="top_menu">
          <li>
            <Link
              to="/lesson-detail/5e89eef8e0de0f0643c53f26?tab=comments"
              style={{ fontSize: `${17}pt` }}>
              TEST
            </Link>
          </li>
          {/* SEARCH  */}
          <li>
            <Link
              style={{ fontSize: `${17}pt` }}
              onClick={props.showSearchBarAction}>
              <i className="icon-search" />
            </Link>
          </li>
          {/* MESSENGER  */}
          {userState.user && generalState.unreadMessages && (
          <li>
            <Badge count={Object.values(generalState.unreadMessages).flat().length}>
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
                <Link to={PATH.PROFILE} className="d-none d-md-inline d-lg-inline d-xl-inline" style={{ fontSize: `${14}pt` }}>
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
    generalState: state.generalState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserAction: bindActionCreators(fetchUser, dispatch),
    fetchUserSuccessAction: bindActionCreators(fetchUserSuccess, dispatch),
    setIsLoginAction: bindActionCreators(setIsLogin, dispatch),
    showSearchBarAction: bindActionCreators(showSearchBar, dispatch),
    fetchCartAction: bindActionCreators(fetchCart, dispatch),
    updateUnreadMessageAction: bindActionCreators(updateUnreadMessages, dispatch),
    setStatusUserAction: bindActionCreators(setStatusUser, dispatch),
    fetchUserListAction: bindActionCreators(fetchUserList, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
