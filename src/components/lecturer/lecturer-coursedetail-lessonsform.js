/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import '../../utils/css/lecturer-coursedetail-lessonform.css';

const LecturerCourseDetailLessonForm = () => {
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
        <div className="kt-portlet kt-callout kt-callout--warning kt-callout--diagonal-bg" disabled>
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
          <div
            className="kt-portlet"
            data-ktportlet="true"
            id="kt_portlet_tools_5">
            <div className="kt-portlet__head bg-dark">
              <div className="kt-portlet__head-toolbar">
                <div className="kt-portlet__head-group">
                  <a
                    href="#"
                    data-ktportlet-tool="toggle"
                    className="btn btn-sm btn-icon btn-default btn-pill btn-icon-md">
                    <i className="la la-angle-down" />
                  </a>
                  <a
                    href="#"
                    data-ktportlet-tool="reload"
                    className="btn btn-sm btn-icon btn-default btn-pill  btn-icon-md">
                    <i className="la la-refresh" />
                  </a>
                  <a
                    href="#"
                    data-ktportlet-tool="remove"
                    className="btn btn-sm btn-icon btn-default btn-pill  btn-icon-md">
                    <i className="la la-close" />
                  </a>
                </div>
              </div>
            </div>
            <div className="kt-portlet__body">
              <form className="kt-form kt-form--label-right">
                <div className="kt-portlet__body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail2">Update info here</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" />
                    <span className="form-text text-muted">Well never share your email with anyone else.</span>
                  </div>
                </div>
                <div className="kt-portlet__foot">
                  <div className="">
                    <button type="reset" className="btn btn-brand">Submit</button>
                    <button type="reset" className="btn btn-secondary">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerCourseDetailLessonForm;
