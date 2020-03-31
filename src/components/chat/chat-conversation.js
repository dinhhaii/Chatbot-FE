/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import ReceivedMessageCell from './chat-conversation-receivedMessage';
import SentMessageCell from './chat-conversation-sentMessage';

const Conversation = () => {
  return (
    <div
      className="kt-grid__item kt-grid__item--fluid kt-app__content"
      id="kt_chat_content">
      <div className="kt-chat">
        <div
          className="kt-portlet kt-portlet--head-lg kt-portlet--last"
          style={{ height: `${100}vh` }}>
          <div
            className="kt-portlet__head"
            style={{ maxHeight: `${80}px`, height: `${10}%` }}>
            <div className="kt-chat__head ">
              <div className="kt-chat__left">
                {/* begin:: Aside Mobile Toggle */}
                <button
                  type="button"
                  className="btn btn-clean btn-sm btn-icon btn-icon-md kt-hidden-desktop"
                  id="kt_chat_aside_mobile_toggle">
                  <i className="flaticon2-open-text-book" />
                </button>

                {/* end:: Aside Mobile Toggle */}
                <div className="dropdown dropdown-inline">
                  <button
                    type="button"
                    className="btn btn-clean btn-sm btn-icon btn-icon-md"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <i className="flaticon-more-1" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-fit dropdown-menu-left dropdown-menu-md">
                    {/* begin::Nav */}
                    <ul className="kt-nav">
                      <li className="kt-nav__item">
                        <Link to="/" class="kt-nav__link">
                          <i className="kt-nav__link-icon flaticon2-group" />
                          <span className="kt-nav__link-text">New Group</span>
                        </Link>
                      </li>
                      <li className="kt-nav__item">
                        <Link to="/" class="kt-nav__link">
                          <i className="kt-nav__link-icon flaticon2-open-text-book" />
                          <span className="kt-nav__link-text">Contacts</span>
                        </Link>
                      </li>
                      <li className="kt-nav__item">
                        <Link to="/" class="kt-nav__link">
                          <i className="kt-nav__link-icon flaticon2-rocket-1" />
                          <span className="kt-nav__link-text">Groups</span>
                          <span className="kt-nav__link-badge">
                            <span className="kt-badge kt-badge--brand kt-badge--inline">
                              new
                            </span>
                          </span>
                        </Link>
                      </li>
                      <li className="kt-nav__item">
                        <Link to="/" class="kt-nav__link">
                          <i className="kt-nav__link-icon flaticon2-bell-2" />
                          <span className="kt-nav__link-text">Calls</span>
                        </Link>
                      </li>
                      <li className="kt-nav__item">
                        <Link to="/" class="kt-nav__link">
                          <i className="kt-nav__link-icon flaticon2-dashboard" />
                          <span className="kt-nav__link-text">Settings</span>
                        </Link>
                      </li>
                      <li className="kt-nav__separator" />
                      <li className="kt-nav__item">
                        <Link to="/" class="kt-nav__link">
                          <i className="kt-nav__link-icon flaticon2-protected" />
                          <span className="kt-nav__link-text">Help</span>
                        </Link>
                      </li>
                      <li className="kt-nav__item">
                        <Link to="/" class="kt-nav__link">
                          <i className="kt-nav__link-icon flaticon2-bell-2" />
                          <span className="kt-nav__link-text">Privacy</span>
                        </Link>
                      </li>
                    </ul>

                    {/* end::Nav */}
                  </div>
                </div>
              </div>
              <div className="kt-chat__center">
                <div className="kt-chat__label">
                  <Link to="/" class="kt-chat__title">
                    Jason Muller
                  </Link>
                  <span className="kt-chat__status">
                    <span className="kt-badge kt-badge--dot kt-badge--success" />{' '}
                    Active
                  </span>
                </div>
                <div className="kt-chat__pic kt-hidden">
                  <span
                    className="kt-media kt-media--sm kt-media--circle"
                    data-toggle="kt-tooltip"
                    data-placement="right"
                    title="Jason Muller"
                    data-original-title="Tooltip title">
                    <img src="assets/media/users/300_12.jpg" alt="" />
                  </span>
                  <span
                    className="kt-media kt-media--sm kt-media--circle"
                    data-toggle="kt-tooltip"
                    data-placement="right"
                    title="Nick Bold"
                    data-original-title="Tooltip title">
                    <img src="assets/media/users/300_11.jpg" alt="" />
                  </span>
                  <span
                    className="kt-media kt-media--sm kt-media--circle"
                    data-toggle="kt-tooltip"
                    data-placement="right"
                    title="Milano Esco"
                    data-original-title="Tooltip title">
                    <img src="assets/media/users/100_14.jpg" alt="" />
                  </span>
                  <span
                    className="kt-media kt-media--sm kt-media--circle"
                    data-toggle="kt-tooltip"
                    data-placement="right"
                    title="Teresa Fox"
                    data-original-title="Tooltip title">
                    <img src="assets/media/users/100_4.jpg" alt="" />
                  </span>
                </div>
              </div>
              <div className="kt-chat__right">
                <div className="dropdown dropdown-inline">
                  <button
                    type="button"
                    className="btn btn-clean btn-sm btn-icon btn-icon-md"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <i className="flaticon2-add-1" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-md">
                    {/* begin::Nav */}
                    <ul className="kt-nav">
                      <li className="kt-nav__head">
                        Messaging
                        <i
                          className="flaticon2-information"
                          data-toggle="kt-tooltip"
                          data-placement="right"
                          title="Click to learn more..."
                        />
                      </li>
                      <li className="kt-nav__separator" />
                      <li className="kt-nav__item">
                        <Link to="/" class="kt-nav__link">
                          <i className="kt-nav__link-icon flaticon2-group" />
                          <span className="kt-nav__link-text">New Group</span>
                        </Link>
                      </li>
                      <li className="kt-nav__item">
                        <Link to="/" class="kt-nav__link">
                          <i className="kt-nav__link-icon flaticon2-open-text-book" />
                          <span className="kt-nav__link-text">Contacts</span>
                          <span className="kt-nav__link-badge">
                            <span className="kt-badge kt-badge--brand  kt-badge--rounded-">
                              5
                            </span>
                          </span>
                        </Link>
                      </li>
                      <li className="kt-nav__item">
                        <Link to="/" class="kt-nav__link">
                          <i className="kt-nav__link-icon flaticon2-bell-2" />
                          <span className="kt-nav__link-text">Calls</span>
                        </Link>
                      </li>
                      <li className="kt-nav__item">
                        <Link to="/" class="kt-nav__link">
                          <i className="kt-nav__link-icon flaticon2-dashboard" />
                          <span className="kt-nav__link-text">Settings</span>
                        </Link>
                      </li>
                      <li className="kt-nav__item">
                        <Link to="/" class="kt-nav__link">
                          <i className="kt-nav__link-icon flaticon2-protected" />
                          <span className="kt-nav__link-text">Help</span>
                        </Link>
                      </li>
                      <li className="kt-nav__separator" />
                      <li className="kt-nav__foot">
                        <Link class="btn btn-label-brand btn-bold btn-sm">
                          Upgrade plan
                        </Link>
                        <Link
                          class="btn btn-clean btn-bold btn-sm"
                          data-toggle="kt-tooltip"
                          data-placement="right"
                          title="Click to learn more...">
                          Learn more
                        </Link>
                      </li>
                    </ul>

                    {/* end::Nav */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="kt-portlet__body" style={{ height: `${70}%` }}>
            <div className="kt-chat__messages" style={{ overflowX: 'auto' }}>
              <ReceivedMessageCell />
              <SentMessageCell />
              <ReceivedMessageCell />
              <ReceivedMessageCell />
              <SentMessageCell />
              <ReceivedMessageCell />
              <ReceivedMessageCell />
              <SentMessageCell />
              <ReceivedMessageCell />
            </div>
          </div>
          <div className="kt-portlet__foot" style={{ height: `${20}%` }}>
            <div className="kt-chat__input">
              <div className="kt-chat__editor">
                <textarea
                  style={{ height: `${50}px` }}
                  placeholder="Type here..."
                />
              </div>
              <div className="kt-chat__toolbar">
                <div className="kt_chat__tools">
                  <Link to="/">
                    <i className="flaticon2-link" />
                  </Link>
                  <Link to="/">
                    <i className="flaticon2-photograph" />
                  </Link>
                  <Link to="/">
                    <i className="flaticon2-photo-camera" />
                  </Link>
                </div>
                <div className="kt_chat__actions">
                  <button
                    type="button"
                    className="btn btn-brand btn-md btn-upper btn-bold kt-chat__reply">
                    reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
