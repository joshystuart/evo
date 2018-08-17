const fs = require('fs');
const APP_DIR = fs.realpathSync('src');
const EVO_COMMON_DIR = fs.realpathSync('node_modules/@evo/common');

module.exports = {
    entry: './src/index.js',
    output: {
        path: `${__dirname}/build`,
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
                include: [APP_DIR, EVO_COMMON_DIR],
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
};
