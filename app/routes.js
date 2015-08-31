'use strict';
import React from 'react';
import {Route, IndexRoute} from 'react-router';

/* routed components */
import App from './components/App';
import Todo from './components/todo/Todo';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Todo} />
  </Route>
);
