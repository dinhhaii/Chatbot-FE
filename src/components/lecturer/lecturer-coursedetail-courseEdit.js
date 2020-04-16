/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCourseLecturerList } from '../../actions/course';
import '../../utils/css/lecturer-coursedetail-lessonform.css';
import LecturerCourseDetailCourseList from './lecturer-coursedetail-courseEdit-courseList';
import LecturerCourseDetailCourseInfo from './lecturer-coursedetail-courseEdit-courseInfo';
import { usePrevious } from '../../utils/helper';

const LecturerCourseDetailCourseEdit = (props) => {
  const [select, setSelect] = useState(0);
  const { courseLecturerList } = props.courseState;
  const dataPerPage = 3;
  const prevProps = usePrevious(props);
  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState({
    indexLast: dataPerPage,
    currentPage: 1,
    totalPage: 1,
    data: [],
  });

  useEffect(() => {
    props.fetchCourseLecturerListAction(props.userState.user._id);
  }, [props.lessonState.lesson]);

  useEffect(() => {
    if (prevProps && prevProps.courseState.courseLecturerList !== courseLecturerList) {
      setPagination({
        indexFirst: 0,
        indexLast: dataPerPage,
        currentPage: 1,
        totalPage: Math.ceil(courseLecturerList.length / dataPerPage),
        data: handleFilter(courseLecturerList, search).slice(0, dataPerPage),
      });
    }
  });

  const choosePage = (page) => {
    const indexLast = page * dataPerPage;
    const currentPage = page;
    const data = handleFilter(courseLecturerList, search).slice(0, indexLast);

    setPagination({
      ...pagination,
      indexLast,
      currentPage,
      data,
    });
  };

  const handleChangeFilter = (value) => {
    setSearch(value);
    const data = handleFilter(courseLecturerList, value).slice(0, dataPerPage);
    
    setPagination({
      ...pagination,
      data,
    });
  };

  const handleFilter = (list, value) => {
    return list.filter((e) => {
      if (value === '' || e.name.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }
      return false;
    });
  };
  
  return (
    <div className="row">
      <LecturerCourseDetailCourseList courseLecturerList={pagination.data} setSelect={setSelect} select={select} choosePage={choosePage} currentPage={pagination.currentPage} setSearch={setSearch} handleChangeFilter={handleChangeFilter} />
      <LecturerCourseDetailCourseInfo courseLecturerList={pagination.data} select={select} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courseState: state.courseState,
    userState: state.userState,
    lessonState: state.lessonState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourseLecturerListAction: bindActionCreators(fetchCourseLecturerList, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(LecturerCourseDetailCourseEdit));
