// @flow
import type {DriverDto} from '@evo/common';
import {DriverPositionDto, LapDto} from '@evo/common';
import type {PositionData} from './SessionInfoData';
import type TimeFormatter from '../Timing/TimeFormatter';
import type DriverHelper from '../Drivers/DriverHelper';

export default class DriverPositionsMapper {
    _timeFormatter: TimeFormatter;
    _driverHelper: DriverHelper;

    convertMultiple = (messages: PositionData[], drivers: DriverDto[]): DriverPositionDto[] => {
        const positions = [];

        messages.forEach((message) => {
            positions.push(this.convertSingle(message, drivers));
        });

        return positions;
    };

    convertSingle = (message: PositionData, drivers: DriverDto[]): DriverPositionDto => {
        const driverPosition = new DriverPositionDto();
        driverPosition.position = message.Position;
        driverPosition.laps = [];
        driverPosition.driver = this._driverHelper.findDriverBySessionId(message.CarIdx, drivers);
        driverPosition.lastLap = this.convertLastLap(message);
        driverPosition.fastestLap = this.convertFastestLap(message);
        driverPosition.numberOfLaps = message.Lap;
        driverPosition.numberOfLapsCompleted = message.LapsComplete;
        driverPosition.numberOfLapsLed = message.LapsLed;
        return driverPosition;
    };

    convertLastLap = (message: PositionData) => {
        const lap = new LapDto();
        lap.id = message.Lap;
        lap.time = this._timeFormatter.format(message.LastTime);
        return lap;
    };

    convertFastestLap = (message: PositionData) => {
        const lap = new LapDto();
        lap.id = message.FastestLap;
        lap.time = this._timeFormatter.format(message.FastestTime);
        return lap;
    };

    constructor(timeFormatter: TimeFormatter, driverHelper: DriverHelper) {
        this._timeFormatter = timeFormatter;
        this._driverHelper = driverHelper;
    }

    convert(message: PositionData | PositionData[], drivers: DriverDto[]): DriverPositionDto | DriverPositionDto[] {
        if (message instanceof Array) {
            return this.convertMultiple(message, drivers);
        }
        return this.convertSingle(message, drivers);
    }
}
