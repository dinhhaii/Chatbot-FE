/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';

const ChatPopup = props => {
  return (
    <div className="modal fade- modal-sticky-bottom-right" id="kt_chat_modal" role="dialog" data-backdrop="false">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="kt-chat">
            <div className="kt-portlet kt-portlet--last">
              <div className="kt-portlet__head">
                <div className="kt-chat__head ">
                  <div className="kt-chat__left">
                    <div className="kt-chat__label">
                      <Link to="/" className="kt-chat__title">Jason Muller</Link>
                      <span className="kt-chat__status">
                        <span className="kt-badge kt-badge--dot kt-badge--success" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="kt-chat__right">
                    <div className="dropdown dropdown-inline">
                      <button type="button" className="btn btn-clean btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="flaticon-more-1" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-md">

                        <ul className="kt-nav">
                          <li className="kt-nav__head">
                            Messaging
                            <i className="flaticon2-information" data-toggle="kt-tooltip" data-placement="right" title="Click to learn more..." />
                          </li>
                          <li className="kt-nav__separator" />
                          <li className="kt-nav__item">
                            <Link to="/" className="kt-nav__link">
                              <i className="kt-nav__link-icon flaticon2-group" />
                              <span className="kt-nav__link-text">New Group</span>
                            </Link>
                          </li>
                          <li className="kt-nav__item">
                            <Link to="/" className="kt-nav__link">
                              <i className="kt-nav__link-icon flaticon2-open-text-book" />
                              <span className="kt-nav__link-text">Contacts</span>
                              <span className="kt-nav__link-badge">
                                <span className="kt-badge kt-badge--brand  kt-badge--rounded-">5</span>
                              </span>
                            </Link>
                          </li>
                          <li className="kt-nav__item">
                            <Link to="/" className="kt-nav__link">
                              <i className="kt-nav__link-icon flaticon2-bell-2" />
                              <span className="kt-nav__link-text">Calls</span>
                            </Link>
                          </li>
                          <li className="kt-nav__item">
                            <Link to="/" className="kt-nav__link">
                              <i className="kt-nav__link-icon flaticon2-dashboard" />
                              <span className="kt-nav__link-text">Settings</span>
                            </Link>
                          </li>
                          <li className="kt-nav__item">
                            <Link to="/" className="kt-nav__link">
                              <i className="kt-nav__link-icon flaticon2-protected" />
                              <span className="kt-nav__link-text">Help</span>
                            </Link>
                          </li>
                          <li className="kt-nav__separator" />
                          <li className="kt-nav__foot">
                            <Link className="btn btn-label-brand btn-bold btn-sm">Upgrade plan</Link>
                            <Link className="btn btn-clean btn-bold btn-sm" data-toggle="kt-tooltip" data-placement="right" title="Click to learn more...">Learn more</Link>
                          </li>
                        </ul>

                      </div>
                    </div>
                    <button type="button" className="btn btn-clean btn-sm btn-icon" data-dismiss="modal">
                      <i className="flaticon2-cross" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="kt-portlet__body">
                <div className="kt-scroll kt-scroll--pull" data-height="410" data-mobile-height="225">
                  <div className="kt-chat__messages kt-chat__messages--solid">
                    <div className="kt-chat__message kt-chat__message--success">
                      <div className="kt-chat__user">
                        <span className="kt-media kt-media--circle kt-media--sm">
                          <img src="assets/media/users/100_12.jpg" alt="" />
                        </span>
                        <Link to="/" className="kt-chat__username">Jason Muller</Link>
                        <span className="kt-chat__datetime">2 Hours</span>
                      </div>
                      <div className="kt-chat__text">
                        How likely are you to recommend our company<br /> to your friends and family?
                      </div>
                    </div>
                    <div className="kt-chat__message kt-chat__message--right kt-chat__message--brand">
                      <div className="kt-chat__user">
                        <span className="kt-chat__datetime">30 Seconds</span>
                        <Link to="/" className="kt-chat__username">You</Link>
                        <span className="kt-media kt-media--circle kt-media--sm">
                          <img src="assets/media/users/300_21.jpg" alt="" />
                        </span>
                      </div>
                      <div className="kt-chat__text">
                        Hey there, we’re just writing to let you know that you’ve<br /> been subscribed to a repository on GitHub.
                      </div>
                    </div>
                    <div className="kt-chat__message kt-chat__message--success">
                      <div className="kt-chat__user">
                        <span className="kt-media kt-media--circle kt-media--sm">
                          <img src="assets/media/users/100_12.jpg" alt="" />
                        </span>
                        <Link to="/" className="kt-chat__username">Jason Muller</Link>
                        <span className="kt-chat__datetime">30 Seconds</span>
                      </div>
                      <div className="kt-chat__text">
                        Ok, Understood!
                      </div>
                    </div>
                    <div className="kt-chat__message kt-chat__message--right kt-chat__message--brand">
                      <div className="kt-chat__user">
                        <span className="kt-chat__datetime">Just Now</span>
                        <Link to="/" className="kt-chat__username">You</Link>
                        <span className="kt-media kt-media--circle kt-media--sm">
                          <img src="assets/media/users/300_21.jpg" alt="" />
                        </span>
                      </div>
                      <div className="kt-chat__text">
                        You’ll receive notifications for all issues, pull requests!
                      </div>
                    </div>
                    <div className="kt-chat__message kt-chat__message--success">
                      <div className="kt-chat__user">
                        <span className="kt-media kt-media--circle kt-media--sm">
                          <img src="assets/media/users/100_12.jpg" alt="" />
                        </span>
                        <Link to="/" className="kt-chat__username">Jason Muller</Link>
                        <span className="kt-chat__datetime">2 Hours</span>
                      </div>
                      <div className="kt-chat__text">
                        You were automatically <b className="kt-font-brand">subscribed</b> <br />because you’ve been given access to the repository
                      </div>
                    </div>
                    <div className="kt-chat__message kt-chat__message--right kt-chat__message--brand">
                      <div className="kt-chat__user">
                        <span className="kt-chat__datetime">30 Seconds</span>
                        <Link to="/" className="kt-chat__username">You</Link>
                        <span className="kt-media kt-media--circle kt-media--sm">
                          <img src="assets/media/users/300_21.jpg" alt="" />
                        </span>
                      </div>
                      <div className="kt-chat__text">
                        You can unwatch this repository immediately <br />by clicking here: <Link to="/" className="kt-font-bold kt-link" />
                      </div>
                    </div>
                    <div className="kt-chat__message kt-chat__message--success">
                      <div className="kt-chat__user">
                        <span className="kt-media kt-media--circle kt-media--sm">
                          <img src="assets/media/users/100_12.jpg" alt="" />
                        </span>
                        <Link to="/" className="kt-chat__username">Jason Muller</Link>
                        <span className="kt-chat__datetime">30 Seconds</span>
                      </div>
                      <div className="kt-chat__text">
                        Ok!
                      </div>
                    </div>
                    <div className="kt-chat__message kt-chat__message--right kt-chat__message--brand">
                      <div className="kt-chat__user">
                        <span className="kt-chat__datetime">Just Now</span>
                        <Link to="/" className="kt-chat__username">You</Link>
                        <span className="kt-media kt-media--circle kt-media--sm">
                          <img src="assets/media/users/300_21.jpg" alt="" />
                        </span>
                      </div>
                      <div className="kt-chat__text">
                        Ok!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kt-portlet__foot">
                <div className="kt-chat__input">
                  <div className="kt-chat__editor">
                    <textarea placeholder="Type here..." style={{ height: 50 }} />
                  </div>
                  <div className="kt-chat__toolbar">
                    <div className="kt_chat__tools">
                      <Link to="/"><i className="flaticon2-link" /></Link>
                      <Link to="/"><i className="flaticon2-photograph" /></Link>
                      <Link to="/"><i className="flaticon2-photo-camera" /></Link>
                    </div>
                    <div className="kt_chat__actions">
                      <button type="button" className="btn btn-brand btn-md  btn-font-sm btn-upper btn-bold kt-chat__reply">reply</button>
                    </div>
                  </div>
                </div>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChatPopup));
