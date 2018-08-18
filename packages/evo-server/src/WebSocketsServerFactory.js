import config from '../config/config';
import WebSocketsServer from './WebSocketsServer';
import {iRacingService} from './IRacing/IRacingServiceFactory';
import {httpServer} from './ServerFactory';

export const irServerFactory = {
    createInstance: (port = config.port) => new WebSocketsServer(iRacingService, httpServer, port),
};
