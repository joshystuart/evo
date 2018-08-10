// @flow
import WebSocketsServer from 'lib/WebSocketsServer';
import { iRacingService } from 'lib/IRacing/IRacingServiceFactory';
import config from 'config/config';

export const webSocketsServer = new WebSocketsServer(iRacingService, config.port);
