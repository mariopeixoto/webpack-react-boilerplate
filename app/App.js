'use strict';

/* global window, __DEVTOOLS__ */

import React from 'react';
import { Provider } from 'react-redux';

import {compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import { devTools, persistState } from 'redux-devtools';

/* react router */
import {Router} from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

const history = createHistory();

const finalCreateStore = compose(
  applyMiddleware(thunk),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const rootReducer = combineReducers(reducers);
const store = finalCreateStore(rootReducer);

if (module.hot) {
  module.hot.accept('./reducers', () =>
      store.replaceReducer(combineReducers(require('./reducers')))
  );
}

let devToolsElement;
if (__DEVTOOLS__) {
  const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
  devToolsElement = (
    <DebugPanel top right bottom>
      <DevTools store={store}
                monitor={LogMonitor}/>
    </DebugPanel>
  );
}


class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <Router history={history} routes={routes}/>}
        </Provider>
        {devToolsElement}
      </div>
    );
  }
}

export default App;
