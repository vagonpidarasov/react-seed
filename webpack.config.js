const path = require('path');
const {devServer} = require('./webpack.dev-server.config');
const {plugins} = require('./webpack.plugins.config');
const moduleConfig = require('./webpack.module.config');

module.exports = {
    plugins,
    devServer,
    module: moduleConfig.module,

    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
        module: 'empty',
        dgram: 'empty',
        dns: 'mock',
        fs: 'empty',
        http2: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    // Turn off performance processing because we utilize
    // our own hints via the FileSizeReporter
    performance: false,

    entry: [
        path.resolve(__dirname, './src/index.ts'),
    ],

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {'src': path.resolve(__dirname, './src')},
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
