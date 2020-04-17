/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import LecturerCourseList from '../components/lecturer/lecturer-course-courselist';
import LecturerCourseFinanceSummary from '../components/lecturer/lecturer-course-financesummary';
import LecturerCourseDiscount from '../components/lecturer/lecturer-course-discount';
import LecturerCourseStatistic from '../components/lecturer/lecturer-cousre-statistic';
import LecturerCourseBestSeller from '../components/lecturer/lecturer-course-bestseller';
import { fetchCourseLecturerList } from '../actions/course';

const LecturerCourseManagement = (props) => {
  const { courseState, userState, discountState, history } = props;

  useEffect(() => {
    if (!userState.isLogin || userState.user.role !== 'lecturer') {
      history.push('/');
      toast.warn("You don't have permission to access this site.");
    } else {
      props.fetchCourseLecturerListAction(props.userState.user._id);
    }
  }, [discountState]);

  return (
    <main>
      <section id="hero_in" className="contacts">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp">
              <span />
              Course Management
            </h1>
          </div>
        </div>
      </section>
      {courseState.courseLecturerList && (
        <div className="kt-container  kt-grid__item kt-grid__item--fluid mt-4">
          <div className="row">
            <LecturerCourseFinanceSummary courseLecturerList={courseState.courseLecturerList} />

            <LecturerCourseDiscount courseLecturerList={courseState.courseLecturerList} />

            <LecturerCourseStatistic courseLecturerList={courseState.courseLecturerList} />
          </div>

          <div className="row">
            <LecturerCourseBestSeller courseLecturerList={courseState.courseLecturerList}/>
          </div>
          <div className="row">
            <LecturerCourseList courseLecturerList={courseState.courseLecturerList} />
          </div>
        </div>
      )}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    courseState: state.courseState,
    discoutState: state.discountState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourseLecturerListAction: bindActionCreators(fetchCourseLecturerList, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LecturerCourseManagement));
