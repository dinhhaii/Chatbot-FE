/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LessonsList from '../components/lessons/lessons-list';
import LessonComment from '../components/lessons/lessons-comments';
import { fetchCourse } from '../actions/course';

const { TabPane } = Tabs;

const LessonDetail = (props) => {
  const { match, location, courseState } = props;
  const urlParams = new URLSearchParams(location.search);
  const idCourse = urlParams.get('idCourse');

  useEffect(() => {
    props.fetchCourseAction(idCourse);
  }, []);

  return (
    <div>
      <main>
        <div className="bg-dark">
          {/* <nav className="secondary_nav sticky_horizontal">
            <div className="container">
              <ul className="clearfix">
                <li>
                  <Link href="#description" class="active">
                    Description
                  </Link>
                </li>
                <li>
                  <Link href="#lessons">Lessons</Link>
                </li>
                <li>
                  <Link href="#reviews">Reviews</Link>
                </li>
              </ul>
            </div>
          </nav> */}
          {courseState.course ? (
            <div className="bg-white" style={{ marginTop: `${73}px` }}>
              <div className="container-fluid margin_60_35">
                <div className="row">
                  <div className="col-lg-8">
                    <div>
                      <button
                        onClick={() => {
                          console.log(props.courseState.course);
                        }}>
                        {' '}
                        TEST
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <Tabs defaultActiveKey="1">
                      <TabPane tab={<span>Lessons</span>} key="2">
                        <LessonsList lessons={courseState.course.lessons} idCourse={idCourse}/>
                      </TabPane>
                      <TabPane tab={<span>Comments</span>} key="3">
                        <LessonComment />
                      </TabPane>
                    </Tabs>
                    ,
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>
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
    fetchCourseAction: bindActionCreators(fetchCourse, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LessonDetail));
