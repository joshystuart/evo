// @flow
import {IRacingDto} from '@evo/common';
import type {IRacingData} from './IRacingData';
import SessionMapper from './Session/SessionMapper';
import TelemetryMapper from './Telemetry/TelemetryMapper';

export default class IRacingDataMapper {
    _sessionMapper: SessionMapper;
    _telemetryMapper: TelemetryMapper;

    convertMultipleSessions = (messages: IRacingData[]): IRacingDto[] => {
        const sessions = [];

        messages.forEach((message) => {
            sessions.push(this.convertSingleSession(message));
        });

        return sessions;
    };

    convertSingleSession = (message: IRacingData): IRacingDto => {
        const iRacingDto = new IRacingDto();
        iRacingDto.sessions = this._sessionMapper.convert(message);
        // iRacingDto.telemetry = this._telemetryMapper.convert(message);
        return iRacingDto;
    };

    constructor(sessionMapper: SessionMapper, telemetryMapper: TelemetryMapper) {
        this._sessionMapper = sessionMapper;
        this._telemetryMapper = telemetryMapper;
    }

    convert(message: IRacingData | IRacingData[]): IRacingDto | IRacingDto[] {
        if (message instanceof Array) {
            return this.convertMultipleSessions(message);
        }
        return this.convertSingleSession(message);
    }
}
