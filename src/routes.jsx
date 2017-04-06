/**
 * Created by Chris Dorward on 05/04/2017
 * Routes
 */

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './smartComponents/App';

const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={App} />
      <Route path="/usakhduahsuo" component={App} />
    </Route>
  </Router>
);

export default routes;
