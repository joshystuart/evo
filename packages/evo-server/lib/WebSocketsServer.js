import http from 'http';
import EventEmitter from 'events';
import express from 'express';
import WebSocket, {Server} from 'ws';
import IRacingService, {EVENTS} from 'lib/IRacing/IRacingService';

export default class WebSocketsServer extends EventEmitter {
    _iRacingService: IRacingService;
    _port: number;
    _events: string[];
    _app: any;
    _server: any;
    _websocketServer: any;
    /**
     */
    initEventListeners = () => {
        console.log(`WebSocketsServer::initEventListeners Initializing events`);
        // for each event listen and broadcast to call users
        this._events.forEach((eventName) => {
            this._iRacingService.on(eventName, (data) => {
                this._websocketServer.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        this.send(client, data);
                    }
                });
            });
        });
    };
    /**
     * @param {WebSocket} ws
     * @param {object} data
     */
    send = (ws: WebSocket, data: any) => {
        ws.send(JSON.stringify(data));
    };

    constructor(
        iRacingService: IRacingService,
        port: number = 3000,
        events: string[] = [EVENTS.TELEMETRY, EVENTS.SESSION]
    ) {
        super();
        this._iRacingService = iRacingService;
        this._events = events;
        this._port = port;
        // TODO, this isn't great; we should create a Provider to wrap up this stuff.
        this._app = express();
        this._server = http.createServer(this._app);
    }

    connect() {
        console.log(`WebSocketsServer::connect Starting websocket server`);
        this._websocketServer = new Server({server: this._server});

        // TODO this doesn't feel great either. I though refactor to make this better to understand.
        this.initEventListeners();
        this._iRacingService.connect();

        // listen for websocket connections
        this._websocketServer.on('connection', (ws) => {
            console.log(`WebSocketsServer::connect a user has connected to the websocket server`);

            // TODO init session better
            const session = this._iRacingService.getCurrentSession();
            this.send(ws, session);
        });

        // listen to incoming requests
        this._server.listen(this._port, () => {
            console.log(`WebSocketsServer::connect Server started on port ${this._server.address().port}`);
        });
    }
}
