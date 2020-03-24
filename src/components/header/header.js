import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu';

const Header = () => {
  return (
    <div>
      <header className="header fadeInDown">
        <div id="logo">
          <Link href="index.html">
            <img
              src="img/logo.png"
              width="149"
              height="42"
              data-retina="true"
              alt=""
            />
          </Link>
        </div>
        <ul id="top_menu">
          <li>
            <Link href="login.html" class="login">
              Login
            </Link>
          </li>
          <li>
            <Link href="#0" class="search-overlay-menu-btn">
              Search
            </Link>
          </li>
          <li className="hidden_tablet">
            <Link href="#0">Buy this template</Link>
          </li>
          <li className="hidden_tablet">
            <Link href="admission.html" class="btn_1 rounded">
              Admission
            </Link>
          </li>
          <li>
            <div className="hamburger hamburger--spin">
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </li>
        </ul>
        {/* <!-- /top_menu --> */}
      </header>
      
      <Menu />
    </div>
  );
};

export default Header;
