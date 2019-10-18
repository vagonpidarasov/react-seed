const path = require('path');
const merge = require('webpack-merge');
const {GenerateSW} = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')
const config = require('./webpack.config.js');

module.exports = merge(config, {
    mode: 'production',
    optimization: {
        noEmitOnErrors: true,
    },
    output: {
        path: path.resolve(__dirname, './prod'),
    },
    plugins: [
        new GenerateSW({
            exclude: [/main\.css$/],
        }),
        new WebpackPwaManifest({
            name: 'React Progressive Web App',
            short_name: 'React PWA',
            description: 'Some description',
            background_color: '#ffffff',
            icons: [
                {
                    src: path.resolve('icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512],
                },
            ]
        })
    ],
});
