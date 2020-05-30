/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactHtmlParser from 'react-html-parser';
import { fetchUserList } from '../actions/user';
import { PATH } from '../utils/constant';
import LecturerCourseTable from '../components/profile/profileuser-courses-table';

const UserDetail = (props) => {
  useEffect(() => {
    props.fetchUserListAction();
  }, []);

  const { match, userState, history } = props;
  let user = null;
  if (userState.userList) {
    user = props.userState.userList.find((e) => e._id === match.params.id);
  }

  return (
    <main>
      <section id="hero_in" className="general">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp">
              <span />
              User detail
            </h1>
          </div>
        </div>
      </section>
      {user ? (
        <div className="container margin_60_35">
          <div className="row">
            <aside className="col-lg-3" id="sidebar">
              <div className="profile">
                <figure>
                  <img
                    src={user.imageURL}
                    alt=""
                    style={{ width: 150, height: 150 }}
                    className="rounded-circle"
                  />
                </figure>
                <ul className="social_teacher">
                  <li style={{ width: `${100}%` }}>
                    <div
                      className={`badge ${
                        user.role === 'learner'
                          ? 'badge-warning'
                          : 'badge-success'
                      }`}>
                      {user.role.toUpperCase()}
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    Name
                    <span className="float-right">{`${user.firstName} ${user.lastName}`}</span>
                  </li>
                  <li>
                    Email <span className="float-right">{user.email}</span>
                  </li>
                  <li>
                    <div className="btn btn-primary w-100" onClick={() => history.push(PATH.CHAT)}>
                      <i className="icon-chat" />
                      Messages
                    </div>
                  </li>
                </ul>
              </div>
            </aside>

            <div className="col-lg-9">
              <div className="box_teacher">
                <div className="indent_title_in">
                  <i className="pe-7s-user" />
                  <h3>Profile</h3>
                  <p>{`${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}'s bio`}</p>
                </div>
                <div className="wrapper_indent">
                  {ReactHtmlParser(user.bio)}
                </div>
                <hr className="styled_2" />
                {user.role === 'lecturer' ? (
                  <>
                    <div className="indent_title_in">
                      <i className="pe-7s-display1" />
                      <h3>Courses</h3>
                      <p>All lecturer&apos;s courses</p>
                    </div>
                    <LecturerCourseTable user={user} />
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    courseState: state.courseState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserListAction: bindActionCreators(fetchUserList, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(UserDetail));
