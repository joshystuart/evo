const BABEL_LOADER = {
    loader: require.resolve('babel-loader'),
    options: {
        presets: [
            [
                require.resolve('@babel/preset-env'),
                {
                    targets: {node: 10},
                    useBuiltIns: 'usage',
                },
            ],
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-flow'),
        ],
        plugins: [
            [
                require.resolve(
                    '@babel/plugin-transform-destructuring',
                ),
                {
                    loose: true,
                },
            ],
            require.resolve(
                '@babel/plugin-proposal-class-properties',
            ),
            require.resolve(
                '@babel/plugin-proposal-object-rest-spread',
            ),
            require.resolve('@babel/plugin-transform-runtime'),
            require.resolve(
                '@babel/plugin-transform-regenerator',
            ),
            require.resolve(
                '@babel/plugin-syntax-dynamic-import',
            ),
        ],
    },
};

module.exports = {
    BABEL_LOADER,
};
