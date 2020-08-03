/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Progress } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { PATH } from '../../utils/constant';
import { fetchProgress } from '../../actions/user';
import { fetchInvoiceLearnerLessonList, updateInvoice } from '../../actions/invoice';
import 'antd/dist/antd.css';

const { Panel } = Collapse;

const LessonsList = (props) => {
  const { lessons, userState, invoiceState } = props;
  const [loading, setLoading] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  
  useEffect(() => {
    if (userState.user && lessons && lessons.length !== 0) {
      props.fetchProgressAction(userState.user._id);
      props.fetchInvoiceLearnerLessonListAction(userState.user._id, lessons[0]._id);
    }
  }, [lessons, userState.user]);

  useEffect(() => {
    setIsRegistered(false);
    if (loading === false && invoiceState.loadingInvoiceLearnerOfLesson === false) {
      if (invoiceState.invoiceLearnerOfLesson.length !== 0) {
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
            } else {
              setIsRegistered(true);
            }
          }
        });
      }
    }
    setLoading(invoiceState.loadingInvoiceLearnerOfLesson);
  }, [invoiceState.loadingInvoiceLearnerOfLesson, loading]);

  return (
    <section id="lessons">
      {lessons && lessons.length === 0 
        ? <p>There are no lessons</p> 
        : (
          <>
            <div className="intro_title">
              <h2>Lessons</h2>
              <ul>
                <li>{lessons && lessons.length} lessons</li>
              </ul>
            </div>
            <div id="accordion_lessons" role="tablist" className="add_bottom_45">
              <Collapse defaultActiveKey={[]}>
                {lessons && lessons.map((value, index) => {
                  const progress = userState.progress.find(item => item._idLesson == value._id);
                  const percentage = progress ? progress.percentage.toFixed(1) : 0;
                  return (
                    <Panel
                      key={index.toString()}
                      header={(
                        <Link to={`${PATH.LESSON_DETAIL}/${value._id}`}>
                          {isRegistered && <Progress type="circle" percent={percentage < 90 ? percentage : 100} width={30} className="mr-3" />}
                          <strong>LESSON {index + 1}: </strong> {value.name}
                        </Link>
                    )}>
                      {value.files.length === 0 ? null : (
                        <div className="card-body p-0">
                          <div className="list_lessons">
                            <ul>
                              {value.files.map((file, i) => {
                                return (
                                  <li key={i.toString()}>
                                    <Link className="video">
                                      {file.name}
                                    </Link>
                                    <span
                                      className="icon-download"
                                      style={{ cursor: 'pointer' }}
                                      onClick={() => {
                                        window.open(file.fileURL, '_blank');
                                      }} />
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      )}
                    </Panel>
                  );
                })}
              </Collapse>
            </div>
          </>
        )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    invoiceState: state.invoiceState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProgressAction: bindActionCreators(fetchProgress, dispatch),
    fetchInvoiceLearnerLessonListAction: bindActionCreators(fetchInvoiceLearnerLessonList, dispatch),
    updateInvoiceAction: bindActionCreators(updateInvoice, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)((LessonsList));
