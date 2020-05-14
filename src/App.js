/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Search from './components/search';
import CustomLoader from './components/loader';
import AuthRoute from './components/authRoutes';
import routes from './routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import RouteWithSubRoutes from './components/subRoutes';

function CAFOCC() {
  return (
    <Router>
      <CustomLoader />
      <Search />
      <Header />
      <ToastContainer
        position={toast.POSITION.BOTTOM_CENTER}
        style={{ zIndex: 100000 }}
      />
      <Switch>
        {routes.map((route, index) => {
          return route.auth ? (
            <AuthRoute
              key={index.toString()}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ) : (
            <RouteWithSubRoutes
              key={index.toString()}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
      <Footer />
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    generalState: state.generalState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CAFOCC);
