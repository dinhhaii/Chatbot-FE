/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu';

const Header = () => {
  const [isDisplayedMenu, setIsDisplayedMenu] = useState(false);

  const showMenuContent = () => {
    setIsDisplayedMenu(!isDisplayedMenu);
  };

  return (
    <div>
      <header className={isDisplayedMenu ? 'header fadeInDown sticky_menu_active' : 'header fadeInDown'}>
        <div id="logo">
          <Link to="/">
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
            <div className={isDisplayedMenu ? 'hamburger hamburger--spin is-active' : 'hamburger hamburger--spin'} onClick={showMenuContent}>
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </li>
        </ul>
      </header>

      <Menu isDisplayedMenu={isDisplayedMenu} />
    </div>
  );
};

export default Header;
