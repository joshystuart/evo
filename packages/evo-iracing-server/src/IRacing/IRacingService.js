// @flow
import EventEmitter from 'events';
import irsdk from '@evo/iracing-sdk';
import type {SessionDto, TelemetryDto, IRacingDto} from '@evo/common';
import {EVENTS} from './IRacingConstants';
import type IRacingDataMapper from './IRacingDataMapper';
import type {TelemetryData} from './Telemetry/TelemetryData';
import type {IRacingData} from './IRacingData';

const INTERNAL_EVENTS = {
    CONNECTED: 'Connected',
    DISCONNECTED: 'Disconnected',
    UPDATE: 'update',
    TELEMETRY: 'Telemetry',
    SESSION: 'SessionInfo',
};

export default class IRacingService extends EventEmitter {
    _iRacingDataMapper: IRacingDataMapper;
    _iRacing: any;
    _isConnected: boolean = false;
    _telemetryCache: any;
    _sessionCache: any;

    onConnected = () => {
        this._isConnected = true;
        this.emitMessage(EVENTS.CONNECTED);
    };

    onDisconnected = () => {
        this._isConnected = false;
        this.emitMessage(EVENTS.DISCONNECTED);
    };

    onTelemetry = (event: { values: TelemetryData }) => {
        this._telemetryCache = event.values;

        const data = this.getIRacingData();
        this.emitMessage(EVENTS.TELEMETRY, data.telemetry);
        // this.emitMessage(EVENTS.SESSION, data.sessions);
    };

    onSession = (event: { data: IRacingData }) => {
        this._sessionCache = event.data;

        const sessions = this.getSessionsData();
        this.emitMessage(EVENTS.SESSION, sessions);
    };

    constructor(iRacingDataMapper: IRacingDataMapper, telemetryUpdateInterval: number = 100, sessionInfoUpdateInterval: number = 100) {
        super();
        this._iRacingDataMapper = iRacingDataMapper;

        // create the iRacing service
        irsdk.init({
            telemetryUpdateInterval,
            sessionInfoUpdateInterval,
        });
    }

    emitMessage(eventName: string, data: any) {
        this.emit(eventName, data);
    }

    start() {
        this._iRacing = irsdk.getInstance();
        this._iRacing.on(INTERNAL_EVENTS.CONNECTED, this.onConnected);
        this._iRacing.on(INTERNAL_EVENTS.DISCONNECTED, this.onDisconnected);
        this._iRacing.on(INTERNAL_EVENTS.TELEMETRY, this.onTelemetry);
        this._iRacing.on(INTERNAL_EVENTS.SESSION, this.onSession);
    }

    getIRacingData(): IRacingDto {
        const augmentedEvent = {
            ...this._sessionCache,
            TelemetryData: this._telemetryCache,
        };

        return this._iRacingDataMapper.convert(augmentedEvent);
    }

    getSessionsData(): SessionDto {
        const iRacingData = this.getIRacingData();
        return iRacingData.sessions;
    }

    getTelemetryData(): TelemetryDto {
        const iRacingData = this.getIRacingData();
        return iRacingData.telemetry;
    }

    isConnected(): boolean {
        return this._isConnected;
    }
}
