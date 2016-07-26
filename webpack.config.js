const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = function(env) {
  'use strict';
  const webpackEnv = env && env.prod && 'prod' || 'dev';

  return merge.smart(require('./webpack.config.common'), require(`./webpack.config.${webpackEnv}`));
};
