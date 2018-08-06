// @flow
import EventEmitter from 'events';

export const EVENTS = {
    CONNECTED: 'connection',
    DISCONNECTED: 'disconnect',
    MESSAGE: 'event',
    ERROR: 'error'
};

export default class WebSocketDao extends EventEmitter {
    _host: string;
    _socket: WebSocket;
    _autoReconnectInterval: number = 5 * 1000;

    onOpen = (): void => {
        console.info(`WebSocketDao::onOpen connected to ${this._host}`);
        this.emit(EVENTS.CONNECTED);
    };

    onMessage = (message: any): void => {
        const {data} = message;
        if (data) {
            this.emit(EVENTS.MESSAGE, JSON.parse(data));
        } else {
            this.emit(EVENTS.ERROR, `Does not contain message data: ${message}`);
        }
    };

    onError = (event: Event): void => {
        const {readyState} = event.target;

        switch (readyState) {
            case 3:
                console.warn('WebSocketDao::onError connection refused');
                this.reconnect();
                break;
            default:
                console.error('WebSocketDao::onError', event);
                break;
        }
    };

    onClose = (event: Event): void => {
        const {code} = event;

        switch (code) {
            case 1000:
                this.emit(EVENTS.CLOSED, event);
                break;
            default:
                console.info('WebSocketDao::onClose closed connection');
                this.reconnect();
                break;
        }
    };

    constructor(host: string) {
        super();
        this._host = host;
    }

    connect(): void {
        this._socket = new WebSocket(this._host);
        this._socket.onopen = this.onOpen;
        this._socket.onmessage = this.onMessage;
        this._socket.onerror = this.onError;
        this._socket.onclose = this.onClose;
    }


    reconnect(): void {
        delete this._socket.onopen;
        delete this._socket.onmessage;
        delete this._socket.onerror;
        delete this._socket.onclose;

        setTimeout(
            () => {
                console.info('WebSocketDao::reconnect reconnecting...');
                this.connect();
            },
            this._autoReconnectInterval
        );
    }

    send(data: Array<any>): void {
        console.info('WebSocketDao::send sending data', data);
        this._socket.send(JSON.stringify(data));
    }

    close(): void {
        this._socket.close();
    }
}
