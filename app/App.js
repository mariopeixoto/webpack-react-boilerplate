'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import {compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
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

//const rootReducer = combineReducers(reducers);
const store = finalCreateStore(reducers);

if (module.hot) {
  module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers'))
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <Router history={history} routes={routes}/>}
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor}/>
        </DebugPanel>
      </div>
    );
  }
}

export default App;
