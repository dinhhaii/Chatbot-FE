import React from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import { PATH } from '../../utils/constant';

const Footer = (props) => {
  const location = useLocation();
  const disabled = location.pathname.includes('chat') || location.pathname.includes('lesson-detail') || location.pathname.includes('auth');

  return (
    <footer style={{ display: disabled && 'none' }}>
      <div className="container margin_120_95">
        <div className="row">
          <div className="col-lg-5 col-md-12 p-r-5">
            <Link to="/">
              <img
                src="/img/logo-color-text.png"
                height="80"
                data-retina="true"
                alt=""
              />
            </Link>
            <p>
              Hacademy is a site which supports you on your learning path.
              Here we have over 100 lecturers from the highest ranked universities
              all around the world therefore, you don&apos;t
              have to worry about the quality of courses.
              Do not hesitate to take any course here at Hacademy.
              We truly hope to be parts of your knowledge!
            </p>
            <div className="follow_us">
              <ul>
                <li>Follow us</li>
                <li>
                  <a href="https://www.facebook.com/Hacademy-103199398091895/" rel="noopener noreferrer" target="_blank">
                    <i className="ti-facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ml-lg-auto">
            <h5>Useful links</h5>
            <ul className="links">
              {/* <li>
                <Link to={PATH.LOGIN}>Login</Link>
              </li>
              <li>
                <Link to={PATH.REGISTER}>Register</Link>
              </li> */}
              <li>
                <Link to={PATH.ABOUT}>About</Link>
              </li>
              <li>
                <Link to={PATH.CONTACT}>Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5>Contact with Us</h5>
            <ul className="contacts">
              <li>
                <Link to="/">
                  <i className="ti-mobile" />
                  +84 987-654-321
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="ti-email" />
                  dhtc.kltn@gmail.com
                </Link>
              </li>
            </ul>
            {/* <div id="newsletter">
              <h6>Newsletter</h6>
              <div id="message-newsletter" />
              <form
                method="post"
                action="assets/newsletter.php"
                name="newsletter_form"
                id="newsletter_form"
              >
                <div className="form-group">
                  <input
                    type="email"
                    name="email_newsletter"
                    id="email_newsletter"
                    className="form-control"
                    placeholder="Your email"
                  />
                  <input type="submit" value="Submit" id="submit-newsletter" />
                </div>
              </form>
            </div> */}
          </div>
        </div>
        {/* <!--/row--> */}
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div id="copy">© 2020 DHTC</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default withRouter(Footer);
