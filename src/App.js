import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Search from './components/search';
import CustomLoader from './components/loader';
import routes from './routes/routes';
import 'react-toastify/dist/ReactToastify.css';

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
          return (
            <Route
              key={index.toString()}
              path={route.path}
              exact={route.exact}
              render={route.component}
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
