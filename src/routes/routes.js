import React from 'react';
import { Redirect } from 'react-router-dom';
import { PATH } from '../utils/constant';

import Login from '../components/auth/login';
import Register from '../components/auth/register';
import ForgotPassword from '../components/auth/forgot-password';
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Course from '../pages/Courses';
import CourseDetail from '../pages/CourseDetail';
import About from '../pages/About';
import Contact from '../pages/Contact';
import LecturerCourse from '../pages/LecturerCourse';
import LessonDetail from '../pages/LessonDetail';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import UserDetail from '../pages/UserProfile';
import LecturerCourseDetail from '../pages/LecturerCourseDetail';
import Chat from '../pages/Chat';
import Logout from '../components/auth/logout';
import ChangePassword from '../components/auth/change-password';

// Main routes
const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
    auth: false,
  },
  {
    path: PATH.PROFILE,
    exact: false,
    component: () => <Profile />,
    auth: true,
  },
  {
    path: `${PATH.PROFILE_USER}/:id`,
    exact: false,
    component: ({ match }) => <UserDetail match={match} />,
    auth: false,
  },
  {
    path: PATH.AUTH,
    exact: false,
    component: () => (
      <Auth
        routes={[
          {
            path: PATH.AUTH_LOGIN,
            exact: false,
            component: () => <Login />,
          },
          {
            path: PATH.AUTH_REGISTER,
            exact: false,
            component: () => <Register />,
          },
          {
            path: PATH.AUTH_FORGOT_PASSWORD,
            exact: false,
            component: () => <ForgotPassword />,
          },
          {
            path: `${PATH.AUTH_RESET_PASSWORD}/:id/:token`,
            exact: false,
            component: () => <ChangePassword />,
          },
        ]}
      />
    ),
  },
  {
    path: PATH.LOGIN,
    exact: false,
    component: () => <Redirect to={PATH.AUTH_LOGIN} />,
  },
  {
    path: PATH.REGISTER,
    exact: false,
    component: () => <Redirect to={PATH.AUTH_REGISTER} />,
  },
  {
    path: PATH.FORGOT_PASSWORD,
    exact: false,
    component: () => <Redirect to={PATH.AUTH_FORGOT_PASSWORD} />,
  },
  {
    path: PATH.LECTURER_COURSE,
    exact: false,
    component: () => <LecturerCourse />,
    auth: true,
  },
  {
    path: PATH.COURSES,
    exact: false,
    component: () => <Course />,
    auth: false,
  },
  {
    path: `${PATH.COURSE_DETAIL}/:id`,
    exact: false,
    component: ({ match }) => <CourseDetail match={match} />,
    auth: false,
  },
  {
    path: `${PATH.LESSON_DETAIL}/:id`,
    exact: false,
    component: () => <LessonDetail />,
    auth: true,
  },
  {
    path: PATH.COURSE_EDIT,
    exact: false,
    component: () => <LecturerCourseDetail />,
    auth: true,
  },
  {
    path: PATH.CHAT,
    exact: false,
    component: () => <Chat />,
    auth: true,
  },
  {
    path: PATH.CONTACT,
    exact: false,
    component: () => <Contact />,
    auth: false,
  },
  {
    path: PATH.CART,
    exact: false,
    component: () => <Cart />,
    auth: false,
  },
  {
    path: PATH.ABOUT,
    exact: false,
    component: () => <About />,
    auth: false,
  },
  {
    path: PATH.LOGOUT,
    exact: false,
    component: () => <Logout />,
    auth: false,
  },
  {
    path: '',
    exact: false,
    component: () => <NotFound />,
    auth: false,
  },
];

export default routes;
