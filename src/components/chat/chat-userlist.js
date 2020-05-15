/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import UserCell from './chat-userlist-cell';
import '../../utils/css/chat.css'; 
import { capitalize } from '../../utils/helper';

const { TabPane } = Tabs;
const TABCONTACT = {
  RECENT: 'recent',
  CONTACTS: 'contacts',
};

const ChatUserList = (props) => {
  const { showAside, setShowAside, message, setMessage, userList } = props;
  const [tabKey, setTabKey] = useState(TABCONTACT.RECENT);
  
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
                    <div></div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatUserList);
