/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line react-hooks/exhaustive-deps
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Category from '../components/categories/categories';
import CourseCarousel from '../components/home/carousel';
import Feature from '../components/home/features';
import Introduction from '../components/home/introduction';
import News from '../components/home/news';
import CallSection from '../components/home/call-section';
import Search from '../components/home/search';
import { fetchCourseList } from '../actions/course';

const Home = (props) => {

  useEffect(() => {
    props.fetchCourseListAction();
  }, []);

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
            <h2>Popular Courses</h2>
            <p />
          </div>
          <CourseCarousel courseList={props.courseState.courseList} />
          <div className="container">
            <p className="btn_home_align">
              <Link to="/auth/login" className="btn_1 rounded">
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
            <h2>Udema Categories Courses</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <Category />
        </div>

        <News />
        <CallSection />
      </main>

      <Search />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courseState: state.courseState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourseListAction: bindActionCreators(fetchCourseList, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
