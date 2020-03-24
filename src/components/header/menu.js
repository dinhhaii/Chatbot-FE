import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ isDisplayedMenu }) => {
  return (
    <div id="main_menu" className={isDisplayedMenu ? 'show' : ''}>
      <div className="container">
        <nav className="version_2">
          <div className="row">
            <div className="col-md-3">
              <h3>Home</h3>
              <ul>
                <li>
                  <Link href="index.html">Home version 1</Link>
                </li>
                <li>
                  <Link href="index-2.html">Home version 2</Link>
                </li>
                <li>
                  <Link href="index-6.html">Home version 3</Link>
                </li>
                <li>
                  <Link href="index-3.html">Home version 4</Link>
                </li>
                <li>
                  <Link href="index-4.html">Home version 5</Link>
                </li>
                <li>
                  <Link href="index-5.html">With Cookie bar (EU law)</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Courses</h3>
              <ul>
                <li>
                  <Link href="courses-grid.html">Courses grid</Link>
                </li>
                <li>
                  <Link href="courses-grid-sidebar.html">
                    Courses grid sidebar
                  </Link>
                </li>
                <li>
                  <Link href="courses-list.html">Courses list</Link>
                </li>
                <li>
                  <Link href="courses-list-sidebar.html">
                    Courses list sidebar
                  </Link>
                </li>
                <li>
                  <Link href="course-detail.html">Course detail</Link>
                </li>
                <li>
                  <Link href="course-detail-2.html">
                    Course detail (working form)
                  </Link>
                </li>
                <li>
                  <Link href="admission.html">Admission wizard</Link>
                </li>
                <li>
                  <Link href="teacher-detail.html">Teacher detail</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Pages</h3>
              <ul>
                <li>
                  <Link href="#0">Menu 1</Link>
                  <span className="badge_info">New</span>
                </li>
                <li>
                  <Link href="about.html">About</Link>
                </li>
                <li>
                  <Link href="blog.html">Blog</Link>
                </li>
                <li>
                  <Link href="login.html">Login</Link>
                </li>
                <li>
                  <Link href="register.html">Register</Link>
                </li>
                <li>
                  <Link href="contacts.html">Contacts</Link>
                </li>
                <li>
                  <Link href="404.html">404 page</Link>
                </li>
                <li>
                  <Link href="agenda-calendar.html">Agenda Calendar</Link>
                </li>
                <li>
                  <Link href="faq.html">Faq</Link>
                </li>
                <li>
                  <Link href="help.html">Help</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Extra pages</h3>
              <ul>
                <li>
                  <Link href="media-gallery.html">Media gallery</Link>
                </li>
                <li>
                  <Link href="cart-1.html">Cart page 1</Link>
                </li>
                <li>
                  <Link href="cart-2.html">Cart page 2</Link>
                </li>
                <li>
                  <Link href="cart-3.html">Cart page 3</Link>
                </li>
                <li>
                  <Link href="pricing-tables.html">
                    Responsive pricing tables
                  </Link>
                </li>
                <li>
                  <Link href="coming_soon/index.html">Coming soon</Link>
                </li>
                <li>
                  <Link href="icon-pack-1.html">Icon pack 1</Link>
                </li>
                <li>
                  <Link href="icon-pack-2.html">Icon pack 2</Link>
                </li>
                <li>
                  <Link href="icon-pack-3.html">Icon pack 3</Link>
                </li>
                <li>
                  <Link href="icon-pack-4.html">Icon pack 4</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- /row --> */}
        </nav>
        <div className="follow_us">
          <ul>
            <li>Follow us</li>
            <li>
              <Link href="#0">
                <i className="ti-facebook" />
              </Link>
            </li>
            <li>
              <Link href="#0">
                <i className="ti-twitter-alt" />
              </Link>
            </li>
            <li>
              <Link href="#0">
                <i className="ti-google" />
              </Link>
            </li>
            <li>
              <Link href="#0">
                <i className="ti-pinterest" />
              </Link>
            </li>
            <li>
              <Link href="#0">
                <i className="ti-instagram" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
