// @flow
import EventEmitter from 'events';
import WebSocket, { Server } from 'ws';
import { EVENTS as IRACING_EVENTS } from './IRacing/IRacingConstants';
import IRacingService from './IRacing/IRacingService';

export const EVENTS = {
    CONNECTION: 'connection',
};

export default class WebSocketsServer extends EventEmitter {
    _iRacingService: IRacingService;
    _httpServer: any;
    _port: number;
    _events: string[];
    _websocketServer: any;
    /**
     */
    initEventListeners = () => {
        console.info(`WebSocketsServer::initEventListeners Initializing events`);
        // for each event listen and broadcast to all users
        this._events.forEach((eventName) => {
            this._iRacingService.on(eventName, (data) => {
                this._websocketServer.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        this.send(client, data);
                    }
                });
            });
        });

        // listen for websocket connections
        this._websocketServer.on(EVENTS.CONNECTION, (ws: WebSocket) => {
            console.info(`WebSocketsServer::connect a user has connected to the websocket server`);

            // We need to get the current session because otherwise we have to wait for an update
            const session = this._iRacingService.getCurrentSession();
            if (session) {
                this.send(ws, session);
            }
        });
    };
    /**
     * @param {WebSocket} ws
     * @param {object} data
     */
    send = (ws: WebSocket, data: any) => {
        ws.send(JSON.stringify(data));
    };

    constructor(iRacingService: IRacingService, httpServer: any, port: number = 3000, events: string[] = [IRACING_EVENTS.TELEMETRY, IRACING_EVENTS.SESSION]) {
        super();
        this._iRacingService = iRacingService;
        this._httpServer = httpServer;
        this._events = events;
        this._port = port;
    }

    connect() {
        console.info(`WebSocketsServer::connect Starting websocket server`);
        this._websocketServer = new Server({ server: this._httpServer });

        this.initEventListeners();
        this._iRacingService.connect();

        // listen to incoming requests
        this._httpServer.listen(this._port, () => {
            console.info(`WebSocketsServer::connect Server started on port ${this._port}`);
        });
    }
}
