// @flow
import EventEmitter from 'events';
import irsdk from 'node-irsdk';
import type TelemetryMapper from 'lib/IRacing/Telemetry/TelemetryMapper';
import type {TelemetryData} from 'lib/IRacing/Telemetry/TelemetryData';
import type {SessionInfoData} from 'lib/IRacing/Session/SessionInfoData';
import SessionMapper from 'lib/IRacing/Session/SessionMapper';

const INTERNAL_EVENTS = {
    CONNECTED: 'Connected',
    DISCONNECTED: 'Disconnected',
    UPDATE: 'update',
    TELEMETRY: 'Telemetry',
    SESSION: 'SessionInfo'
};
export const EVENTS = {
    CONNECTED: 'CONNECTED',
    DISCONNECTED: 'DISCONNECTED',
    UPDATE: 'UPDATE',
    TELEMETRY: 'TELEMETRY',
    SESSION: 'SESSION',
    DRIVER: 'DRIVER'
};

export default class IRacingService extends EventEmitter {
    _telemetryMapper: TelemetryMapper;
    _sessionMapper: SessionMapper;
    _iracing: any;

    emitConnected = (event) => {
        this.emit(EVENTS.CONNECTED, event);
    };

    emitDisconnected = (event) => {
        this.emit(EVENTS.DISCONNECTED, event);
    };

    emitTelemetry = (event: { values: TelemetryData }) => {
        this.emitMessage(EVENTS.TELEMETRY, this._telemetryMapper.convert(event.values));
    };

    emitSession = (event: { data: { SessionInfo: SessionInfoData } }) => {
        this.emitMessage(EVENTS.SESSION, this._sessionMapper.convert(event.data.SessionInfo.Sessions));
    };
    formatMessage = (event, data) => ({
        type: event,
        data
    });

    constructor(
        telemetryMapper: TelemetryMapper,
        sessionMapper: SessionMapper,
        telemetryUpdateInterval: number = 100,
        sessionInfoUpdateInterval: number = 100
    ) {
        super();

        this._telemetryMapper = telemetryMapper;
        this._sessionMapper = sessionMapper;
        irsdk.init({
            telemetryUpdateInterval,
            sessionInfoUpdateInterval
        });
    }

    emitMessage(event, data) {
        this.emit(
            event,
            this.formatMessage(event, data)
        );
    }

    connect() {
        this._iracing = irsdk.getInstance();
        this._iracing.on(INTERNAL_EVENTS.CONNECTED, this.emitConnected);
        this._iracing.on(INTERNAL_EVENTS.DISCONNECTED, this.emitDisconnected);
        this._iracing.on(INTERNAL_EVENTS.TELEMETRY, this.emitTelemetry);
        this._iracing.on(INTERNAL_EVENTS.SESSION, this.emitSession);
    }

    getCurrentSession() {
        const {sessionInfo} = this._iracing;
        if (sessionInfo && sessionInfo.data) {
            return this.formatMessage(EVENTS.SESSION, this._sessionMapper.convert(sessionInfo.data.SessionInfo.Sessions));
        }
    }
}
