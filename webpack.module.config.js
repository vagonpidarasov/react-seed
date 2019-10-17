const {loader} = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: ['awesome-typescript-loader']
            },
            {
                test: /\.(png|eot|svg|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {name: '[name].[ext]'},
                }],
            },
            {
                test: /\.scss$/,
                use: [{loader}, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: [{loader}, 'css-loader'],
            },
        ],
    },
};
