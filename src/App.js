import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/Home';

function App({ routes }) {
  return (
    <div>
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
      <Home />
    </div>
  );
}

export default App;
