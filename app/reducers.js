import {combineReducers} from 'redux';
import * as types from './todos/actionTypes';

function todos(state=[], action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, action.text + ";"];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos
});

export default rootReducer;