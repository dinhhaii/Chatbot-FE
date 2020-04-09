import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ToastContainer, toast } from 'react-toastify';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import routes from './routes/routes';
import rootSaga from './sagas/index';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Search from './components/search';
import * as serviceWorker from './serviceWorker';
import CustomLoader from './components/loader';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <CustomLoader />
        <Search />
        <Header />
        <ToastContainer position={toast.POSITION.BOTTOM_CENTER} />
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
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
