'use strict';
import { connect } from 'react-redux';
import Todos from './components/Todos';
import reducer from './reducer';

var select = function(state) {
  return {
    todos: state.todos
  };
};

export default {
  Todos: connect(select)(Todos),
  reducer: reducer
};
