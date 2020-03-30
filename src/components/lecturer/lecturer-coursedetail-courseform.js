import React from 'react';

const LecturerCourseDetailCourseForm = () => {
  return (
    <div className="kt-portlet">
      <div className="kt-portlet__head">
        <div className="kt-portlet__head-label">
          <h3 className="kt-portlet__head-title">Create New Course</h3>
        </div>
      </div>

      <form className="kt-form kt-form--label-right">
        <div className="kt-portlet__body">
          {/* IMAGE */}
          <div className="form-group row">
            <label className="col-lg-2">Course&apos;s Image</label>
            <div className="col-lg-2">
              <div
                className="kt-avatar"
                style={{ marginLeft: `${20}px` }}
                id="kt_user_avatar_2">
                <div
                  className="kt-avatar__holder"
                  style={{
                    backgroundImage:
                      'url("https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449_960_720.png")',
                  }}
                />
                <label
                  className="kt-avatar__upload"
                  data-toggle="kt-tooltip"
                  title=""
                  data-original-title="Change avatar">
                  <i className="fa fa-pen" />
                  <input
                    type="file"
                    name="profile_avatar"
                    accept=".png, .jpg, .jpeg"
                  />
                </label>
                <span
                  className="kt-avatar__cancel"
                  data-toggle="kt-tooltip"
                  title=""
                  data-original-title="Cancel avatar">
                  <i className="fa fa-times" />
                </span>
              </div>
            </div>

            <div className="col-lg-8">
              {/* NAME */}
              <div className="form-group row">
                <label
                  htmlFor="example-text-input"
                  className="col-2 col-form-label">
                  Name
                </label>
                <div className="col-10">
                  <input
                    className="form-control"
                    type="text"
                    id="example-text-input"
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div className="form-group row">
                <label htmlFor="selectSubject" className="col-2 col-form-label">
                  Subject
                </label>
                <div className="col-10">
                  <select
                    className="custom-select form-control"
                    id="selectSubject">
                    <option selected>None</option>
                    <option value="1">Programming</option>
                    <option value="2">Photography</option>
                    <option value="3">Media</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* DURATION */}
          <div className="form-group row">
            <label
              htmlFor="example-text-input"
              className="col-2 col-form-label">
              Duration
            </label>
            <div className="col-10">
              <input
                className="form-control"
                type="text"
                id="example-text-input"
              />
            </div>
          </div>

          {/* PRICE */}
          <div className="form-group row">
            <label
              htmlFor="example-number-input"
              className="col-2 col-form-label">
              Price ($)
            </label>
            <div className="col-4">
              <input
                className="form-control"
                type="number"
                value="20"
                id="example-number-input"
              />
            </div>
            {/* ACCESSIBLE DAYS */}
            <label
              htmlFor="example-number-input"
              className="col-2 col-form-label">
              Accessible Days (days)
            </label>
            <div className="col-4">
              <input
                className="form-control"
                type="number"
                value="90"
                id="example-number-input"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="form-group row">
            <label
              htmlFor="example-search-input"
              className="col-2 col-form-label">
              Description
            </label>
            <div className="col-10">
              <textarea className="form-control" id="example-search-input" />
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
