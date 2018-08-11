// @flow
import WebSocketsServer from 'lib/WebSocketsServer';
import { iRacingService } from 'lib/IRacing/IRacingServiceFactory';
import { httpServer } from 'lib/ServerFactory';
import config from 'config/config';

export const webSocketsServer = new WebSocketsServer(
    iRacingService,
    httpServer,
    config.port
);
