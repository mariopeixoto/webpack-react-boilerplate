'use strict';
import React from 'react';
import * as TodoActions from '../actions';

class Todos extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._renderTodos = this._renderTodos.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  _renderTodos() {
    return this.props.todos.map(todo =>
      <li key={todo}>{todo}</li>
    );
  }

  _handleClick() {
    const {dispatch} = this.props;
    const newTodo = this.refs.newTodo.getDOMNode();
    const text = newTodo.value.trim();
    if (text) {
      dispatch(TodoActions.addTodo(newTodo.value.trim()));
      newTodo.value = '';
    }

  }

  render(){
    return (
      <div>
        <ul>
          {this._renderTodos()}
        </ul>
        <div>
          <input type='text' ref='newTodo' />
          <input type='submit' onClick={this._handleClick} value='Add Todo' />
        </div>
      </div>
    );
  }
}

export default Todos;
