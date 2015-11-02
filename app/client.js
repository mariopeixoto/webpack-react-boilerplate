'use strict';

/* global window, document */
import React from 'react';
import ReactDOM from 'react-dom';

//To enable React extension
window.React = React;

/* react router */
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));
