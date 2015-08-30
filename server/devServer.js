'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.hot.config');

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: '/public/',
  contentBase: './app/',
  inline: true,
  hot: true,
  stats: false,
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Headers': 'X-Requested-With'
  }
}).listen(3001, 'localhost', function(err){
  if (err) {
    console.log(err);
		return ;
  }

  console.log('webpack dev server listening on localhost:3001');

	//Server
	var express = require('express');
	var path = require('path');
	var page = require('./page.generated');

	var app = express();

	app.use(express.static(path.join(__dirname, '..', 'public')));

	var stats = require('./stats.generated.json');
	app.get('/*', function(req, res) {
		res.type('html');
		res.write('<!DOCTYPE html>' + page(req, stats, true));
		res.end();
	});

	var port = Number(process.env.PORT || 3000);
	var server = app.listen(port, function() {
		console.log('Listening on port %d', server.address().port);
	});

});
