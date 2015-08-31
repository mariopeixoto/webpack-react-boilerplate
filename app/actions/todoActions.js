'use strict';
import {ADD_TODO} from '../constants/actionTypes';

export function addTodo(text) {
  return { type: ADD_TODO, text };
}
