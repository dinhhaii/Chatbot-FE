import React from 'react';
import Auth from '../pages/Auth';
import Login from '../components/auth/login';
import Register from '../components/auth/register';
import ForgotPassword from '../components/auth/forgot-password';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Course from '../pages/Course';
import CourseDetail from '../pages/CourseDetail';
import LessonDetail from '../components/lessons/lessons-detail';
import About from '../components/about';
import Contact from '../pages/Contact';
// import App from '../App';

// Main routes
const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
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
    path: '/contact',
    exact: false,
    component: () => <Contact />,
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
