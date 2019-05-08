import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Users from './pages/users';
import Todos from './pages/todos';

const Routes = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Users} />
      <Route path="/todos/:id" component={Todos} />
    </ Switch>
  </ BrowserRouter>
);

export default Routes;
