/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LessonsList from '../components/lessons/lessons-list';
import LessonComment from '../components/lessons/lessons-comments';
import { fetchLesson } from '../actions/lesson';
import { fetchCourseByLesson } from '../actions/course';

const { TabPane } = Tabs;

const LessonDetail = (props) => {
  const { match, courseState, lessonState } = props;

  useEffect(() => {
    props.fetchCourseByLessonAction(match.params.id);
    props.fetchLessonAction(match.params.id);
  }, []);

  return (
    <div>
      <main>
        <div className="bg-dark">
          {lessonState.lesson && courseState.course && (
            <div className="bg-white" style={{ marginTop: `${73}px` }}>
              <div className="container-fluid margin_60_35">
                <div className="row">
                  <div className="col-lg-8">
                    <div>
                      VIDEO HERE
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <Tabs defaultActiveKey="1">
                      <TabPane tab={<span>Lessons</span>} key="1">
                        <LessonsList lessons={courseState.course.lessons} idCourse={courseState.course._id} />
                      </TabPane>
                      <TabPane tab={<span>Comments</span>} key="2">
                        <LessonComment comments={lessonState.lesson.comments} />
                      </TabPane>
                    </Tabs>
                    ,
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lessonState: state.lessonState,
    courseState: state.courseState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLessonAction: bindActionCreators(fetchLesson, dispatch),
    fetchCourseByLessonAction: bindActionCreators(fetchCourseByLesson, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LessonDetail));
