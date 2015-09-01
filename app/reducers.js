
import * as types from './todos/actionTypes';

export default function myReducer(state={todos:[]}, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {todos: [...state.todos, action.text + ";;"]};
    default:
      return state;
  }
}
