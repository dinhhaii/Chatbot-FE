/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import ReactPlayer from 'react-player';
import LessonsList from '../components/lessons/lessons-list';
import LessonComment from '../components/lessons/lessons-comments';
import LessonLoader from '../components/lessons/lessons-loader';
import { fetchLesson } from '../actions/lesson';
import { fetchCourseByLesson } from '../actions/course';
import { updateInvoice, fetchInvoiceLearnerLessonList } from '../actions/invoice';
import { addProgress, fetchProgress } from '../actions/user';

const { TabPane } = Tabs;
const TABLESSON = {
  LESSONS: 'lessons',
  COMMENTS: 'comments',
};

const LessonDetail = (props) => {
  const {
    match, courseState, lessonState, invoiceState, userState, history, commentState, location,
  } = props;

  const [tabKey, setTabKey] = useState(TABLESSON.LESSONS);
  const [loading, setLoading] = useState(null);
  const player = useRef(null);

  useEffect(() => {
    props.fetchCourseByLessonAction(match.params.id);
    props.fetchLessonAction(match.params.id);
    if (userState.user) {
      props.fetchProgressAction(userState.user._id);
      props.fetchInvoiceLearnerLessonListAction(userState.user._id, match.params.id);
    }
    const urlParams = new URLSearchParams(location.search);
    const tab = urlParams.get('tab');
    if (tab) {
      setTabKey(tab);
    }
  }, [match.params.id, commentState.comment]);


  useEffect(() => {
    if (loading === false && invoiceState.loadingInvoiceLearnerOfLesson === false) {
      if (invoiceState.invoiceLearnerOfLesson.length === 0) {
        history.push('/');
        toast.warn("You haven't registered for this course");
      } else {
        invoiceState.invoiceLearnerOfLesson.forEach(invoice => {
          if (invoice.status === 'success') {
            const createdDate = new Date(invoice.createdAt).getTime();
            const accessibleDay = invoice.course.accessibleDays * 86400000;
    
            const date = createdDate + accessibleDay;
            const currentDate = new Date().getTime();
    
            if (currentDate >= date) {
              props.updateInvoiceAction({
                _idInvoice: invoice._id,
                status: 'canceled',
              });
              toast.warn('Your course has expired to access.');
              history.push('/');
            }
          }
        });
      }
    }
    setLoading(invoiceState.loadingInvoiceLearnerOfLesson);
  }, [invoiceState.loadingInvoiceLearnerOfLesson, loading]);

  if (!(lessonState.lesson && courseState.course)) {
    return null;
  }
  return (
    <div>
      <LessonLoader isLoading={invoiceState.loadingInvoiceList} />
      <main>
        <div className="bg-dark position-relative" style={{ height: 75 }}>
          <div
            className="bg-white position-absolute"
            style={{ top: 75, right: 0, left: 0 }}>
            <div className="container-fluid margin_60_35">
              <div className="row">
                <div className="col-lg-8">
                  <h2>{lessonState.lesson.name}</h2>
                  <div>
                    <ReactPlayer
                      ref={player}
                      onReady={() => {
                        const progress = userState.progress.find(value => value._idLesson === match.params.id);
                        if (progress) {
                          player.current.seekTo(progress.percentage / 100, 'fraction');
                        }
                      }}
                      onPause={() => {
                        const duration = player.current.getDuration();
                        const played = player.current.getCurrentTime();
                        const percentage = played * 100 / duration;
                        props.addProgressAction(userState.user._id, lessonState.lesson._id, percentage);
                      }}
                      url={lessonState.lesson.lectureURL}
                      controls
                      width="100%"
                      className="react-player-custom border border-success"
                    />
                  </div>
                  <div className="mt-5">
                    <h4>Description</h4>
                    <p>{lessonState.lesson.description}</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <Tabs activeKey={tabKey} onTabClick={(key) => setTabKey(key)}>
                    <TabPane tab={<span>Lessons</span>} key={TABLESSON.LESSONS}>
                      <LessonsList
                        lessons={courseState.course.lessons}
                        idCourse={courseState.course._id}
                      />
                    </TabPane>
                    <TabPane
                      tab={<span>Comments</span>}
                      key={TABLESSON.COMMENTS}>
                      <LessonComment
                        idLesson={match.params.id}
                        comments={lessonState.lesson.comments}
                      />
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    lessonState: state.lessonState,
    courseState: state.courseState,
    invoiceState: state.invoiceState,
    generalState: state.generalState,
    commentState: state.commentState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLessonAction: bindActionCreators(fetchLesson, dispatch),
    fetchCourseByLessonAction: bindActionCreators(fetchCourseByLesson, dispatch),
    fetchInvoiceLearnerLessonListAction: bindActionCreators(fetchInvoiceLearnerLessonList, dispatch),
    updateInvoiceAction: bindActionCreators(updateInvoice, dispatch),
    addProgressAction: bindActionCreators(addProgress, dispatch),
    fetchProgressAction: bindActionCreators(fetchProgress, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LessonDetail));
