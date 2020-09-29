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
  ],
  //webpack-dev-server の設定
  devServer: {
    //ルートディレクトリの指定
    contentBase: dist,
    //サーバー起動時にブラウザを自動的に起動
    open: true,
    // ルートディレクトリのファイルを監視
    watchContentBase: true,
    // ポート番号を変更
    port: 3000
  }
};