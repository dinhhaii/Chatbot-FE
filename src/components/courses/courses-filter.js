/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Checkbox, Slider, Rate, Radio, 
} from 'antd';
import 'antd/dist/antd.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSubjectList } from '../../actions/subject';

const CourseFilter = ({
  filter,
  setFilter,
  subjectState,
  fetchSubjectListAction,
  handleChangeFilter,
  history,
}) => {
  useEffect(() => {
    fetchSubjectListAction();
  }, []);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { subject } = filter;
    if (checked) {
      subject.push(value);
    } else {
      subject.splice(subject.indexOf(value), 1);
    }

    setFilter({ ...filter, subject });
    handleChangeFilter({ ...filter, subject });
  };

  return (
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
        <div className="filter_type mt-4">
          <Radio.Group
            onChange={(e) => {
              history.push(`?popular=${e.target.value}`);
            }}>
            <Radio value={0}>Latest Courses</Radio>
            <Radio value={1}>Popular Courses</Radio>
          </Radio.Group>
        </div>
        <div className="filter_type">
          <h6>Subject</h6>
          <ul>
            {subjectState.subjectList.map((value, index) => {
              if (!value.isDelete) {
                return (
                  <li key={index.toString()}>
                    <Checkbox
                      value={value.name}
                      onChange={handleChange}
                      checked={filter.subject.some(
                        (name) => name === value.name,
                      )}>
                      {value.name}
                    </Checkbox>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>

        <div className="filter_type">
          <h6>Price</h6>
          <Slider
            marks={{
              0: '$0',
              50: '$250',
              100: '$500',
            }}
            step={10}
            range
            defaultValue={[0, 100]}
            tipFormatter={value => `$${value * 5}`}
            onAfterChange={(value) => {
              setFilter({ ...filter, price: value });
              handleChangeFilter({ ...filter, price: value });
            }}
          />
        </div>

        <div className="filter_type">
          <h6>Ratings</h6>
          <Radio.Group
            onChange={(e) => {
              setFilter({ ...filter, rate: e.target.value });
              handleChangeFilter({ ...filter, rate: e.target.value });
            }}>
            <Radio value={4.5}>
              <Rate defaultValue={4.5} allowHalf disabled />{' '}
              <i className="icon-up-open" />
            </Radio>
            <Radio value={4}>
              <Rate defaultValue={4} allowHalf disabled />{' '}
              <i className="icon-up-open" />
            </Radio>
            <Radio value={3.5}>
              <Rate defaultValue={3.5} allowHalf disabled />{' '}
              <i className="icon-up-open" />
            </Radio>
            <Radio value={3}>
              <Rate defaultValue={3} allowHalf disabled />{' '}
              <i className="icon-up-open" />
            </Radio>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    subjectState: state.subjectState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubjectListAction: bindActionCreators(fetchSubjectList, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CourseFilter));
