// @flow
import EventEmitter from 'events';
import type WebSocketDao from 'src/modules/Utils/WebSocketDao';
import {EVENTS as WS_EVENTS} from 'src/modules/Utils/WebSocketDao';
import {OPTIONS, EVENTS} from 'src/modules/IRacing/IRacingServiceConstants';

export default class IRacingService extends EventEmitter {
    _isConnected = false;

    constructor(webSocketDao: WebSocketDao) {
        super();
        this._webSocketDao = webSocketDao;
        // propagate events
        this._webSocketDao.on(WS_EVENTS.CONNECTED, () => {
            this._isConnected = true;
            this.emit(EVENTS.OPEN);
        });
        this._webSocketDao.on(WS_EVENTS.MESSAGE, (data) => this.emit(EVENTS.MESSAGE, data));
    }

    connect(): IRacingService {
        this._webSocketDao.connect();
        return this;
    }

    sendCommand(command: string, ...args: Array<any>): void {
        const request = {
            command,
            args
        };

        this._webSocketDao.send(JSON.stringify(request));
        return this;
    }
}
