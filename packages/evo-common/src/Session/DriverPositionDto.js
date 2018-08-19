// @flow
import type DriverDto from '../Drivers/DriverDto';
import type LapDto from './LapDto';

export default class DriverPositionDto {
    position: number;
    classPosition: number;
    driver: DriverDto;
    numberOfLaps: number;
    numberOfLapsCompleted: number;
    numberOfLapsLed: number;
    fastestLap: LapDto;
    lastLap: LapDto;
    laps: LapDto[];
}
