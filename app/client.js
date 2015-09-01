'use strict';

/* global window, document */
import React from 'react';

//To enable React extension
window.React = React;

/* react router */
import {Router} from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

const history = createHistory();

/* redux */
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { devTools, persistState } from 'redux-devtools';

const finalCreateStore = compose(
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

import reducers from './reducers';
const store = finalCreateStore(reducers);

const element = (
  <Provider store={store}>
    {() =>
      <div>
        <Router history={history} routes={routes} />
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    }
  </Provider>
);

React.render(element, document.getElementById('app'));
