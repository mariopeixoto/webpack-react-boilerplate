'use strict';
import React from 'react';
import {Route, IndexRoute} from 'react-router';

/* routed components */
import App from './App';
import Todos from './todos';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Todos} />
  </Route>
);
