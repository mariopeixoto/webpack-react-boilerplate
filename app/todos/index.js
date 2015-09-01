'use strict';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todos from './components/Todos';
import * as TodoActions from './actions';

function mapState(state) {
  return {
    todos: state.todos
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}


export default connect(mapState, mapDispatch)(Todos);
