'use strict';
import {ADD_TODO} from '../constants/actionTypes';

export default function (state=[], action) {
	switch (action.type) {
		case ADD_TODO:
      return [...state, action.text];
    default:
      return state;
	}
}
