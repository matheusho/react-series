const path = require('path');

const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: './bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'public')
  },
  module: {
    loaders: [
      {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  }
};