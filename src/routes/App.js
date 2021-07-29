import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from '../containers/Dashboard';
import NotFound from '../containers/NotFound';
import Login from '../components/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/' component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
