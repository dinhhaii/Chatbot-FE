import React from 'react';
import UserCell from './chat-userlist-cell';

const ChatUserList = () => {
  return (
    <div
      className="kt-grid__item kt-app__toggle kt-app__aside kt-app__aside--lg kt-app__aside--fit"
      id="kt_chat_aside">
      {/* begin::Portlet */}
      <div
        className="kt-portlet kt-portlet--last"
        style={{ height: `${100}vh` }}>
        <div className="kt-portlet__body" style={{ height: `${100}%` }}>
          <div className="kt-searchbar" style={{ height: `${15}%` }}>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    className="kt-svg-icon">
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd">
                      <rect x="0" y="0" width="24" height="24" />
                      <path
                        d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                        fill="#000000"
                        fillRule="nonzero"
                        opacity="0.3"
                      />
                      <path
                        d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                        fill="#000000"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className="kt-widget kt-widget--users kt-mt-20" style={{ height: `${85}%` }}>
            <div className="kt-scroll kt-scroll--pull" style={{ height: `${100}%` }}>
              <div className="kt-widget__items" style={{ height: `${100}%`, overflowX: 'auto' }}>
                <UserCell />
                <UserCell />
                <UserCell />
                <UserCell />
                <UserCell />
                <UserCell />
                <UserCell />
                <UserCell />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUserList;
