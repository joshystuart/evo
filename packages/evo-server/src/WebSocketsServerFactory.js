// @flow
import WebSocketsServer from 'packages/evo-server/src/WebSocketsServer';
import { iRacingService } from 'packages/evo-server/src/IRacing/IRacingServiceFactory';
import { httpServer } from 'packages/evo-server/src/ServerFactory';
import config from 'config/config';

export const webSocketsServer = new WebSocketsServer(
    iRacingService,
    httpServer,
    config.port
);
