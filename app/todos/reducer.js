'use strict';
import * as types from './actionTypes';

export default function(state=[], action) {
	switch (action.type) {
		case types.ADD_TODO:
      return [...state, action.text + ".."];
    default:
      return state;
	}
}
