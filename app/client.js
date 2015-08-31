'use strict';

/* global window, document */
import React from 'react';

/* react router */
import {Router} from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

/* redux */
import reducers from './reducers';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';

// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';

const finalCreateStore = compose(
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

//To enable React extension
window.React = React;

const history = createHistory();
const store = finalCreateStore(reducers);

const element = (
  <Provider store={store}>
    {() =>
      <div>
        <Router history={history} routes={routes} key='router'/>
        <DebugPanel key='debug-panel' top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    }
  </Provider>
);

React.render(element, document.getElementById('app'));
