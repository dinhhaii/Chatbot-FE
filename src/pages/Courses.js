/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'icheck/skins/all.css';
import { Checkbox } from 'react-icheck';
import CoursesGrid from '../components/courses/courses-grid';
import CoursesList from '../components/courses/courses-list';
import '../utils/css/courses.css';

const Course = () => {
  const [state, setState] = useState({ viewMode: 'grid' });

  return (
    <div>
      <main>
        <section id="hero_in" className="courses">
          <div className="wrapper">
            <div className="container">
              <h1 className="fadeInUp">
                <span />
                Online courses
              </h1>
            </div>
          </div>
        </section>
        {/* <!--/hero_in--> */}

        <div className="filters_listing sticky_horizontal">
          <div className="container">
            <ul className="clearfix">
              <li>
                <div className="switch-field">
                  <input
                    type="radio"
                    id="all"
                    name="listing_filter"
                    value="all"
                    checked
                  />
                  <label htmlFor="all">All</label>
                  <input
                    type="radio"
                    id="popular"
                    name="listing_filter"
                    value="popular"
                  />
                  <label htmlFor="popular">Popular</label>
                  <input
                    type="radio"
                    id="latest"
                    name="listing_filter"
                    value="latest"
                  />
                  <label htmlFor="latest">Latest</label>
                </div>
              </li>
              <li>
                <div className="layout_view">
                  <Link
                    onClick={() => setState({ viewMode: 'grid' })}
                    className={state.viewMode === 'grid' ? 'active' : ''}>
                    <i className="icon-th" />
                  </Link>
                  <Link
                    onClick={() => setState({ viewMode: 'list' })}
                    className={state.viewMode === 'list' ? 'active' : ''}>
                    <i className="icon-th-list" />
                  </Link>
                </div>
              </li>
              <li>
                <form>
                  <div id="custom-search-input">
                    <div className="input-group">
                      <input type="text" className="search-query" placeholder="Courses, lecturer, ..." />
                      <input type="submit" className="btn_search" value="Search" />
                    </div>
                  </div>
                </form>
              </li>
            </ul>
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* <!-- /filters --> */}

        <div className="container margin_60_35">
          <div className="row">
            <aside className="col-lg-3" id="sidebar">
              <div id="filters_col">
                <Link
                  data-toggle="collapse"
                  href="#collapseFilters"
                  aria-expanded="false"
                  aria-controls="collapseFilters"
                  id="filters_col_bt">
                  Filters
                </Link>
                <div className="collapse show" id="collapseFilters">
                  <div className="filter_type">
                    <h6>Category</h6>
                    <ul>
                      <li>
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          label=" all"
                        />
                      </li>
                      <li>
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          label=" all"
                        />
                      </li>
                      <li>
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          label=" all"
                        />
                      </li>
                      <li>
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          label=" all"
                        />
                      </li>
                      <li>
                        <Checkbox
                          checkboxClass="icheckbox_square-green"
                          increaseArea="20%"
                          label=" all"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="filter_type">
                    <h6>Rating</h6>
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" className="icheck" />
                          <span className="rating">
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />{' '}
                            <small>(145)</small>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="icheck" />
                          <span className="rating">
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star" /> <small>(25)</small>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="icheck" />
                          <span className="rating">
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star" />
                            <i className="icon_star" /> <small>(68)</small>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="icheck" />
                          <span className="rating">
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" /> <small>(34)</small>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="icheck" />
                          <span className="rating">
                            <i className="icon_star voted" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" /> <small>(10)</small>
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!--/collapse --> */}
              </div>
              {/* <!--/filters col--> */}
            </aside>
            {/* <!-- /aside --> */}

            <div className="col-lg-9">
              {state.viewMode === 'grid' ? <CoursesGrid /> : <CoursesList />}
              <p className="text-center">
                <Link href="#0" class="btn_1 rounded add_top_30">
                  Load more
                </Link>
              </p>
            </div>
            {/* <!-- /col --> */}
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
        <div className="bg_color_1">
          <div className="container margin_60_35">
            <div className="row">
              <div className="col-md-4">
                <Link href="#0" class="boxed_list">
                  <i className="pe-7s-help2" />
                  <h4>Need Help? Contact us</h4>
                  <p>Cum appareat maiestatis interpretaris et, et sit.</p>
                </Link>
              </div>
              <div className="col-md-4">
                <Link href="#0" class="boxed_list">
                  <i className="pe-7s-wallet" />
                  <h4>Payments and Refunds</h4>
                  <p>Qui ea nemore eruditi, magna prima possit eu mei.</p>
                </Link>
              </div>
              <div className="col-md-4">
                <Link href="#0" class="boxed_list">
                  <i className="pe-7s-note2" />
                  <h4>Quality Standards</h4>
                  <p>Hinc vituperata sed ut, pro laudem nonumes ex.</p>
                </Link>
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
      </main>
    </div>
  );
};

export default Course;
