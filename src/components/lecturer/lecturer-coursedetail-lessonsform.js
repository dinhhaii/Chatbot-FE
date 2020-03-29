/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../utils/css/lecturer-coursedetail-lessonform.css';

const LecturerCourseDetailLessonForm = () => {
  return (
    <div className="kt-portlet" data-ktportlet="true">
      <div className="kt-portlet__head bg-dark">
        <div className="kt-portlet__head-toolbar">
          <div className="kt-portlet__head-group">
            <a
              href="#"
              data-ktportlet-tool="reload"
              className="btn btn-sm btn-icon btn-default btn-pill  btn-icon-md">
              <i className="fa fa-refresh" />
            </a>
            <a
              href="#"
              data-ktportlet-tool="remove"
              className="btn btn-sm btn-icon btn-default btn-pill  btn-icon-md">
              <i className="fa fa-close" />
            </a>
          </div>
        </div>
      </div>
      <div className="kt-portlet__body">
        <form className="kt-form kt-form--label-right">
          <div className="kt-portlet__body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="lessonName">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lessonName"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lessonDescription">Description</label>
                    <textarea
                      className="form-control"
                      id="lessonDescription"
                      placeholder="Enter description"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  Upload video & files here
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LecturerCourseDetailLessonForm;
