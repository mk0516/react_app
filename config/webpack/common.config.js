const path = require('path');

const src = path.resolve(__dirname, '../../src');
const dist = path.resolve(__dirname, '../../dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: src + '/index.jsx',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.jsx', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    })
  ]
};