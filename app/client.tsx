'use strict';

/* global window, document */
import React from 'react';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import Router, {Route} from 'react-router';

//To enable React extension
window.React = React;

import App from './views/App.tsx';
import Website from './views/website/Website.tsx';

const routes = (
  <Route component={App}>
    <Route path='/' component={Website} />
  </Route>
);

React.render((
  <Router history={new BrowserHistory()}>
    {routes}
  </Router>
), document.getElementById('app'));
