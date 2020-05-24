/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;

const CourseToolBar = ({ viewMode, setViewMode, filter, setFilter, handleChangeFilter }) => {
  const [timer, setTimer] = useState(null);

  return (
    <div className="filters_listing sticky_horizontal">
      <div className="container">
        <ul className="clearfix">
          {/* <li>
            <div className="switch-field">
              <input type="radio" id="all" name="listing_filter" value="all" />
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
          </li> */}
          <li>
            <Search
              placeholder="Search courses, lecturer, ..."
              value={filter.search}
              onChange={(value) => {
                const _filter = {
                  ...filter,
                  search: value.target.value,
                };

                setFilter(_filter);
                clearInterval(timer);
                setTimer(setInterval(() => handleChangeFilter(_filter)), 500);
              }}
              style={{ width: 400, marginBottom: 5 }}
            />
          </li>
          <li>
            <div className="layout_view">
              <Link
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'active' : ''}>
                <i className="icon-th" />
              </Link>
              <Link
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'active' : ''}>
                <i className="icon-th-list" />
              </Link>
            </div>
          </li>
          <li>
            <div
              className="layout_view"
              onClick={() => {
                setFilter({
                  search: '',
                  subject: [],
                });

                handleChangeFilter();
              }}><i className="icon-arrows-cw" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseToolBar;
