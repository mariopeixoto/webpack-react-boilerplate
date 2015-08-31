'use strict';


/* global window, document */
import * as React from 'react';
import * as Router from 'react-router';
var Route = Router.Route,
  DefaultRoute = Router.DefaultRoute;

//To enable React extension
//window.React = React;

import {default as App} from './views/App.tsx';
import {default as Website} from './views/website/Website.tsx';

const routes = (
  <Route handler={App} path='/'>
    <DefaultRoute handler={Website} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
