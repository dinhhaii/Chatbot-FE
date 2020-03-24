/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../components/categories/categories';
import Carousel from '../components/courses/carousel';
import Feature from '../components/features';
import Introduction from '../components/introduction';
import News from '../components/news';
import CallSection from '../components/call-section';
import PreLoader from '../components/preloader';

const Home = () => {
  return (
    <div>
      <PreLoader />
      
      <main>
        <Introduction />
        {/* END INTRODUCTION */}

        <Feature />
        {/* END FEATURES */}

        <div className="container-fluid margin_120_0">
          <div className="main_title_2">
            <span><em /></span>
            <h2>Udema Popular Courses</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>

          <Carousel />

          <div className="container">
            <p className="btn_home_align"><Link href="courses-grid.html" class="btn_1 rounded">View all courses</Link></p>
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
      {/* <!-- /main --> */}

      <footer>
        <div className="container margin_120_95">
          <div className="row">
            <div className="col-lg-5 col-md-12 p-r-5">
              <p><img src="img/logo.png" width="149" height="42" data-retina="true" alt="" /></p>
              <p>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu. Nihil facilisi indoctum an vix, ut delectus expetendis vis.</p>
              <div className="follow_us">
                <ul>
                  <li>Follow us</li>
                  <li><Link href="#0"><i className="ti-facebook" /></Link></li>
                  <li><Link href="#0"><i className="ti-twitter-alt" /></Link></li>
                  <li><Link href="#0"><i className="ti-google" /></Link></li>
                  <li><Link href="#0"><i className="ti-pinterest" /></Link></li>
                  <li><Link href="#0"><i className="ti-instagram" /></Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ml-lg-auto">
              <h5>Useful links</h5>
              <ul className="links">
                <li><Link href="#0">Admission</Link></li>
                <li><Link href="#0">About</Link></li>
                <li><Link href="#0">Login</Link></li>
                <li><Link href="#0">Register</Link></li>
                <li><Link href="#0">News &amp; Events</Link></li>
                <li><Link href="#0">Contacts</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>Contact with Us</h5>
              <ul className="contacts">
                <li>
                  <Link href="tel://61280932400">
                    <i className="ti-mobile" />
                    {' '}
                    + 61 23 8093 3400
                  </Link>
                </li>
                <li>
                  <Link href="mailto:info@udema.com">
                    <i className="ti-email" />
                    {' '}
                    info@udema.com
                  </Link>
                </li>
              </ul>
              <div id="newsletter">
                <h6>Newsletter</h6>
                <div id="message-newsletter" />
                <form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
                  <div className="form-group">
                    <input type="email" name="email_newsletter" id="email_newsletter" className="form-control" placeholder="Your email" />
                    <input type="submit" value="Submit" id="submit-newsletter" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!--/row--> */}
          <hr />
          <div className="row">
            <div className="col-md-8">
              <ul id="additional_links">
                <li><Link href="#0">Terms and conditions</Link></li>
                <li><Link href="#0">Privacy</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <div id="copy">© 2017 Udema</div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!--/footer--> */}

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
