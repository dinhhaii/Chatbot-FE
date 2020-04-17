/* eslint-disable no-mixed-operators */
import React from 'react';

const LecturerCourseFinanceSummary = (props) => {
  const { courseLecturerList } = props;
  // Number of Courses, Lessons
  const numberCourses = courseLecturerList.length;
  const numberLessons = courseLecturerList.reduce((accumulator, course) => accumulator + course.lessons.length, 0);
  // Revenue
  const amountInvoiceOfEachCourse = invoices => {
    return invoices.reduce((accumulator, invoice) => accumulator + invoice.totalPrice, 0);
  };
  const amountOfCourses = courseLecturerList.reduce((accumulator, course) => accumulator + amountInvoiceOfEachCourse(course.invoices), 0);
  const revenue = amountOfCourses * 80 / 100;
  // Satisfication Rate
  const totalRatesOfEachCourse = feedback => {
    return feedback.reduce((accumulator, value) => accumulator + value.rate, 0);
  };
  const totalRates = courseLecturerList.reduce((accumulator, course) => accumulator + totalRatesOfEachCourse(course.feedback), 0);
  const totalFeedbackOfEachCourse = courseLecturerList.reduce((accumulator, course) => accumulator + course.feedback.length, 0);
  const satisficationRate = Math.round((totalRates * 100) / (totalFeedbackOfEachCourse * 5));


  return (
    <div className="col-xl-4 col-lg-6 order-lg-1 order-xl-1">
      {/* begin:: Widgets/Finance Summary */}
      <div className="kt-portlet kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Finance Summary</h3>
          </div>
        </div>
        <div className="kt-portlet__body">
          <div className="kt-widget12">
            <div className="kt-widget12__content">
              <div className="kt-widget12__item">
                <div className="kt-widget12__info">
                  <span className="kt-widget12__desc">
                    Courses
                  </span>
                  <span className="kt-widget12__value">{numberCourses}</span>
                </div>
                <div className="kt-widget12__info">
                  <span className="kt-widget12__desc">
                    Lessons
                  </span>
                  <span className="kt-widget12__value">{numberLessons}</span>
                </div>
              </div>
              <div className="kt-widget12__item">
                <div className="kt-widget12__info">
                  <span className="kt-widget12__desc">
                    Amount of Courses
                  </span>
                  <span className="kt-widget12__value">${amountOfCourses}</span>
                </div>
                <div className="kt-widget12__info">
                  <span className="kt-widget12__desc">
                    Revenue
                  </span>
                  <span className="kt-widget12__value">${revenue}</span>
                </div>
              </div>
              <div className="kt-widget12__item">
                <div className="kt-widget12__info">
                  <span className="kt-widget12__desc">Satisfication Rate</span>
                  <span className="kt-widget12__progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar kt-bg-brand"
                        role="progressbar"
                        style={{ width: `${satisficationRate}%` }}
                      />
                    </div>
                    <span className="kt-widget12__stat">{satisficationRate}%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end:: Widgets/Finance Summary */}
    </div>
  );
};

export default LecturerCourseFinanceSummary;
