/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../utils/css/lecturer-coursedetail-lessonform.css';
import LecturerCourseDetailLessonForm from './lecturer-coursedetail-lessonsform';

const LecturerCourseDetailLesson = () => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="kt-portlet kt-callout kt-callout--danger kt-callout--diagonal-bg">
          <div className="kt-portlet__body">
            <div className="kt-callout__body">
              <div className="kt-callout__content">
                <h3 className="kt-callout__title">Course&apos;s name</h3>
                <p className="kt-callout__desc">Description</p>
              </div>
              <div className="kt-callout__action">
                <button className="btn btn-custom btn-bold btn-upper btn-font-sm  btn-danger">
                  Blocked
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="kt-portlet kt-callout kt-callout--info kt-callout--diagonal-bg">
          <div className="kt-portlet__body">
            <div className="kt-callout__body">
              <div className="kt-callout__content">
                <h3 className="kt-callout__title">Course&apos;s name</h3>
                <p className="kt-callout__desc">Description</p>
              </div>
              <div className="kt-callout__action">
                <button className="btn btn-custom btn-bold btn-upper btn-font-sm  btn-info">
                  Approved
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="kt-portlet kt-callout kt-callout--warning kt-callout--diagonal-bg">
          <div className="kt-portlet__body">
            <div className="kt-callout__body">
              <div className="kt-callout__content">
                <h3 className="kt-callout__title">Course&apos;s name</h3>
                <p className="kt-callout__desc">Description</p>
              </div>
              <div className="kt-callout__action">
                <button className="btn btn-custom btn-bold btn-upper btn-font-sm  btn-warning">
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-8">
        <div className="kt-portlet">
          <div className="kt-portlet__head">
            <div className="kt-portlet__head-label">
              <h2 className="kt-portlet__head-title">Courses name</h2>
            </div>
          </div>

          {/* BODY (Lessons) */}
          <LecturerCourseDetailLessonForm />
          <LecturerCourseDetailLessonForm />
          <LecturerCourseDetailLessonForm />
          {/* END BODY (Lessons) */}

          <div className="kt-portlet__foot">
            <div>
              <button type="submit" className="btn btn-brand">
                Submit
              </button>
              <button type="reset" className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerCourseDetailLesson;
