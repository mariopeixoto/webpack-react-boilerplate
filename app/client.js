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

import reducers from './reducers';
import configureStore from './configureStore';

const store = configureStore();
//const store = finalCreateStore(reducers);

const element = (
  <div>
    <Provider store={store}>
      {() =>
        <div>
          <Router history={history} routes={routes} />
        </div>
      }
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
);

React.render(element, document.getElementById('app'));
