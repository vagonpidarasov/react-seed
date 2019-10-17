const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const Dotenv = require('dotenv-webpack');

module.exports = {
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new HTMLInlineCSSWebpackPlugin(),
        new CheckerPlugin(),
    ],
};
