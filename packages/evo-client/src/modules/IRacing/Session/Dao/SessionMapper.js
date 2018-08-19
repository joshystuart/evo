// @flow
import {SessionDto} from '@evo/common';
import type DriverMapper from '../../Drivers/Dao/DriverMapper';
import type DriverPositionsMapper from './DriverPositionsMapper';

export default class SessionMapper {
    _driverMapper: DriverMapper;
    _driverPositionsMapper: DriverPositionsMapper;

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

        if (message.currentDriver) {
            session.currentDriver = this._driverMapper.convert(message.currentDriver);
        }

        if (message.drivers) {
            session.drivers = this._driverMapper.convert(message.drivers);
        }

        if (message.positions) {
            session.positions = this._driverPositionsMapper.convert(message.positions);
        }

        // TODO map position

        return session;
    };

    constructor(driverMapper: DriverMapper, driverPositionsMapper: DriverPositionsMapper) {
        this._driverMapper = driverMapper;
        this._driverPositionsMapper = driverPositionsMapper;
    }

    convert(message: SessionDto | SessionDto[]): SessionDto | SessionDto[] {
        if (message instanceof Array) {
            return this.convertMultiple(message);
        }
        return this.convertSingle(message);
    }
}
