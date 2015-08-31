'use strict';
var React = require('react');
var App_tsx_1 = require('./views/App.tsx');
var Website_tsx_1 = require('./views/website/Website.tsx');
var routes = (React.createElement(Route, {"component": App_tsx_1.default}, React.createElement(Route, {"path": '/', "component": Website_tsx_1.default})));
React.render((React.createElement(Router, {"history": new BrowserHistory()}, routes)), document.getElementById('app'));
