import type {DriverDto} from '@evo/common';
// @flow
import {SessionDto} from '@evo/common';
import type {SessionData} from './SessionInfoData';
import type DriverHelper from '../Drivers/DriverHelper';
import type DriverPositionsMapper from './DriverPositionsMapper';
import type {FullSessionInfoData} from './FullSessionInfoData';

export default class SessionMapper {
    _driverMapper: DriverMapper;
    _driverPositionsMapper: DriverPositionsMapper;
    _driverHelper: DriverHelper;

    convertMultipleSessions = (messages: SessionData[], drivers: DriverDto[], currentDriver: DriverDto): SessionDto[] => {
        const sessions = [];

        messages.forEach((message) => {
            sessions.push(this.convertSingleSession(message, drivers, currentDriver));
        });

        return sessions;
    };

    convertSingleSession = (message: SessionData, drivers: DriverDto[], currentDriver: DriverDto): SessionDto => {
        const session = new SessionDto();
        session.type = message.SessionType;
        session.positions = this._driverPositionsMapper.convert(message.ResultsPositions, drivers);
        session.drivers = drivers;
        session.currentDriver = currentDriver;
        return session;
    };

    constructor(driverPositionsMapper: DriverPositionsMapper, driverMapper: DriverMapper, driverHelper: DriverHelper) {
        this._driverPositionsMapper = driverPositionsMapper;
        this._driverMapper = driverMapper;
        this._driverHelper = driverHelper;
    }

    convert(message: FullSessionInfoData): SessionDto | SessionDto[] {
        const drivers = this._driverMapper.convert(message.DriverInfo.Drivers);
        const currentDriver = this._driverHelper.findDriverBySessionId(message.DriverInfo.DriverCarIdx, drivers);

        if (message.SessionInfo.Sessions instanceof Array) {
            return this.convertMultipleSessions(message.SessionInfo.Sessions, drivers, currentDriver);
        }
        return this.convertSingleSession(message.SessionInfo.Sessions, drivers, currentDriver);
    }
}
