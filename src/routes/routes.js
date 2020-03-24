import React from 'react';
import Auth from '../pages/Auth';
import Login from '../components/auth/login';
import Register from '../components/auth/register';
import ForgotPassword from '../components/auth/forgot-password';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import App from '../App';

// Layout with Header and Footer
export const layoutRoutes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />,
  },
  {
    path: '/test',
    exact: true,
    main: () => <NotFound />,
  },
];

// For Auth Page
export const authRoutes = [
  {
    path: '/login',
    exact: true,
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

// Main routes
export const routes = [
  {
    path: '/',
    exact: true,
    main: () => <App />,
  },
  {
    path: '/auth',
    exact: false,
    main: () => <Auth />,
  },
  {
    path: '',
    exact: false,
    main: () => <NotFound />,
  },
];