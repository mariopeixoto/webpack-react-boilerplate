require('webpack');

var _env = process.env.NODE_ENV;
var isDevelopment = _env === 'development' || typeof _env === 'undefined';

var config = isDevelopment ? require('./webpack.dev.config.js') : require('./webpack.prod.config.js');

module.exports = config;
