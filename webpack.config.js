const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const pkg = require(path.resolve('./package.json'));

const WebpackHtmlPlugin = require('webpack-html-plugin');

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
