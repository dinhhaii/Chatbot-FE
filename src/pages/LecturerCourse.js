import React from 'react';
import LecturerCourseList from '../components/lecturer/lecturer-course-courselist';
import LecturerCourseFinanceSummary from '../components/lecturer/lecturer-course-financesummary';
import LecturerCourseNewUsers from '../components/lecturer/lecturer-course-newusers';
import LecturerCourseStatistic from '../components/lecturer/lecturer-cousre-statistic';
import LecturerCourseBestSeller from '../components/lecturer/lecturer-course-bestseller';

const LecturerCourseManagement = () => {
  return (
    <main>
      <section id="hero_in" className="contacts">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp">
              <span />
              Course Management
            </h1>
          </div>
        </div>
      </section>

      <div className="kt-container  kt-grid__item kt-grid__item--fluid mt-4">
        <div className="row">
          <LecturerCourseFinanceSummary />

          <LecturerCourseNewUsers />

          <LecturerCourseStatistic />
        </div>

        <div className="row">
          <LecturerCourseBestSeller />
        </div>
        <div className="row">
          <LecturerCourseList />
        </div>
      </div>
    </main>
  );
};

export default LecturerCourseManagement;
