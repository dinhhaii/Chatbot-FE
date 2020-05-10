/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import ReactPlayer from 'react-player';
import LessonsList from '../components/lessons/lessons-list';
import LessonComment from '../components/lessons/lessons-comments';
import { fetchLesson } from '../actions/lesson';
import { fetchCourseByLesson } from '../actions/course';
import { fetchInvoiceList, updateInvoice } from '../actions/invoice';
import { usePrevious } from '../utils/helper';

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
  const prevProps = usePrevious(props);

  useEffect(() => {
    props.fetchCourseByLessonAction(match.params.id);
    props.fetchLessonAction(match.params.id);
    props.fetchInvoiceListAction();
    const urlParams = new URLSearchParams(location.search);
    const tab = urlParams.get('tab');
    if (tab) {
      setTabKey(tab);
    }
  }, [match.params.id, commentState.comment]);

  useEffect(() => {
    if (userState.user && courseState.course && invoiceState.invoiceList.length !== 0 
      && prevProps && prevProps.invoiceState.invoiceList !== invoiceState.invoiceList) {
      const invoices = invoiceState.invoiceList.filter(item => item.user._id === userState.user._id && item.course._id === courseState.course._id);
      if (invoices.length === 0 || !invoices.some(val => val.status === 'success')) {
        history.push('/');
        toast.warn("You haven't registered for this course");
      } else {
        invoices.forEach(invoice => {
          if (invoice.status === 'success') {
            const createdDate = new Date(invoice.createdAt).getTime();
            const accessibleDay = courseState.course.accessibleDays * 86400000;
  
            const date = createdDate + accessibleDay;
            const currentDate = new Date().getTime();
  
            if (currentDate >= date) {
              history.push('/');
              props.updateInvoiceAction({
                _idInvoice: invoice._id,
                status: 'canceled',
              });
              toast.warn('Your course has expired to access.');
            }
          }
        });
      }
    }
  });

  return (
    <div>
      <main>
        <div className="bg-dark position-relative" style={{ height: 75 }}>
          {lessonState.lesson && courseState.course && (
            <div className="bg-white position-absolute" style={{ top: 75, right: 0, left: 0 }}>
              <div className="container-fluid margin_60_35">
                <div className="row">
                  <div className="col-lg-8">
                    <h2>{lessonState.lesson.name}</h2>
                    <div>
                      <ReactPlayer
                        url={lessonState.lesson.lectureURL}
                        controls
                        width="100%"
                        className="react-player-custom border border-success"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <Tabs
                      activeKey={tabKey}
                      onTabClick={key => setTabKey(key)}>
                      <TabPane tab={<span>Lessons</span>} key={TABLESSON.LESSONS}>
                        <LessonsList lessons={courseState.course.lessons} idCourse={courseState.course._id} />
                      </TabPane>
                      <TabPane tab={<span>Comments</span>} key={TABLESSON.COMMENTS}>
                        <LessonComment idLesson={match.params.id} comments={lessonState.lesson.comments} />
                      </TabPane>
                    </Tabs>
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
    userState: state.userState,
    lessonState: state.lessonState,
    courseState: state.courseState,
    invoiceState: state.invoiceState,
    commentState: state.commentState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLessonAction: bindActionCreators(fetchLesson, dispatch),
    fetchCourseByLessonAction: bindActionCreators(fetchCourseByLesson, dispatch),
    fetchInvoiceListAction: bindActionCreators(fetchInvoiceList, dispatch),
    updateInvoiceAction: bindActionCreators(updateInvoice, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LessonDetail));
