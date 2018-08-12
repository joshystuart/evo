const fs = require('fs');
const PACKAGES = {
    APP: fs.realpathSync('./'),
};

module.exports = {
    target: 'node',
    entry: `${PACKAGES.APP}/index.js`,
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
                oneOf: [
                    {
                        test: /\.(js|jsx)$/,
                        include: Object.values(PACKAGES),
                        use: {
                            loader: require.resolve('babel-loader'),
                            options: {
                                presets: [
                                    require.resolve('@babel/preset-env'),
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
            }
        ]
    },
    plugins: []
};
