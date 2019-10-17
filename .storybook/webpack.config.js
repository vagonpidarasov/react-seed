const webpackConfig = require('../webpack.config');

module.exports = async ({ config }) => {
    const { resolve: { alias, extensions }, module: { rules } } = webpackConfig;

    config.resolve.alias = alias;
    config.resolve.extensions.push(...extensions);
    config.module.rules.push(
        rules[0], // awesome-typescript-loader
        rules[1], // file-loader
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }
    );

    return config;
};
