const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const ROOT = `${__dirname}/../`;

const PATHS = {
    APP: fs.realpathSync(`${ROOT}src`),
    COMMON: fs.realpathSync(`${ROOT}node_modules/@evo/common`),
    MODULES: fs.realpathSync(`${ROOT}node_modules`),
    PUBLIC: fs.realpathSync(`${ROOT}public`),
};

module.exports = {
    entry: [
        `${ROOT}src/index.js`,
    ],
    output: {
        pathinfo: true,
        path: `${ROOT}build`,
        publicPath: '/',
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [PATHS.APP, PATHS.COMMON],
                use: {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [
                            require.resolve('@babel/preset-env'),
                            [
                                require.resolve('@babel/preset-react'),
                                {
                                    useBuiltIns: true,
                                },
                            ],
                            require.resolve('@babel/preset-flow'),
                        ],
                        plugins: [
                            [
                                require.resolve('@babel/plugin-transform-destructuring'),
                                {
                                    loose: true,
                                },
                            ],
                            require.resolve('@babel/plugin-proposal-class-properties'),
                            require.resolve('@babel/plugin-proposal-object-rest-spread'),
                            require.resolve('@babel/plugin-transform-runtime'),
                            require.resolve('@babel/plugin-transform-regenerator'),
                            require.resolve('@babel/plugin-syntax-dynamic-import'),
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: `${PATHS.PUBLIC}/index.html`,
        }),
        new webpack.NamedModulesPlugin(),
        new CaseSensitivePathsPlugin(),
    ],
};
