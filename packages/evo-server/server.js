// @flow
process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';
require('babel-register');
const {webSocketsServer} = require('./lib/WebSocketsServerFactory');

export default webSocketsServer;
