// @flow
require('@babel/register');
const {irServerFactory} = require('../index');

const server = irServerFactory.createInstance();

server.start();
