const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
          test : /\.scss$/,
          use : ExtractTextPlugin.extract(
              {
                  fallback : 'style-loader',
                  use : [
                      'css-loader',
                      'sass-loader'
                    ]
              }
          )
      }
    ],
  },
  plugins : [
      new ExtractTextPlugin({filename : 'css/mystyles.css'})
  ]
};