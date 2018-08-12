// @flow
import config from '../config/config';
import {iRacingService} from './IRacing/IRacingServiceFactory';
import {httpServer} from './ServerFactory';
import WebSocketsServer from './WebSocketsServer';

export const webSocketsServer = new WebSocketsServer(
    iRacingService,
    httpServer,
    config.port
);
