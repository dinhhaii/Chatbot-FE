import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import './index.css';
import routes from './routes/routes';
import * as serviceWorker from './serviceWorker';
import Header from './components/header/header';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
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
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
