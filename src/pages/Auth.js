import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMAGE_URL, AUTH } from '../utils/constant';
import '../utils/css/auth.css';
import Login from '../components/auth/login';
import Register from '../components/auth/register';
import ChangePassword from '../components/auth/change-password';
import ForgotPassword from '../components/auth/forgot-password';

const Auth = ({ routes }) => {
  const [auth, setAuth] = useState(AUTH.LOGIN);
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const type = urlParams.get('type');
    console.log(type);
    if (type) {
      setAuth(type);
    }
  }, [location.search]);

  return (
    <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading">
      <div className="kt-grid kt-grid--ver kt-grid--root">
        <div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v6 kt-login--signin bg-dark" id="kt_login">
          <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile" style={{ marginTop: 72 }}>
            <div className="kt-grid__item  kt-grid__item--order-tablet-and-mobile-2  kt-grid kt-grid--hor kt-login__aside">
              <div className="kt-login__wrapper">
                <div className="kt-login__container">
                  <div className="kt-login__body">
                    <div className="kt-login__logo">
                      <Link to="/">
                        <img
                          src="/img/logo-color.png"
                          style={{ height: 80 }}
                          alt=""
                        />
                      </Link>
                    </div>

                    {auth === AUTH.LOGIN && <Login />}
                    {auth === AUTH.REGISTER && <Register />}
                    {auth === AUTH.FORGOTPASSWORD && <ForgotPassword />}
                    {auth === AUTH.CHANGEPASSWORD && <ChangePassword />}

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
