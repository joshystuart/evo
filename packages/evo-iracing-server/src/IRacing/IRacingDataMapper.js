// @flow
import {IRacingDto} from '@evo/common';
import type {IRacingData} from './IRacingData';
import SessionMapper from './Session/SessionMapper';
import TelemetryMapper from './Telemetry/TelemetryMapper';

export default class IRacingDataMapper {
    _sessionMapper: SessionMapper;
    _telemetryMapper: TelemetryMapper;

    convertMultipleDataSets = (messages: IRacingData[]): IRacingDto[] => {
        const sessions = [];

        messages.forEach((message) => {
            sessions.push(this.convertSingleDataSet(message));
        });

        return sessions;
    };

    convertSingleDataSet = (message: IRacingData): IRacingDto => {
        const iRacingDto = new IRacingDto();

        if (message && message.SessionInfo) {
            iRacingDto.sessions = this._sessionMapper.convert(message);
        }

        if (message && message.TelemetryData) {
            iRacingDto.telemetry = this._telemetryMapper.convert(message);
        }
        return iRacingDto;
    };

    constructor(sessionMapper: SessionMapper, telemetryMapper: TelemetryMapper) {
        this._sessionMapper = sessionMapper;
        this._telemetryMapper = telemetryMapper;
    }

    convert(message: IRacingData | IRacingData[]): IRacingDto | IRacingDto[] {
        if (message instanceof Array) {
            return this.convertMultipleDataSets(message);
        }
        return this.convertSingleDataSet(message);
    }
}
