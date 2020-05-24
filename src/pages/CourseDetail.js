/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import LessonsList from '../components/lessons/lessons-list';
import CourseReview from '../components/courses/courses-review';
import CourseDescription from '../components/courses/courses-description';
import CoursePurchase from '../components/courses/courses-purchase';
import { PATH } from '../utils/constant';
import { capitalize, usePrevious } from '../utils/helper';
import { fetchInvoiceList, updateInvoice } from '../actions/invoice';

const CourseDetail = (props) => {
  const { match, courseState, invoiceState, userState } = props;
  const prevProps = usePrevious(props);

  const [isRegistered, setIsRegistered] = useState(false);
  const course = courseState.courseList.find((e) => e._id === match.params.id);

  useEffect(() => {
    props.fetchInvoiceListAction();
  }, []);

  useEffect(() => {
    if (userState.user && course && invoiceState.invoiceList.length !== 0 
      && prevProps && prevProps.invoiceState.invoiceList !== invoiceState.invoiceList) {
      const invoices = invoiceState.invoiceList.filter(item => item.user._id === userState.user._id && item.course._id === course._id);
        
      if (userState.user !== null && invoices.length !== 0 && invoices.some(val => val.status === 'success')) {
        invoices.forEach(invoice => {
          if (invoice.status === 'success') {
            const createdDate = new Date(invoice.createdAt).getTime();
            const accessibleDay = course.accessibleDays * 86400000;
  
            const date = createdDate + accessibleDay;
            const currentDate = new Date().getTime();
            if (currentDate < date) {
              setIsRegistered(true);
            } else {
              toast.warn('Your course has expired to access.');
              props.updateInvoiceAction({
                _idInvoice: invoice._id,
                status: 'canceled',
              });
            }
          }
        });
      }
    }
  });

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
                  <Link
                    to={`${PATH.PROFILE_USER}/${course.lecturer._id}`}
                    className="font-weight-bold">
                    {`${capitalize(course.lecturer.firstName)} ${capitalize(
                      course.lecturer.lastName,
                    )}`}
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
                <CoursePurchase course={course} isRegistered={isRegistered} />
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
    invoiceState: state.invoiceState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInvoiceListAction: bindActionCreators(fetchInvoiceList, dispatch),
    updateInvoiceAction: bindActionCreators(updateInvoice, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CourseDetail));
