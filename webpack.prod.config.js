const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
    mode: 'production',
    optimization: {
        noEmitOnErrors: true,
    },
    output: {
        path: path.resolve(__dirname, './prod'),
    },
});
