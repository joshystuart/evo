// @flow
const {irServerFactory} = require('./index');

const server = irServerFactory.createInstance();

server.connect();
