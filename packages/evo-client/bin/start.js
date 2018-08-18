process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const WebpackDevServer = require('./WebpackDevServer');
const config = require('./webpack.config.dev');

const server = new WebpackDevServer(config);

server.start();
