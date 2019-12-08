const merge = require('webpack-merge');

const commonConfig = require('./common.config');

module.exports = merge(commonConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env'],
                    ['@babel/preset-react', {
                      development: false
                    }]
                  ]
                }
            }
        ]
    },
});