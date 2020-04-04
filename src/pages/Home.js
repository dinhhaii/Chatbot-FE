/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../components/categories/categories';
import CourseCarousel from '../components/courses/carousel';
import Feature from '../components/home/features';
import Introduction from '../components/home/introduction';
import News from '../components/home/news';
import CallSection from '../components/home/call-section';
import Search from '../components/home/search';

const Home = () => {
  return (
    <div>
      <main>
        <Introduction />
        <Feature />

        <div className="container-fluid margin_120_0">
          <div className="main_title_2">
            <span><em /></span>
            <h2>Udema Popular Courses</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <CourseCarousel />
          <div className="container">
            <p className="btn_home_align"><Link to="/auth/login" className="btn_1 rounded">View all courses</Link></p>
          </div>

          <hr />
        </div>

        <div className="container margin_30_95">
          <div className="main_title_2">
            <span><em /></span>
            <h2>Udema Categories Courses</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <Category />
        </div>

        <News />
        <CallSection />

      </main>

      <Search />
      
    </div>
  );
};

export default Home;
