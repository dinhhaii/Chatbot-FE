import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../actions/user';
import { PATH, TAB } from '../../utils/constant';

const Menu = ({ isDisplayedMenu, userState, showMenuContent }) => {
  return (
    <div
      id="main_menu"
      className={isDisplayedMenu ? 'show' : ''}
      style={{ fontSize: `${15}pt` }}>
      {userState.user ? (
        <div className="container">
          <div className="row">
            <h2 style={{ color: 'white' }}>
              {`Hi ${userState.user.firstName} ${userState.user.lastName},`}
            </h2>
          </div>
          <nav className="version_2">
            <div className="row">
              <div className="col-md-4">
                <h3>Profile</h3>
                <ul>
                  <li>
                    <Link to={`${PATH.PROFILE}?tab=${TAB.PERSONAL_INFORMATION}`} onClick={showMenuContent}>
                      Information
                    </Link>
                  </li>
                  <li>
                    <Link to={`${PATH.PROFILE}?tab=${TAB.CHANGE_PASSWORD}`} onClick={showMenuContent}>
                      Change Password
                    </Link>
                  </li>
                  {userState.user.role === 'learner' && (
                    <li>
                      <Link to={`${PATH.PROFILE}?tab=${TAB.INVOICES}`} onClick={showMenuContent}>
                        My Invoices
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link
                      to={PATH.LOGOUT}
                      className="btn btn-danger"
                      onClick={showMenuContent}>
                      <i className="icon-logout-1" /> Log Out
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>Courses</h3>
                <ul>
                  {userState.user.role === 'lecturer' && (
                    <>
                      <li>
                        <Link
                          to={`${PATH.LECTURER_COURSE}`}
                          onClick={showMenuContent}>
                          My Courses
                        </Link>
                        <span className="badge_info">Lecturer</span>
                      </li>
                      <li>
                        <Link to={PATH.COURSE_EDIT} onClick={showMenuContent}>
                          Courses Management
                        </Link>
                        <span className="badge_info">Lecturer</span>
                      </li>
                    </>
                  )}

                  <li>
                    <Link to={PATH.COURSES} onClick={showMenuContent}>
                      All Courses
                    </Link>
                  </li>
                  <li>
                    <Link to={PATH.LECTURERS} onClick={showMenuContent}>
                      All Teachers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>UDEMA</h3>
                <ul>
                  <li>
                    <Link to={PATH.CHAT} className="btn btn-info" style={{ opacity: 1 }} onClick={showMenuContent}>
                      <i className="icon-chat-empty" /> Messenger
                    </Link>
                  </li>
                  <li>
                    <Link to={PATH.CONTACT} onClick={showMenuContent}>
                      <i className="icon-contacts" /> Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={showMenuContent}>
                      <i className="icon-puzzle" /> Setting
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={showMenuContent}>
                      <i className="icon-help" /> FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to={PATH.ABOUT} onClick={showMenuContent}>
                      <i className="icon-home" /> About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="follow_us">
            <ul>
              <li>Follow us</li>
              <li>
                <Link to="https://facebook.com">
                  <i className="ti-facebook" />
                </Link>
              </li>
              <li>
                <Link to="https://www.google.com.vn">
                  <i className="ti-google" />
                </Link>
              </li>
              <li>
                <Link to="https://instagram.com">
                  <i className="ti-instagram" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
