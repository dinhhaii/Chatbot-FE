/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CoursesGrid from '../components/courses/courses-grid';
import CoursesList from '../components/courses/courses-list';
import '../utils/css/courses.css';
import CourseHelp from '../components/courses/courses-help';
import CourseToolBar from '../components/courses/courses-toolbar';
import CourseFilter from '../components/courses/courses-filter';
import { usePrevious } from '../utils/helper';
import { fetchCourseList } from '../actions/course';

const Course = (props) => {
  const [viewMode, setViewMode] = useState('grid');
  const prevProps = usePrevious(props);
  const { courseState, location } = props;
  const dataPerPage = 8;
  const courses = courseState.courseList.filter(item => item.status === 'approved');

  const [filter, setFilter] = useState({
    search: '',
    subject: [],
    rate: 0,
  });

  const [pagination, setPagination] = useState({
    indexFirst: 0,
    indexLast: 0,
    currentPage: 1,
    totalPage: 1,
    data: [],
  });

  // DID MOUNT
  useEffect(() => {
    props.fetchCourseListAction();
    const urlParams = new URLSearchParams(location.search);
    const searchParam = urlParams.get('search');
    const subjectParam = urlParams.get('subject');
    if (searchParam) {
      setFilter({ ...filter, search: searchParam });
    }
    if (subjectParam) {
      filter.subject.push(subjectParam);
      setFilter({ ...filter });
    }
  }, []);

  // DID UPDATE
  useEffect(() => {
    if (prevProps && prevProps.courseState.courseList !== props.courseState.courseList) {
      setPagination({
        indexFirst: 0,
        indexLast: dataPerPage,
        currentPage: 1,
        totalPage: Math.ceil(courses.length / dataPerPage),
        data: handleFilter(courses, filter).slice(0, dataPerPage),
      });
    }
  });

  const choosePage = (page) => {
    const { indexFirst } = pagination.indexFirst;
    const indexLast = page * dataPerPage;
    const currentPage = page;
    const data = handleFilter(courses, filter).slice(indexFirst, indexLast);

    setPagination({
      ...pagination,
      indexLast,
      currentPage,
      data,
    });
  };

  const handleChangeFilter = (_filter) => {
    const data = handleFilter(courses, _filter).slice(0, dataPerPage);
    
    setPagination({
      ...pagination,
      data,
    });
  };

  const handleFilter = (list, _filter) => {
    return list
      .filter((e) => _filter.subject.length === 0 || _filter.subject.some(name => name === e.subject.name))
      .filter((e) => {
        const search = _filter.search.toLowerCase();
        return search === ''
        || e.name.toLowerCase().includes(search)
        || e.subject.name.toLowerCase().includes(search)
        || e.lecturer.firstName.toLowerCase().includes(search)
        || e.lecturer.lastName.toLowerCase().includes(search)
        || e.description.toLowerCase().includes(search);
      });
  };

  
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

        <CourseToolBar
          viewMode={viewMode}
          setViewMode={setViewMode}
          filter={filter}
          setFilter={setFilter}
          handleChangeFilter={handleChangeFilter}
        />

        <div className="container margin_60_35">
          <div className="row">
            <aside className="col-lg-3" id="sidebar">
              <CourseFilter
                filter={filter}
                setFilter={setFilter}
                handleChangeFilter={handleChangeFilter}
              />
            </aside>

            <div className="col-lg-9">
              {viewMode === 'grid' ? <CoursesGrid data={pagination.data} /> : <CoursesList data={pagination.data} />}
              <p className="text-center">
                <Link
                  onClick={() => choosePage(pagination.currentPage + 1)}
                  className="btn_1 rounded add_top_30">
                  Load more
                </Link>
              </p>
            </div>
          </div>
        </div>
        <CourseHelp />
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courseState: state.courseState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourseListAction: bindActionCreators(fetchCourseList, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Course));
