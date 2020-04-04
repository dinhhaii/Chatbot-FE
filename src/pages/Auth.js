import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import '../utils/css/Auth.css';

const Auth = ({ routes }) => {
  return (
    <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading">
      <div className="kt-grid kt-grid--ver kt-grid--root">
        <div
          className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v6 kt-login--signin"
          id="kt_login">
          <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">
            <div className="kt-grid__item  kt-grid__item--order-tablet-and-mobile-2  kt-grid kt-grid--hor kt-login__aside">
              <div className="kt-login__wrapper">
                <div className="kt-login__container">
                  <div className="kt-login__body">
                    <div className="kt-login__logo">
                      <Link to="/">
                        <img
                          src="assets/media/company-logos/logo-2.png"
                          alt=""
                        />
                      </Link>
                    </div>

                    <Switch>
                      {routes.map((route, index) => (
                        <Route
                          key={index.toString()}
                          path={route.path}
                          exact={route.exact}
                          render={route.component}
                        />
                      ))}
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="kt-grid__item kt-grid__item--fluid kt-grid__item--center kt-grid kt-grid--ver kt-login__content"
              style={{
                backgroundImage:
                  'url("https://cdn.pixabay.com/photo/2017/06/23/11/49/laptop-2434393_1280.jpg")',
                // 'url("https://cdn.pixabay.com/photo/2016/03/27/22/04/camera-1284459_1280.jpg")',
              }}>
              <div className="kt-login__section">
                <div className="kt-login__block" style={{ color: 'red' }}>
                  <h3 className="kt-login__title">Join Our Community</h3>
                  <div className="kt-login__desc">
                    Study any topic, anytime. Choose from thousands of
                    expert-led courses now.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
