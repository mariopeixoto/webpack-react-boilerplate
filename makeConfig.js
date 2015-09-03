'use strict';
var webpack = require('webpack');
var path = require('path');

var buildEntries = function(hot) {
  var prefix = './app/';
  var entryFiles = ['./app/client.js'];
  var devServer = 'webpack-dev-server/client?http://localhost:3001';
  var hotModuleUpdate = 'webpack/hot/dev-server';
  var entries = {};
  entryFiles.map(function (entry) {
    var entryName = entry.slice(prefix.length).split('.js')[0];
    if(hot) {
      entries[entryName] = [entry, hotModuleUpdate];
    } else {
      entries[entryName] = entry;
    }
  });
  if (hot) {
    entries.devClient = devServer;
  }
  return entries;
};

var buildJsLoader = function(hot) {
  if (hot) {
    return ['react-hot', 'babel'];
  } else {
    return ['babel'];
  }
};

var buildPlugins = function(hot, plugins, env) {
  if (hot) {
    return plugins.concat([
      new webpack.HotModuleReplacementPlugin()
    ]);
  } else if (env.production) {
    return plugins.concat([
      new webpack.optimize.UglifyJsPlugin({
  			compressor: {
  				warnings: false
  			}
  		}),
  		new webpack.optimize.DedupePlugin()
    ]);
  }
  return plugins;
};

module.exports = function makeConfig(hot, publicPath, apiPath) {

  var _env = process.env.NODE_ENV;
  var env = {
    production: _env === 'production',
    staging: _env === 'staging',
    test: _env === 'test',
    development: _env === 'development' || typeof _env === 'undefined'
  };

  var jsLoaders = buildJsLoader(hot);
  var assetsPath = path.join(__dirname, 'public', 'assets');

  var jsFileName = env.development === true ? '[name].js' : '[name].[hash].js';

  return [
  	{
  		// The configuration for the client
  		name: 'client',
  		entry: buildEntries(hot),
  		output: {
  			path: assetsPath,
  			filename: jsFileName,
  			publicPath: publicPath
  		},
  		module: {
  			loaders: [
          { test: /\.jsx?$/, loaders: jsLoaders, exclude: /node_modules/ },
          { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
          { test: /\.json/, loader: 'json-loader' },
          { test: /\.jpg$/,  loader: 'url?limit=10000&mimetype=image/jpeg' },
          { test: /\.png$/,  loader: 'url?limit=10000&mimetype=image/png' },
          { test: /\.woff$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
          { test: /\.ttf$/,  loader: 'url?limit=10000&mimetype=application/octet-stream' },
          { test: /\.eot$/,  loader: 'file' },
          { test: /\.svg$/,  loader: 'url?limit=10000&mimetype=image/svg+xml' },
  			]
  		},
  		plugins: buildPlugins(hot, [
        function(compiler) {
          this.plugin('done', function(stats) {
            require('fs').writeFileSync(path.join(__dirname, 'server', 'stats.generated.json'), JSON.stringify(stats.toJson()));
          });
        },
        new webpack.DefinePlugin({
          API_PATH: JSON.stringify(apiPath),
        })
      ], env)
  	}
  ];
};
