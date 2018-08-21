// @flow
import type {DriverDto} from '@evo/common';
import {DriverStandingDto, LapDto} from '@evo/common';
import type {PositionData} from './SessionInfoData';
import type TimeFormatter from '../Timing/TimeFormatter';
import type DriverHelper from '../Drivers/DriverHelper';
import type {TelemetryData} from '../Telemetry/TelemetryData';

export default class DriverStandingsMapper {
    _timeFormatter: TimeFormatter;
    _driverHelper: DriverHelper;

    convertMultiple = (messages: PositionData[], telemetryData: TelemetryData, drivers: DriverDto[]): DriverStandingDto[] => {
        const positions = [];

        messages.forEach((message) => {
            positions.push(this.convertSingle(message, telemetryData, drivers));
        });

        return positions;
    };

    convertSingle = (message: PositionData, telemetryData: TelemetryData, drivers: DriverDto[]): DriverStandingDto => {
        const driverPosition = new DriverStandingDto();
        driverPosition.position = message.Position;
        driverPosition.laps = [];
        driverPosition.driver = this._driverHelper.findDriverBySessionId(message.CarIdx, drivers);
        // driverPosition.lastLap = this.convertLastLap(driverPosition.driver, telemetryData);
        driverPosition.lastLap = this.convertLastLap2(message);
        driverPosition.fastestLap = this.convertFastestLap(message);
        driverPosition.numberOfLaps = message.Lap;
        driverPosition.numberOfLapsCompleted = message.LapsComplete;
        driverPosition.numberOfLapsLed = message.LapsLed;
        return driverPosition;
    };

    convertLastLap = (driver: DriverDto, telemetryData: TelemetryData) => {
        // we can use this approach for qualifying times ??
        const lastLap = telemetryData.CarIdxLapCompleted[driver.sessionId];
        const lastTime = telemetryData.CarIdxF2Time[driver.sessionId];
        const lap = new LapDto();
        lap.id = lastLap > 0 ? lastLap : 0;
        if (lastTime > 0) {
            lap.time = this._timeFormatter.format(lastTime);
        }
        return lap;
    };

    convertFastestLap = (message: PositionData) => {
        const lap = new LapDto();
        lap.id = message.FastestLap;
        if (message.FastestTime > 0) {
            lap.time = this._timeFormatter.format(message.FastestTime);
        }
        return lap;
    };

    convertLastLap2 = (message: PositionData) => {
        const lap = new LapDto();
        lap.id = message.LapsComplete;
        if (message.LastTime > 0) {
            lap.time = this._timeFormatter.format(message.LastTime);
        }
        return lap;
    };

    constructor(timeFormatter: TimeFormatter, driverHelper: DriverHelper) {
        this._timeFormatter = timeFormatter;
        this._driverHelper = driverHelper;
    }

    convert(positionData: PositionData | PositionData[], telemetryData: TelemetryData, drivers: DriverDto[]): DriverStandingDto | DriverStandingDto[] {
        if (positionData instanceof Array) {
            return this.convertMultiple(positionData, telemetryData, drivers);
        }
        return this.convertSingle(positionData, telemetryData, drivers);
    }
}
