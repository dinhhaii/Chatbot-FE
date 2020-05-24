/* eslint-disable object-curly-newline */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import UserCell from './chat-userlist-cell';
import '../../utils/css/chat.css'; 
import { capitalize, usePrevious } from '../../utils/helper';

const { TabPane } = Tabs;
const TABCONTACT = {
  RECENT: 'recent',
  CONTACTS: 'contacts',
};

const ChatUserList = (props) => {
  const { showAside, setShowAside, message, setMessage, chatState } = props;
  const prevProps = usePrevious(props);
  const [userList, setUserList] = useState(props.userList);
  const [tabKey, setTabKey] = useState(TABCONTACT.RECENT);
  const [timer, setTimer] = useState(null);
  const [search, setSearch] = useState('');
  const recentList = chatState.recentList ? [...chatState.recentList] : null;

  useEffect(() => {
    if (prevProps && prevProps.userList !== props.userList) {
      setUserList(props.userList);
    }
  });

  return (
    <div 
      className={`kt-grid__item kt-app__toggle kt-app__aside kt-app__aside--lg kt-app__aside--fit ${showAside && 'kt-app__aside--on'}`}
      id="kt_chat_aside"
      style={{ zIndex: 100 }}>
      <button className="kt-app__aside-close" id="kt_chat_aside_close" onClick={() => setShowAside(false)}>
        <i className="icon-cancel-5" />
      </button>
      <div className="kt-portlet kt-portlet--last chat-box">
        <div className="kt-portlet__body h-100">
          <div className="kt-searchbar" style={{ height: `${10}%` }}>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="icon-search" />
                </span>
              </div>
              <input
                type="text"
                name="search"
                className="form-control"
                placeholder="Search"
                value={search}
                onChange={e => {
                  const keywords = e.target.value;
                  setSearch(keywords);
                  clearInterval(timer);
                  setTimer(setTimeout(() => {
                    setUserList(props.userList.filter(item => {
                      return keywords === '' || `${item.firstName} ${item.lastName}`.toLowerCase().includes(keywords); 
                    }));
                  }, 500));
                }}
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className="kt-widget kt-widget--users" style={{ height: `${90}%` }}>
            <div className="kt-scroll kt-scroll--pull h-100 overflowY-auto">
              <div className="kt-widget__items h-100">
                <Tabs activeKey={tabKey} onTabClick={(key) => setTabKey(key)}>
                  <TabPane 
                    tab={<span>{capitalize(TABCONTACT.RECENT)}</span>} 
                    key={TABCONTACT.RECENT}>
                    {recentList && recentList.reverse().map((id, index) => {
                      const user = userList.find(item => item._id === id);
                      if (user) {
                        return (
                          <UserCell 
                            key={index.toString()}
                            user={user}
                            message={message}
                            setMessage={setMessage} />
                        );
                      }
                      return null;
                    })}
                  </TabPane>
                  <TabPane
                    tab={<span>{capitalize(TABCONTACT.CONTACTS)}</span>}
                    key={TABCONTACT.CONTACTS}>
                    {userList.map((user, index) => (
                      <UserCell 
                        key={index.toString()}
                        user={user}
                        message={message}
                        setMessage={setMessage} />
                    ))}
                  </TabPane>
                </Tabs>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    chatState: state.chatState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatUserList);
