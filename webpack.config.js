const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = function(env) {
  'use strict';
  let webpackConfig = {};

  if ( env && env.prod ) {
    webpackConfig = require('./webpack.config.prod');
  } else {
    webpackConfig = require('./webpack.config.dev');
  }

  return merge.smart(require('./webpack.config.common'), webpackConfig);
};
