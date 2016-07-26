const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

process.env.NODE_ENV = 'production';

module.exports = {
  devtool: 'source-map',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[chunkhash].[id].chunk.js',
    publicPath: './'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: false,
      __PROD__: true
    }),
    new ExtractTextPlugin('styles.[contenthash].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: true
    })
  ]
};
