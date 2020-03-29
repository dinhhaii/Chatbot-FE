import React from 'react';

const LecturerCourseDetailCourseForm = () => {
  return (
    <div className="kt-portlet">
      <div className="kt-portlet__head">
        <div className="kt-portlet__head-label">
          <h3 className="kt-portlet__head-title">Textual HTML5 Inputs</h3>
        </div>
      </div>

      <form className="kt-form kt-form--label-right">
        <div className="kt-portlet__body">
          <div className="form-group form-group-last">
            <div className="alert alert-secondary" role="alert">
              <div className="alert-icon">
                <i className="flaticon-warning kt-font-brand" />
              </div>
              <div className="alert-text">
                Here are examples of <code>.form-control</code> applied to each
                textual HTML5 input type:
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="example-text-input"
              className="col-2 col-form-label">
              Text
            </label>
            <div className="col-10">
              <input
                className="form-control"
                type="text"
                value="Artisanal kale"
                id="example-text-input"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="example-search-input"
              className="col-2 col-form-label">
              Search
            </label>
            <div className="col-10">
              <input
                className="form-control"
                type="search"
                value="How do I shoot web"
                id="example-search-input"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="example-email-input"
              className="col-2 col-form-label">
              Email
            </label>
            <div className="col-10">
              <input
                className="form-control"
                type="email"
                value="bootstrap@example.com"
                id="example-email-input"
              />
            </div>
          </div>
        </div>
        <div className="kt-portlet__foot">
          <div className="kt-form__actions">
            <div className="row">
              <div className="col-2" />
              <div className="col-10">
                <button type="reset" className="btn btn-success">
                  Submit
                </button>
                <button type="reset" className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LecturerCourseDetailCourseForm;
