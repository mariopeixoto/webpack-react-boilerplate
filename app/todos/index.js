'use strict';
import { connect } from 'react-redux';
import Todos from './components/Todos';

var select = function(state) {
  return {
    todos: state.todos
  };
};

export default {
  Todos: connect(select)(Todos)
};
