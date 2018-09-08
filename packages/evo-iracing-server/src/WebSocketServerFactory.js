import config from '../config/config';
import WebSocketServer from './WebSocketServer';
import {iRacingService} from './IRacing/IRacingServiceFactory';

export const irServerFactory = {
    createInstance: (port = config.port) => new WebSocketServer(iRacingService, port),
};
