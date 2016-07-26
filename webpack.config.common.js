const webpack = require('webpack');
const path = require('path');
const pkg = require(path.resolve('./package.json'));

const WebpackHtmlPlugin = require('webpack-html-plugin');

module.exports = {
  entry: {
    vendor: Object.keys(pkg.dependencies)
      .filter((dependency) => !dependency.match(/\.css/)),
    [pkg.name]: './src/index'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  plugins: [
    new WebpackHtmlPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: [
          /.*(spec|mock)\.js$/,
          /node_modules/
        ],
        loaders: ['babel']
      },
      {
        test: /\.html$/,
        include: path.join(__dirname, 'src'),
        exclude: [
          /index\.html$/,
        ],
        loaders: ['html']
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loaders: ['style', 'css']
      },
      {
        test: /\.(png|gif|svg|jpe?g)$/,
        include: path.join(__dirname, 'src'),
        loaders: ['url'],
        query: {
          limit: 10000
        }
      }
    ]
  }
};
