const Server = require('webpack-dev-server');
const webpack = require('webpack');

module.exports = class WebpackDevServer {
    constructor(config, host = '0.0.0.0', port = 3000) {
        this._config = config;
        this._host = host;
        this._port = parseInt(port, 10);
    }

    start() {
        const compiler = webpack(this._config);
        const serverConfig = {
            host: this._host,
            hot: true,
            compress: true,
            publicPath: this._config.output.publicPath,
            contentBase: `${__dirname}/../public`,
            historyApiFallback: true,
        };
        const devServer = new Server(compiler, serverConfig);

        devServer.listen(this._port, this._host, err => {
            if (err) {
                return console.log(err);
            }
            console.log(`Started the development server on ${this._host}:${this._port}`);
        });

        ['SIGINT', 'SIGTERM'].forEach((sig) => {
            process.on(sig, () => {
                devServer.close();
                process.exit();
            });
        });
    }
}

