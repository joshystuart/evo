// @flow
import {DriverStandingDto} from '@evo/common';
import type DriverMapper from '../../Drivers/Dao/DriverMapper';
import type LapMapper from '../Laps/LapMapper';

export default class DriverStandingsMapper {
    _driverMapper: DriverMapper;
    _lapMapper: LapMapper;

    convertMultiple = (messages: DriverStandingDto[]): DriverStandingDto[] => {
        const drivers = [];

        messages.forEach((message) => {
            drivers.push(this.convertSingle(message));
        });

        return drivers;
    };

    convertSingle = (message: DriverStandingDto): DriverStandingDto => {
        const driverPosition = new DriverStandingDto();

        driverPosition.position = message.position;
        driverPosition.numberOfLaps = message.numberOfLaps;
        driverPosition.numberOfLapsCompleted = message.numberOfLapsCompleted;
        driverPosition.numberOfLapsLed = message.numberOfLapsLed;

        driverPosition.driver = this._driverMapper.convert(message.driver);
        driverPosition.lastLap = this._lapMapper.convert(message.lastLap);
        driverPosition.fastestLap = this._lapMapper.convert(message.fastestLap);
        driverPosition.laps = this._lapMapper.convert(message.laps);

        return driverPosition;
    };

    constructor(driverMapper: DriverMapper, lapMapper: LapMapper) {
        this._driverMapper = driverMapper;
        this._lapMapper = lapMapper;
    }

    convert(message: DriverStandingDto | DriverStandingDto[]): DriverStandingDto | DriverStandingDto[] {
        if (message instanceof Array) {
            return this.convertMultiple(message);
        }
        return this.convertSingle(message);
    }
}
