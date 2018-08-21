// @flow
import {SessionDto} from '@evo/common';
import type DriverMapper from '../../Drivers/Dao/DriverMapper';
import type DriverStandingsMapper from './DriverStandingsMapper';

export default class SessionMapper {
    _driverMapper: DriverMapper;
    _driverStandingsMapper: DriverStandingsMapper;

    convertMultiple = (messages: SessionDto[]): SessionDto[] => {
        const drivers = [];

        messages.forEach((message) => {
            drivers.push(this.convertSingle(message));
        });

        return drivers;
    };

    convertSingle = (message: SessionDto): SessionDto => {
        const session = new SessionDto();
        session.type = message.type;
        session.isActive = message.isActive;

        if (message.currentDriver) {
            session.currentDriver = this._driverMapper.convert(message.currentDriver);
        }

        if (message.drivers) {
            session.drivers = this._driverMapper.convert(message.drivers);
        }

        if (message.standings) {
            session.standings = this._driverStandingsMapper.convert(message.standings);
        }

        return session;
    };

    constructor(driverMapper: DriverMapper, driverStandingsMapper: DriverStandingsMapper) {
        this._driverMapper = driverMapper;
        this._driverStandingsMapper = driverStandingsMapper;
    }

    convert(message: SessionDto | SessionDto[]): SessionDto | SessionDto[] {
        if (message instanceof Array) {
            return this.convertMultiple(message);
        }
        return this.convertSingle(message);
    }
}
