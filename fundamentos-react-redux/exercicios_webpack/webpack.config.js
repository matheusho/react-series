const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './ex/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: './bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'public')
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  module: {
    loaders:[
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  }
};