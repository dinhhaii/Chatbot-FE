import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { layoutRoutes } from './routes/routes';

import Header from './components/header/header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {layoutRoutes.map((route, index) => {
          return (
            <Route
              key={index.toString()}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
