const webpack = require('webpack');
const commonConfig = require('./webpack.config.common');

const devConfig = {
    devtool: 'inline-source-maps',
    mode: 'development',
};

const config = Object.assign({}, commonConfig, devConfig);


config.plugins.push(new webpack.HotModuleReplacementPlugin());
module.exports = config;
