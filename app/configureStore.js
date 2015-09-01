'use strict';
import {compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { devTools, persistState } from 'redux-devtools';

const createStoreWithMiddleware = compose(
  // Enables your middleware:
  applyMiddleware(thunk),
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);


  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      console.log("replacing...");
      store.replaceReducer(nextReducer);
    });
  } else{
    console.log("not enabled...");
  }

  return store;
}
