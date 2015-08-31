'use strict';

/* global window, document */
import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';

//To enable React extension
window.React = React;

import App from './views/App';
import Website from './views/website/Website';

const routes = (
  <Route handler={App} path='/'>
    <DefaultRoute handler={Website} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
