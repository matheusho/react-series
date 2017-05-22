const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src');
const PUBLIC_PATH = path.resolve(__dirname, 'public');

module.exports = {
  entry: path.resolve(SRC_PATH, 'index.jsx'),
  output: {
    path: path.resolve(PUBLIC_PATH),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: PUBLIC_PATH
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: path.resolve(__dirname, 'node_modules'),
      jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
      bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.min.js'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin('style.css')
  ],
  module: {
    loaders: [
      {
        test: /.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
        loader: 'file-loader'
      }
    ]
  }
}