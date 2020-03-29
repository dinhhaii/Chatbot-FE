import React from 'react';
import { Link } from 'react-router-dom';

const LecturerCourseNewUsers = () => {
  return (
    <div className="col-xl-4 col-lg-6 order-lg-2 order-xl-1">
      {/* begin:: Widgets/New Users */}
      <div className="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">New Users</h3>
          </div>
          <div className="kt-portlet__head-toolbar">
            <ul
              className="nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-brand"
              role="tablist">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  data-toggle="tab"
                  href="#kt_widget4_tab1_content"
                  role="tab">
                  Today
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_widget4_tab2_content"
                  role="tab">
                  Month
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="kt-portlet__body">
          <div className="tab-content">
            <div className="tab-pane active" id="kt_widget4_tab1_content">
              <div className="kt-widget4">
                <div className="kt-widget4__item">
                  <div className="kt-widget4__pic kt-widget4__pic--pic">
                    <img src="assets/media/users/100_4.jpg" alt="" />
                  </div>
                  <div className="kt-widget4__info">
                    <Link to="/" className="kt-widget4__username">
                      Anna Strong
                    </Link>
                    <p className="kt-widget4__text">
                      Visual Designer,Google Inc
                    </p>
                  </div>
                  <Link to="/" className="btn btn-sm btn-label-brand btn-bold">
                    Follow
                  </Link>
                </div>
                <div className="kt-widget4__item">
                  <div className="kt-widget4__pic kt-widget4__pic--pic">
                    <img src="assets/media/users/100_14.jpg" alt="" />
                  </div>
                  <div className="kt-widget4__info">
                    <Link to="/" className="kt-widget4__username">
                      Milano Esco
                    </Link>
                    <p className="kt-widget4__text">
                      Product Designer, Apple Inc
                    </p>
                  </div>
                  <Link
                    to="/"
                    className="btn btn-sm btn-label-warning btn-bold">
                    Follow
                  </Link>
                </div>
                <div className="kt-widget4__item">
                  <div className="kt-widget4__pic kt-widget4__pic--pic">
                    <img src="assets/media/users/100_11.jpg" alt="" />
                  </div>
                  <div className="kt-widget4__info">
                    <Link to="/" className="kt-widget4__username">
                      Nick Bold
                    </Link>
                    <p className="kt-widget4__text">
                      Web Developer, Facebook Inc
                    </p>
                  </div>
                  <Link to="/" className="btn btn-sm btn-label-danger btn-bold">
                    Follow
                  </Link>
                </div>
                <div className="kt-widget4__item">
                  <div className="kt-widget4__pic kt-widget4__pic--pic">
                    <img src="assets/media/users/100_1.jpg" alt="" />
                  </div>
                  <div className="kt-widget4__info">
                    <Link to="/" className="kt-widget4__username">
                      Wiltor Delton
                    </Link>
                    <p className="kt-widget4__text">
                      Project Manager, Amazon Inc
                    </p>
                  </div>
                  <Link
                    to="/"
                    className="btn btn-sm btn-label-success btn-bold">
                    Follow
                  </Link>
                </div>
                <div className="kt-widget4__item">
                  <div className="kt-widget4__pic kt-widget4__pic--pic">
                    <img src="assets/media/users/100_5.jpg" alt="" />
                  </div>
                  <div className="kt-widget4__info">
                    <Link to="/" className="kt-widget4__username">
                      Nick Stone
                    </Link>
                    <p className="kt-widget4__text">
                      Visual Designer, Github Inc
                    </p>
                  </div>
                  <Link
                    to="/"
                    className="btn btn-sm btn-label-primary btn-bold">
                    Follow
                  </Link>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="kt_widget4_tab2_content">
              <div className="kt-widget4">
                <div className="kt-widget4__item">
                  <div className="kt-widget4__pic kt-widget4__pic--pic">
                    <img src="assets/media/users/100_2.jpg" alt="" />
                  </div>
                  <div className="kt-widget4__info">
                    <Link to="/" className="kt-widget4__username">
                      Kristika Bold
                    </Link>
                    <p className="kt-widget4__text">
                      Product Designer,Apple Inc
                    </p>
                  </div>
                  <Link to="/" className="btn btn-sm btn-label-success">
                    Follow
                  </Link>
                </div>
                <div className="kt-widget4__item">
                  <div className="kt-widget4__pic kt-widget4__pic--pic">
                    <img src="assets/media/users/100_13.jpg" alt="" />
                  </div>
                  <div className="kt-widget4__info">
                    <Link to="/" className="kt-widget4__username">
                      Ron Silk
                    </Link>
                    <p className="kt-widget4__text">
                      Release Manager, Loop Inc
                    </p>
                  </div>
                  <Link to="/" className="btn btn-sm btn-label-brand">
                    Follow
                  </Link>
                </div>
                <div className="kt-widget4__item">
                  <div className="kt-widget4__pic kt-widget4__pic--pic">
                    <img src="assets/media/users/100_9.jpg" alt="" />
                  </div>
                  <div className="kt-widget4__info">
                    <Link to="/" className="kt-widget4__username">
                      Nick Bold
                    </Link>
                    <p className="kt-widget4__text">
                      Web Developer, Facebook Inc
                    </p>
                  </div>
                  <Link to="/" className="btn btn-sm btn-label-danger">
                    Follow
                  </Link>
                </div>
                <div className="kt-widget4__item">
                  <div className="kt-widget4__pic kt-widget4__pic--pic">
                    <img src="assets/media/users/100_2.jpg" alt="" />
                  </div>
                  <div className="kt-widget4__info">
                    <Link to="/" className="kt-widget4__username">
                      Wiltor Delton
                    </Link>
                    <p className="kt-widget4__text">
                      Project Manager, Amazon Inc
                    </p>
                  </div>
                  <Link to="/" className="btn btn-sm btn-label-success">
                    Follow
                  </Link>
                </div>
                <div className="kt-widget4__item">
                  <div className="kt-widget4__pic kt-widget4__pic--pic">
                    <img src="assets/media/users/100_8.jpg" alt="" />
                  </div>
                  <div className="kt-widget4__info">
                    <Link to="/" className="kt-widget4__username">
                      Nick Bold
                    </Link>
                    <p className="kt-widget4__text">
                      Web Developer, Facebook Inc
                    </p>
                  </div>
                  <Link to="/" className="btn btn-sm btn-label-info">
                    Follow
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end:: Widgets/New Users */}
    </div>
  );
};

export default LecturerCourseNewUsers;
