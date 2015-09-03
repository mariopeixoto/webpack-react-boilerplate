'use strict';
import React from 'react';

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
    const {actions} = this.props;
    const newTodo = this.refs.newTodo.getDOMNode();
    const text = newTodo.value.trim();
    if (text) {
      actions.addTodo(newTodo.value.trim());
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
          <button onClick={this._handleClick}>Add Todo</button>
        </div>
      </div>
    );
  }
}

export default Todos;
