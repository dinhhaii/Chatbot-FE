import React from 'react';
import Login from '../components/auth/login';
import Register from '../components/auth/register';
import ForgotPassword from '../components/auth/forgot-password';

const authRoutes = [
  {
    path: '/login',
    exact: false,
    main: () => <Login />,
  },
  {
    path: '/register',
    exact: false,
    main: () => <Register />,
  },
  {
    path: '/forgot-password',
    exact: false,
    main: () => <ForgotPassword />,
  },
];

export default authRoutes;
