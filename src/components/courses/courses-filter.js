/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from 'antd';
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
    setFilter({
      ...filter,
      subject,
    });
    handleChangeFilter();
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
        <div className="filter_type">
          <h6>Subject</h6>
          <ul>
            {subjectState.subjectList.map((value, index) => {
              if (!value.isDelete) {
                return (
                  <li key={index.toString()}>
                    <Checkbox value={value.name} onChange={handleChange}>
                      {value.name}
                    </Checkbox>
                  </li>
                );
              }
              return null;
            })}
          </ul>
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
