import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../actions/user';
import { PATH } from '../../utils/constant';

const Menu = ({ isDisplayedMenu }) => {
  return (
    <div
      id="main_menu"
      className={isDisplayedMenu ? 'show' : ''}
      style={{ fontSize: `${15}pt` }}>
      <div className="container">
        <div className="row">
          <h2 style={{ color: 'white' }}>Hi, Dinh Hai</h2>
        </div>
        <nav className="version_2">
          <div className="row">
            <div className="col-md-4">
              <h3>Profile</h3>
              <ul>
                <li>
                  <Link to={PATH.PROFILE}>Information</Link>
                </li>
                <li>
                  <Link to={PATH.PROFILE}>Change Password</Link>
                </li>
                <li>
                  <Link to={PATH.PROFILE}>My Invoices</Link>
                </li>
                <li>
                  <Link to={PATH.LOGOUT} className="btn btn-danger">
                    <i className="icon-logout-1" /> Log Out
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Courses</h3>
              <ul>
                <li>
                  <Link to={PATH.LECTURER_COURSE}>My Courses</Link>
                </li>
                <li>
                  <Link to={PATH.COURSES}>All Courses</Link>
                </li>
                <li>
                  <Link to={PATH.LECTURERS}>All Teachers</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>UDEMA</h3>
              <ul>
                <li>
                  <Link to={PATH.CONTACT}>
                    <i className="icon-contacts" /> Contact
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="icon-newspaper" /> Blog
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="icon-puzzle" /> Setting
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="icon-help" /> FAQ
                  </Link>
                </li>
                <li>
                  <Link to={PATH.ABOUT}>
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
