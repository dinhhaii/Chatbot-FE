/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../components/categories/categories';
import Carousel from '../components/courses/carousel';
import Feature from '../components/home/features';
import Introduction from '../components/home/introduction';
import News from '../components/home/news';
import CallSection from '../components/home/call-section';
import PreLoader from '../components/home/preloader';
import Footer from '../components/footer/footer';

const Home = () => {
  return (
    <div>
      <PreLoader />

      <main>
        <Introduction />
        <Feature />

        <div className="container-fluid margin_120_0">
          <div className="main_title_2">
            <span><em /></span>
            <h2>Udema Popular Courses</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <Carousel />
          <div className="container">
            <p className="btn_home_align"><Link to="/auth/login" class="btn_1 rounded">View all courses</Link></p>
          </div>

          <hr />
        </div>
        {/* END CAROUSEL */}

        <div className="container margin_30_95">
          <div className="main_title_2">
            <span><em /></span>
            <h2>Udema Categories Courses</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <Category />
        </div>
        {/* END CATEGORIES */}

        <News />
        <CallSection />

      </main>
      {/* END MAIN */}

      <Footer />

      {/* <!-- Search Menu --> */}
      <div className="search-overlay-menu">
        <span className="search-overlay-close"><span className="closebt"><i className="ti-close" /></span></span>
        <form role="search" id="searchform" method="get">
          <input value="" name="q" type="search" placeholder="Search..." />
          <button type="submit">
            <i className="icon_search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
