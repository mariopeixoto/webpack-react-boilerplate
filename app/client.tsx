'use strict';


/* global window, document */
import * as React from 'react';
//import * as BrowserHistory from 'react-router/lib/BrowserHistory';
//import * as Router from 'react-router';
//import {Route} from 'react-router';
declare var Route;
declare var Router;
declare var BrowserHistory;
//To enable React extension
//window.React = React;

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
