// @flow
import EventEmitter from 'events';
import WebSocket, {Server} from 'ws';
import {EVENTS as IRACING_EVENTS} from './IRacing/IRacingConstants';
import IRacingService from './IRacing/IRacingService';

export const EVENTS = {
    CONNECTED: 'connection',
};

export default class WebSocketServer extends EventEmitter {
    _iRacingService: IRacingService;
    _port: number;
    _websocketServer: any;

    /**
     * When a client connects to this web socket server, we need to send back some details include:
     *  - Is the iRacing service connected. If it isn't, it is likely that iRacing hasn't started yet.
     *  - The current session information because the iRacing service only updates it when something has changed.
     * @param ws
     */
    onClientConnection = (ws: WebSocket) => {
        if (this._iRacingService.isConnected()) {
            this.send(ws, IRACING_EVENTS.CONNECTED);
        }

        const session = this._iRacingService.getCurrentSession();
        if (session) {
            this.send(ws, IRACING_EVENTS.SESSION, session);
        }

        console.info(`WebSocketsServer::onClientConnection client connected`);
    };

    /**
     * emit that we are connected to iracing
     */
    onIRacingConnection = () => {
        console.info(`WebSocketsServer::onIRacingConnection iRacing connected`);
        this.broadcast(IRACING_EVENTS.CONNECTED);
    };

    /**
     * emit that we are disconnected to iracing
     */
    onIRacingDisconnection = () => this.broadcast(IRACING_EVENTS.DISCONNECTED);

    /**
     * Broadcast the telemetry data.
     *
     * @param {object} data
     */
    onTelemetry = (data) => this.broadcast(IRACING_EVENTS.TELEMETRY, data);

    /**
     * Broadcast the session data.
     *
     * @param {object} data
     */
    onSession = (data) => this.broadcast(IRACING_EVENTS.SESSION, data);

    /**
     * @param {WebSocket} ws
     * @param {string} eventName
     * @param {object=} data
     */
    send = (ws: WebSocket, eventName: string, data?: any = {}) => {
        ws.send(
            JSON.stringify(
                this.formatMessage(eventName, data),
            ),
        );
    };

    /**
     * Broadcast an event and data to all currently connected clients
     *
     * @param {string} eventName
     * @param {object=} data
     */
    broadcast = (eventName: string, data: any) => {
        this._websocketServer.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                this.send(client, eventName, data);
            } else {
                client.terminate();
            }
        });
    };

    /**
     * We have to have a common data format so we can distinguish between the data coming back.
     *
     * @param {string} eventName
     * @param {object=} data
     * @return {{type: string, data: *}}
     */
    formatMessage = (eventName: string, data?: any = {}): { type: string, data: any } => ({
        type: eventName,
        data,
    });

    /**
     * @param {IRacingService} iRacingService
     * @param {number=} port
     */
    constructor(iRacingService: IRacingService, port: number = 3000) {
        super();
        this._iRacingService = iRacingService;
        this._port = port;
    }

    start() {
        console.info(`WebSocketsServer::start Starting websocket server`);
        this._websocketServer = new Server({port: this._port});

        this._websocketServer.on(EVENTS.CONNECTED, this.onClientConnection);

        // watch for iracing connection
        this._iRacingService.on(IRACING_EVENTS.CONNECTED, this.onIRacingConnection);
        this._iRacingService.on(IRACING_EVENTS.DISCONNECTED, this.onIRacingDisconnection);
        this._iRacingService.on(IRACING_EVENTS.TELEMETRY, this.onTelemetry);
        this._iRacingService.on(IRACING_EVENTS.SESSION, this.onSession);

        // start the iracing service
        this._iRacingService.start();
    }

    /**
     * Stops the http server and websockets.
     */
    stop() {
        this._websocketServer.clients.forEach((client) => {
            client.terminate();
        });

        // TODO, should we also unlink all the events? probably.
    }
}
