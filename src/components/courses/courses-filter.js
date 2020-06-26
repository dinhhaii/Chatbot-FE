/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    const _filter = { ...filter, subject };
    setFilter(_filter);
    handleChangeFilter(_filter);
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
          <Radio.Group>
            <Radio value="popular">Popular Courses</Radio>
            <Radio value="latest">Latest Courses</Radio>
          </Radio.Group>
        </div>
        <div className="filter_type">
          <h6>Subject</h6>
          <ul>
            {subjectState.subjectList.map((value, index) => {
              if (!value.isDelete) {
                return (
                  <li key={index.toString()}>
                    <Checkbox value={value.name} onChange={handleChange} checked={filter.subject.some(name => name === value.name)}>
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
              0: '$0', 50: '$250', 100: '$500', 
            }}
            defaultValue={[0, 100]}
            step={10}
            range 
            onChange={() => {}} />
        </div>

        <div className="filter_type">
          <h6>Ratings</h6>
          <Radio.Group>
            <Radio value={4.5}><Rate defaultValue={4.5} allowHalf disabled /> <i className="icon-up-open" /></Radio>
            <Radio value={4}><Rate defaultValue={4} allowHalf disabled /> <i className="icon-up-open" /></Radio>
            <Radio value={3.5}><Rate defaultValue={3.5} allowHalf disabled /> <i className="icon-up-open" /></Radio>
            <Radio value={3}><Rate defaultValue={3} allowHalf disabled /> <i className="icon-up-open" /></Radio>
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseFilter);
