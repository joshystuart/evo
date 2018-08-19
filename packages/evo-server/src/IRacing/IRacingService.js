// @flow
import EventEmitter from 'events';
import irsdk from '@evo/irsdk';
import {SessionDto} from '@evo/common';
import SessionMapper from './Session/SessionMapper';
import {EVENTS} from './IRacingConstants';
import type TelemetryMapper from './Telemetry/TelemetryMapper';
import type {TelemetryData} from './Telemetry/TelemetryData';
import type {FullSessionInfoData} from './Session/FullSessionInfoData';

const INTERNAL_EVENTS = {
    CONNECTED: 'Connected',
    DISCONNECTED: 'Disconnected',
    UPDATE: 'update',
    TELEMETRY: 'Telemetry',
    SESSION: 'SessionInfo',
};

export default class IRacingService extends EventEmitter {
    _telemetryMapper: TelemetryMapper;
    _sessionMapper: SessionMapper;
    _iracing: any;
    _isConnected: boolean = false;

    onConnected = () => {
        this._isConnected = true;
        this.emitMessage(EVENTS.CONNECTED);
    };

    onDisconnected = () => {
        this._isConnected = false;
        this.emitMessage(EVENTS.DISCONNECTED);
    };

    onTelemetry = (event: { values: TelemetryData }) => {
        this.emitMessage(EVENTS.TELEMETRY, this._telemetryMapper.convert(event.values));
    };

    onSession = (event: { data: FullSessionInfoData }) => {
        this.emitMessage(EVENTS.SESSION, this._sessionMapper.convert(event.data));
    };

    constructor(telemetryMapper: TelemetryMapper, sessionMapper: SessionMapper, telemetryUpdateInterval: number = 100, sessionInfoUpdateInterval: number = 100) {
        super();

        this._telemetryMapper = telemetryMapper;
        this._sessionMapper = sessionMapper;
        // create the iracing service
        irsdk.init({
            telemetryUpdateInterval,
            sessionInfoUpdateInterval,
        });
    }

    emitMessage(eventName: string, data: any) {
        this.emit(eventName, data);
    }

    start() {
        this._iracing = irsdk.getInstance();
        this._iracing.on(INTERNAL_EVENTS.CONNECTED, this.onConnected);
        this._iracing.on(INTERNAL_EVENTS.DISCONNECTED, this.onDisconnected);
        this._iracing.on(INTERNAL_EVENTS.TELEMETRY, this.onTelemetry);
        this._iracing.on(INTERNAL_EVENTS.SESSION, this.onSession);
    }

    getCurrentSession(): { type: string, data: SessionDto } {
        let data;

        const {sessionInfo} = this._iracing;
        if (sessionInfo && sessionInfo.data) {
            data = this._sessionMapper.convert(sessionInfo.data);
        }

        return data;
    }

    isConnected(): boolean {
        return this._isConnected;
    }
}
