const fs = require('fs');
const PACKAGES = {
    APP: fs.realpathSync('src'),
    EVO_COMMON: fs.realpathSync('../evo-common'),
    EVO_IRSDK: fs.realpathSync('../evo-iracing-sdk'),
    TEMP1: fs.realpathSync('../evo-iracing-sdk/node_modules'),
    TEMP2: fs.realpathSync('../evo-iracing-sdk/build'),
};

const nodeModules = {};
fs
    .readdirSync('node_modules')
    .filter((x) => {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach((mod) => {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    target: 'node',
    // entry: `${PACKAGES.APP}/index.js`,
    entry: `${__dirname}/start.js`,
    output: {
        path: `${__dirname}/build`,
        publicPath: '/',
        filename: 'start.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.node'],
        modules: ['node_modules'],
    },
    externals: nodeModules,
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.(js|jsx)$/,
                        include: Object.values(PACKAGES),
                        use: {
                            loader: require.resolve('babel-loader'),
                            options: {
                                presets: [require.resolve('@babel/preset-env'), require.resolve('@babel/preset-flow')],
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
            {
                test: [/\.node$/],
                loader: require.resolve('node-loader'),
            },
        ],
    },
    plugins: [],
};
