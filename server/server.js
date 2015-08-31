'use strict';

var express = require('express');
var path = require('path');
var page = require('./page');

var app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

var stats = require('./stats.generated.json');

app.get('/*', function(req, res) {
	res.type('html');
	res.write('<!DOCTYPE html>' + page(req, stats));
	res.end();
});

var port = Number(process.env.PORT || 3000);
var server = app.listen(port, function() {
	console.log('Listening on port %d', server.address().port);
});
