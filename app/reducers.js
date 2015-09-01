'use strict';
import {combineReducers} from 'redux';
import {reducer as todos} from './todos';

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
