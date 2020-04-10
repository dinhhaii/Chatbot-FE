/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LessonsList from '../components/lessons/lessons-list';
import CourseReview from '../components/courses/courses-review';
import CourseDescription from '../components/courses/courses-description';
import CoursePurchase from '../components/courses/courses-purchase';
import { PATH } from '../utils/constant';
import { capitalize } from '../utils/helper';

const CourseDetail = (props) => {
  const { match, courseState } = props;
  const course = courseState.courseList.find((e) => e._id === match.params.id);
  return (
    <div>
      {course ? (
        <main>
          <section id="hero_in" className="courses">
            <div className="wrapper">
              <div className="container">
                <h1 className="fadeInUp">
                  <span />
                  {course.name}
                </h1>
                <p>
                  Created by{' '}
                  <Link to={`${PATH.PROFILE_USER}/${course.lecturer._id}`} className="font-weight-bold">
                    {`${capitalize(course.lecturer.firstName)} ${capitalize(course.lecturer.lastName)}`}
                  </Link>
                </p>
              </div>
            </div>
          </section>

          <div className="bg_color_1">
            <nav className="secondary_nav sticky_horizontal" />
            <div className="container margin_60_35">
              <div className="row">
                <div className="col-lg-8">
                  <CourseDescription description={course.description} />
                  <LessonsList lessons={course.lessons} />
                  <CourseReview feedback={course.feedback} />
                </div>
                <CoursePurchase course={course} />
              </div>
            </div>
          </div>
        </main>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    courseState: state.courseState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CourseDetail));
