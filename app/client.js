'use strict';

/* global window, document */
import React from 'react';

//To enable React extension
window.React = React;

/* react router */
import App from './App';

React.render(<App />, document.getElementById('app'));
