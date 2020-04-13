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

const LecturerCourseDetailCourseEdit = (props) => {
  const [select, setSelect] = useState(0);

  useEffect(() => {
    props.fetchCourseLecturerListAction(props.userState.user._id);
  }, []);

  const courseLecturerList = props.courseState.courseLecturerList.filter((e) => !e.isDelete);
  
  return (
    <div className="row">
      <LecturerCourseDetailCourseList courseLecturerList={courseLecturerList} setSelect={setSelect} select={select} />
      <LecturerCourseDetailCourseInfo courseLecturerList={courseLecturerList} select={select} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courseState: state.courseState,
    userState: state.userState,
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
