module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-flow',
    ],
    plugins: [
        '@babel/plugin-transform-destructuring',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-regenerator',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-export-default-from',
    ],
};
