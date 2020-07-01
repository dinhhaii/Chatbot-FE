/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Subject from '../components/subject/subjects';
import CourseCarousel from '../components/home/carousel';
import Feature from '../components/home/features';
import Introduction from '../components/home/introduction';
import Feedback from '../components/home/feedback';
import CallSection from '../components/home/call-section';
import { PATH } from '../utils/constant';
import { fetchCourseList } from '../actions/course';
import { fetchSubjectList } from '../actions/subject';
import { fetchInvoiceLearnerList } from '../actions/invoice';

const Home = (props) => {
  useEffect(() => {
    props.fetchCourseListAction();
    props.fetchSubjectListAction();
  }, []);

  const { courseState, subjectState } = props;
  const courseList = courseState.courseList.filter(item => item.status === 'approved');

  return (
    <div>
      <main>
        <Introduction />
        <Feature />

        <div className="container-fluid margin_120_0">
          <div className="main_title_2">
            <span>
              <em />
            </span>
            <h2>New Courses</h2>
            <p>Choose many online video courses with new additions published every month</p>
          </div>
          <CourseCarousel courseList={courseList} />
          <div className="container">
            <p className="btn_home_align">
              <Link to={PATH.COURSES} className="btn_1 rounded">
                View all courses
              </Link>
            </p>
          </div>

          <hr />
        </div>

        <div className="container margin_30_95">
          <div className="main_title_2">
            <span>
              <em />
            </span>
            <h2>Subjects</h2>
            <p />
          </div>
          <Subject subjectList={subjectState.subjectList} courseList={courseList} />
        </div>

        <CallSection />
        <Feedback />
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courseState: state.courseState,
    subjectState: state.subjectState,
    userState: state.userState,
    invoiceState: state.invoiceState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourseListAction: bindActionCreators(fetchCourseList, dispatch),
    fetchSubjectListAction: bindActionCreators(fetchSubjectList, dispatch),
    fetchInvoiceLearnerListAction: bindActionCreators(fetchInvoiceLearnerList, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
