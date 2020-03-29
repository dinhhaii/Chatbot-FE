import React from 'react';
import Auth from '../pages/Auth';
import Login from '../components/auth/login';
import Register from '../components/auth/register';
import ForgotPassword from '../components/auth/forgot-password';

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
// import App from '../App';

// Main routes
const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/profile',
    exact: false,
    component: () => <Profile />,
  },
  {
    path: '/profileuser',
    exact: false,
    component: () => <UserDetail />,
  },
  {
    path: '/auth',
    exact: false,
    component: () => (
      <Auth
        routes={[
          {
            path: '/auth/login',
            exact: false,
            component: () => <Login />,
          },
          {
            path: '/auth/register',
            exact: false,
            component: () => <Register />,
          },
          {
            path: '/auth/forgot-password',
            exact: false,
            component: () => <ForgotPassword />,
          },
        ]}
      />
    ),
  },
  {
    path: '/lecturercourses',
    exact: false,
    component: () => <LecturerCourseManagement />,
  },
  {
    path: '/courses',
    exact: false,
    component: () => <Course />,
  },
  {
    path: '/course-detail',
    exact: false,
    component: () => <CourseDetail />,
  },
  {
    path: '/lesson-detail',
    exact: false,
    component: () => <LessonDetail />,
  },
  {
    path: '/course-edit',
    exact: false,
    component: () => <LecturerCourseDetail />,
  },
  {
    path: '/contact',
    exact: false,
    component: () => <Contact />,
  },
  {
    path: '/cart',
    exact: false,
    component: () => <Cart />,
  },
  {
    path: '/about',
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
