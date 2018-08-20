import type {DriverDto} from '@evo/common';
// @flow
import {SessionDto} from '@evo/common';
import type {SessionData} from './SessionInfoData';
import type DriverHelper from '../Drivers/DriverHelper';
import type DriverStandingsMapper from './DriverStandingsMapper';
import type {IRacingData} from '../IRacingData';

export default class SessionMapper {
    _driverMapper: DriverMapper;
    _driverStandingsMapper: DriverStandingsMapper;
    _driverHelper: DriverHelper;

    convertMultipleSessions = (messages: SessionData[], drivers: DriverDto[], currentDriver: DriverDto): SessionDto[] => {
        const sessions = [];

        messages.forEach((message) => {
            sessions.push(this.convertSingleSession(message, drivers, currentDriver));
        });

        return sessions;
    };

    convertSingleSession = (sessionData: SessionData, iRacingData: IRacingData): SessionDto => {
        const drivers = this._driverMapper.convert(iRacingData.DriverInfo.Drivers);
        const currentDriver = this._driverHelper.findDriverBySessionId(iRacingData.DriverInfo.DriverCarIdx, drivers);
        const currentSession = iRacingData.TelemetryData.SessionNum;

        const session = new SessionDto();

        session.type = sessionData.SessionType;
        session.standings = this._driverStandingsMapper.convert(sessionData.ResultsPositions, iRacingData.TelemetryData, drivers);
        session.drivers = drivers;
        session.currentDriver = currentDriver;

        return session;
    };

    constructor(driverStandingsMapper: DriverStandingsMapper, driverMapper: DriverMapper, driverHelper: DriverHelper) {
        this._driverStandingsMapper = driverStandingsMapper;
        this._driverMapper = driverMapper;
        this._driverHelper = driverHelper;
    }

    convert(iRacingData: IRacingData): SessionDto | SessionDto[] {
        if (iRacingData.SessionInfo.Sessions instanceof Array) {
            return this.convertMultipleSessions(iRacingData.SessionInfo.Sessions, iRacingData);
        }

        return this.convertSingleSession(iRacingData.SessionInfo.Sessions, iRacingData);
    }
}
