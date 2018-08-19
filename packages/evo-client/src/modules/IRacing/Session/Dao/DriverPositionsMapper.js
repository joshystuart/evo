// @flow
import {DriverPositionDto} from '@evo/common';
import type DriverMapper from '../../Drivers/Dao/DriverMapper';
import type LapMapper from '../Laps/LapMapper';

export default class DriverPositionsMapper {
    _driverMapper: DriverMapper;
    _lapMapper: LapMapper;

    convertMultiple = (messages: DriverPositionDto[]): DriverPositionDto[] => {
        const drivers = [];

        messages.forEach((message) => {
            drivers.push(this.convertSingle(message));
        });

        return drivers;
    };

    convertSingle = (message: DriverPositionDto): DriverPositionDto => {
        const driverPosition = new DriverPositionDto();

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

    convert(message: DriverPositionDto | DriverPositionDto[]): DriverPositionDto | DriverPositionDto[] {
        if (message instanceof Array) {
            return this.convertMultiple(message);
        }
        return this.convertSingle(message);
    }
}
