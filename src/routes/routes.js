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
import CourseLectureDetail from '../components/courses/courses-lecturer-detail';
import Cart from '../components/carts/cart';
import Profile from '../components/profile/profile';
import LecturerCourseManagement from '../components/lecturer/lecturer-course';
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
    path: '/course-lecturer',
    exact: false,
    component: () => <CourseLectureDetail />,
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
