/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CoursesGrid from '../components/courses/courses-grid';
import CoursesList from '../components/courses/courses-list';
import CourseHelp from '../components/courses/courses-help';
import CourseToolBar from '../components/courses/courses-toolbar';
import CourseFilter from '../components/courses/courses-filter';
import CourseSuggestion from '../components/courses/courses-suggestion';
import { usePrevious } from '../utils/helper';
import { fetchCourseList } from '../actions/course';
import '../utils/css/courses.css';

const Course = (props) => {
  const [viewMode, setViewMode] = useState('grid');
  const prevProps = usePrevious(props);
  const { courseState, location } = props;
  const dataPerPage = 8;
  const courses = courseState.courseList.filter(item => item.status === 'approved');

  const initFilter = {
    search: '',
    subject: [],
    rate: null,
    popular: 0,
    price: [0, 100],
  };

  const [filter, setFilter] = useState(initFilter);

  const [pagination, setPagination] = useState({
    indexFirst: 0,
    indexLast: 0,
    currentPage: 1,
    totalPage: 1,
    data: [],
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchParam = urlParams.get('search');
    const subjectParam = urlParams.get('subject');
    const popularParam = urlParams.get('popular');
    const priceParam = urlParams.get('price');
    const rateParam = urlParams.get('rate');

    const newFilter = {
      ...filter,
      subject: (subjectParam && [...filter.subject, subjectParam]) || [],
      search: searchParam || '',
      popular: popularParam,
      price: priceParam || [0, 100],
      rate: rateParam || null,
    };
    console.log(newFilter.popular);
    setFilter(newFilter);
    props.fetchCourseListAction(newFilter);
  }, [location.search]);

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
    const { subject, rate, price } = _filter;
    let result = price[0] !== 0 && price[1] !== 100 
      ? list.sort((a, b) => a.price - b.price)
      : list;
    result = rate
      ? result.sort((a,b) => {
        const rateA = a.feedback.reduce((total, num) => total + num.rate, 0) / a.feedback.length;
        const rateB = b.feedback.reduce((total, num) => total + num.rate, 0) / b.feedback.length;
        return rateB - rateA;
      })
      : result;
    return result
      .filter((e) => subject.length === 0 || subject.some(name => name === e.subject.name))
      .filter((e) => e.price >= price[0] * 5 && e.price <= price[1] * 5)
      .filter((e) => {
        if (!rate) {
          return true;
        }
        const rateAverage = e.feedback.reduce((total, num) => total + num.rate, 0) / e.feedback.length;
        return rateAverage >= rate;
      })
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
          initFilter={initFilter}
        />

        <div className="container margin_60_35">
          <div className="row">
            <aside className="col-lg-3" id="sidebar">
              <CourseFilter
                filter={filter}
                setFilter={setFilter}
                handleChangeFilter={handleChangeFilter}
              />
              <CourseSuggestion courses={courses} />
            </aside>

            <div className="col-lg-9">
              {viewMode === 'grid' ? <CoursesGrid data={pagination.data} /> : <CoursesList data={pagination.data} />}
              <p className="text-center">
                <button
                  onClick={() => choosePage(pagination.currentPage + 1)}
                  className="btn_1 rounded add_top_30"
                  disabled={pagination.totalPage === pagination.currentPage}>
                  Load more
                </button>
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
