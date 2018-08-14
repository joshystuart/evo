const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PACKAGES = {
    APP: fs.realpathSync('src'),
    PUBLIC: fs.realpathSync('public'),
    EVO_COMMON: fs.realpathSync('../evo-common'),
    EVO_CLIENT: fs.realpathSync('../evo-client'),
    EVO_IRSDK: fs.realpathSync('../evo-irsdk'),
    EVO_SERVER: fs.realpathSync('../evo-server')
};

module.exports = {
    entry: `${PACKAGES.APP}/App.jsx`,
    output: {
        path: `${__dirname}/build`,
        publicPath: '/',
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: Object.values(PACKAGES),
                use: {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [
                            [
                                require.resolve('@babel/preset-env'),
                                {
                                    'targets': {'node': 10},
                                    useBuiltIns: 'usage'
                                }
                            ],
                            require.resolve('@babel/preset-react'),
                            require.resolve('@babel/preset-flow')
                        ],
                        plugins: [
                            [
                                require.resolve('@babel/plugin-transform-destructuring'),
                                {
                                    loose: true
                                }
                            ],
                            require.resolve('@babel/plugin-proposal-class-properties'),
                            require.resolve('@babel/plugin-proposal-object-rest-spread'),
                            require.resolve('@babel/plugin-transform-runtime'),
                            require.resolve('@babel/plugin-transform-regenerator'),
                            require.resolve('@babel/plugin-syntax-dynamic-import')
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: `${PACKAGES.PUBLIC}/index.html`,
                to: 'index.html'
            },
            {
                from: `./main.js`,
                to: 'main.js'
            }
        ])
    ]
};
