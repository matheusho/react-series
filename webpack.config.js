const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './ex/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: './bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'public')
  }
};