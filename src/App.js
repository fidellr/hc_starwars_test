import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import AppLayout from './components/Layout';
import './App.css';

const App = () => (
  <AppLayout>
    <Switch>
      {
        routes.map(route => (
        <Route
            key={route.name}
            path={route.path}
            exact={route.exact}
            render={props => React.createElement(route.Component, { ...props })}
          />
        ))
      }
      <Route path="/*" render={() => <Redirect to="/films" />} exact/>
    </Switch>
  </AppLayout>
);

export default App;
