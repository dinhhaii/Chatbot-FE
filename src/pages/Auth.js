import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { IMAGE_URL } from '../utils/constant';
import '../utils/css/auth.css';
import RouteWithSubRoutes from '../components/subRoutes';

const Auth = ({ routes }) => {
  return (
    <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading">
      <div className="kt-grid kt-grid--ver kt-grid--root">
        <div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v6 kt-login--signin bg-dark" id="kt_login">
          <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile" style={{ marginTop: 72 }}>
            <div className="kt-grid__item  kt-grid__item--order-tablet-and-mobile-2  kt-grid kt-grid--hor kt-login__aside">
              <div className="kt-login__wrapper">
                <div className="kt-login__container">
                  <div className="kt-login__body">
                    <div className="kt-login__logo" style={{ marginBottom: '2rem' }}>
                      <Link to="/">
                        <img
                          src="/img/logo-color.png"
                          style={{ height: 100 }}
                          alt=""
                        />
                      </Link>
                    </div>

                    <Switch>
                      {routes.map((route, index) => {
                        return (
                          <RouteWithSubRoutes
                            key={index.toString()}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                          />
                        );
                      })}
                    </Switch>

                  </div>
                </div>
              </div>
            </div>
            <div
              className="d-sm-none d-xl-flex d-lg-flex kt-grid__item kt-grid__item--fluid kt-grid__item--center kt-grid kt-grid--ver kt-login__content"
              style={{ backgroundImage: `url("${IMAGE_URL.BACKGROUND_1}")` }}>
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
