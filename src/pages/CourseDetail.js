/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import PreLoader from '../components/home/preloader';
import LessonsList from '../components/lessons/lessons-list';
import CourseReview from '../components/courses/courses-review';
import CourseDescription from '../components/courses/courses-description';
import CoursePurchase from '../components/courses/courses-purchase';

const CourseDetail = () => {
  return (
    <div>
      <PreLoader />
      <main>
        <section id="hero_in" className="courses">
          <div className="wrapper">
            <div className="container">
              <h1 className="fadeInUp">
                <span />
                Online course detail
              </h1>
            </div>
          </div>
        </section>
        {/* /hero_in */}

        <div className="bg_color_1">
          <nav className="secondary_nav sticky_horizontal">
            <div className="container">
              <ul className="clearfix">
                <li>
                  <Link href="#description" class="active">
                    Description
                  </Link>
                </li>
                <li>
                  <Link href="#lessons">Lessons</Link>
                </li>
                <li>
                  <Link href="#reviews">Reviews</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container margin_60_35">
            <div className="row">
              <div className="col-lg-8">
                <CourseDescription />
                <LessonsList />
                <CourseReview />
              </div>
              <CoursePurchase />
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /bg_color_1 */}
      </main>
    </div>
  );
};

export default CourseDetail;
