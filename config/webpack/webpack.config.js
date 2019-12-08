const productionConfig = require('./production.config');
const developConfig = require('./develop.config');

module.exports = process.env.NODE_ENV === 'production' ? productionConfig : developConfig;

// const isDev = process.env.NODE_ENV !== 'production'
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');
// const src = path.resolve(__dirname, '../../src');
// const dist = path.resolve(__dirname, '../../dist');

// module.exports = {
//     mode: 'development',
//     entry: src + '/index.jsx',

//     output: {
//         path: dist,
//         filename: 'bundle.js'
//     },

//     module: {
//         rules: [
//             {
//                 test: /\.jsx$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//                 options: {
//                     presets: [
//                         ['@babel/preset-env'],
//                         ['@babel/preset-react', {
//                             development: isDev
//                         }]
//                     ]
//                 }
//             }
//         ]
//     },

//     resolve: {
//         extensions: ['.js', 'jsx']
//     },

//     plugins: [
//         new HtmlWebpackPlugin({
//             template: src + '/index.html',
//             filename: 'index.html'
//         })
//     ]
// }