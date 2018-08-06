module.exports = ({ options, env }) => ({
    plugins: {
        cssnano: env === 'production' ? options.cssnano : false,
        autoprefixer: true,
    },
});
