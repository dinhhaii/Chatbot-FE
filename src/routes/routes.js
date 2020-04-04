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
import LecturerCourseManagement from '../pages/LecturerCourse';
import LessonDetail from '../pages/Lesson';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import UserDetail from '../pages/UserProfile';
import LecturerCourseDetail from '../pages/LecturerCourseDetail';
import Chat from '../pages/Chat';
// import App from '../App';

// Main routes
const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
  },
  {
    path: PATH.PROFILE,
    exact: false,
    component: () => <Profile />,
  },
  {
    path: PATH.PROFILE_USER,
    exact: false,
    component: () => <UserDetail />,
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
    component: () => <LecturerCourseManagement />,
  },
  {
    path: PATH.COURSES,
    exact: false,
    component: () => <Course />,
  },
  {
    path: PATH.COURSE_DETAIL,
    exact: false,
    component: () => <CourseDetail />,
  },
  {
    path: PATH.LESSON_DETAIL,
    exact: false,
    component: () => <LessonDetail />,
  },
  {
    path: PATH.COURSE_EDIT,
    exact: false,
    component: () => <LecturerCourseDetail />,
  },
  {
    path: PATH.CHAT,
    exact: false,
    component: () => <Chat />,
  },
  {
    path: PATH.CONTACT,
    exact: false,
    component: () => <Contact />,
  },
  {
    path: PATH.CART,
    exact: false,
    component: () => <Cart />,
  },
  {
    path: PATH.ABOUT,
    exact: false,
    component: () => <About />,
  },
  {
    path: '',
    exact: false,
    component: () => <NotFound />,
  },
];

export default routes;
