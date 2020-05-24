/* eslint-disable no-restricted-syntax */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { bindActionCreators } from 'redux';

import { fetchCart } from './actions/cart';
import {
  setConversations,
  setRecipient,
  setUnreadMessages,
  setStatusUser,
  setRecentList,
} from './actions/chat';
import {
  fetchUser,
  setIsLogin,
  fetchUserSuccess,
  fetchUserList,
  setCountUnreadMessage,
} from './actions/user';
import {
  AUTH_TOKEN,
  FIREBASE_MESSAGE_REF,
  FIREBASE_STATUS_REF,
} from './utils/constant';
import { updateStatusUser } from './utils/presence';
import firebase from './utils/firebase';
import routes from './routes/routes';
import { authorizeUser } from './api/user';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Search from './components/search';
import CustomLoader from './components/loader';
import AuthRoute from './components/authRoutes';
// import ChatPopup from './components/chat/chat-popup';
import RouteWithSubRoutes from './components/subRoutes';

import 'react-toastify/dist/ReactToastify.css';

function Hacademy(props) {
  const { userState, cartState, chatState } = props;
  const database = firebase.database();
  const messagesRef = database.ref(FIREBASE_MESSAGE_REF);
  const statusRef = database.ref(FIREBASE_STATUS_REF);

  // AUTHORIZATION
  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN);

    authorizeUser(token)
      .then((response) => {
        const { data } = response;
        if (data) {
          const { firstName, lastName, _id } = data;
          props.fetchUserListAction();

          if (!userState.isLogin && _id) {
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

  // CART
  useEffect(() => {
    if (userState.user) {
      props.fetchCartAction(userState.user._id);
    }
  }, [cartState.updatedCart]);

  // STATUS USER & UNREAD MESSAGES
  useEffect(() => {
    statusRef.on('value', (snapshot) => {
      const statusUser = snapshot.val(); // { idUser: { lastOnline, status }}
      props.setStatusUserAction(statusUser);
    });

    messagesRef.on('value', (snapshot) => {
      const unreadMessages = {}; // { idUser: [Array of unread messages] }
      const recentUsers = new Set();
      const messages = snapshot.val();

      if (messages) {
        if (userState.user) {
          for (const key of Object.keys(messages)) {
            const val = messages[key];
            if (val._idSender === userState.user._id) {
              recentUsers.delete(val._idRecipient);
              recentUsers.add(val._idRecipient);
            } else if (val._idRecipient === userState.user._id) {
              recentUsers.delete(val._idSender);
              recentUsers.add(val._idSender);
            }
          }
        }

        userState.userList.forEach((user) => {
          for (const key of Object.keys(messages)) {
            const val = messages[key];
            if (!unreadMessages[user._id]) {
              unreadMessages[user._id] = [];
            }

            if (
              val.seen === false &&
              val._idSender === user._id &&
              val._idRecipient === userState.user._id
            ) {
              unreadMessages[user._id].push(key);
            }
          }
        });

        props.setUnreadMessagesAction(unreadMessages);
        props.setRecentListAction(recentUsers);
      }
    });
  }, [userState.userList]);

  // CHAT CONVERSATION & COUNT UNREAD MESSAGES
  useEffect(() => {
    messagesRef.on('value', (snapshot) => {
      const messages = snapshot.val();
      if (messages) {
        if (userState.user && chatState.recipient) {
          const conversations = messages
            ? Object.values(messages)
                .map((value) => {
                  return { ...value, id: value.key };
                })
                .filter((messageItem) => {
                  return (
                    (messageItem._idSender === userState.user._id &&
                      messageItem._idRecipient === chatState.recipient._id) ||
                    (messageItem._idRecipient === userState.user._id &&
                      messageItem._idSender === chatState.recipient._id)
                  );
                })
            : [];

          const keys = messages ? Object.keys(messages) : [];
          conversations.forEach((item, index) => {
            item.id = keys[index];
          });

          props.setConversationsAction([...conversations]);
        } else {
          const countUnread = {};
          if (userState.user) {
            userState.userList.forEach((item) => {
              if (item) {
                const count = Object.values(messages).reduce(
                  (initVal, val) =>
                    val._idSender === item._id &&
                    val._idRecipient === userState.user._id
                      ? initVal + 1
                      : initVal,
                  0,
                );
                countUnread[item._id] = count;
              }
            });
          }
          props.setCountUnreadMessagesAction(countUnread);
          props.setConversationsAction([]);
        }
      }
    });
  }, [chatState.recipient, userState.user]);

  return (
    <Router>
      <CustomLoader />
      <Search />
      <Header />
      {/* <ChatPopup /> */}
      <ToastContainer
        position={toast.POSITION.BOTTOM_CENTER}
        style={{ zIndex: 999 }}
      />
      <Switch>
        {routes.map((route, index) => {
          return route.auth ? (
            <AuthRoute
              key={index.toString()}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ) : (
            <RouteWithSubRoutes
              key={index.toString()}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
      <Footer />
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    cartState: state.cartState,
    generalState: state.generalState,
    chatState: state.chatState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserAction: bindActionCreators(fetchUser, dispatch),
    fetchUserSuccessAction: bindActionCreators(fetchUserSuccess, dispatch),
    setIsLoginAction: bindActionCreators(setIsLogin, dispatch),
    fetchCartAction: bindActionCreators(fetchCart, dispatch),
    updateUnreadMessageAction: bindActionCreators(setUnreadMessages, dispatch),
    setStatusUserAction: bindActionCreators(setStatusUser, dispatch),
    fetchUserListAction: bindActionCreators(fetchUserList, dispatch),
    setCountUnreadMessagesAction: bindActionCreators(
      setCountUnreadMessage,
      dispatch,
    ),
    setConversationsAction: bindActionCreators(setConversations, dispatch),
    setRecipientAction: bindActionCreators(setRecipient, dispatch),
    setUnreadMessagesAction: bindActionCreators(setUnreadMessages, dispatch),
    setRecentListAction: bindActionCreators(setRecentList, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hacademy);
