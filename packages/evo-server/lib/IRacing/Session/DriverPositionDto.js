// @flow
import type DriverDto from 'lib/IRacing/Drivers/DriverDto';
import type LapDto from 'lib/IRacing/Session/Laps/LapDto';

export default class DriverPositionDto {
    _position: number;
    _classPosition: number;
    _driver: DriverDto;
    _numberOfLaps: number;
    _numberOfLapsCompleted: number;
    _numberOfLapsLed: number;
    _numberOfLapsDriven: number;
    _fastestLap: LapDto;
    _lastLap: LapDto;

    get position(): number {
        return this._position;
    }

    set position(value: number) {
        this._position = value;
    }

    get classPosition(): number {
        return this._classPosition;
    }

    set classPosition(value: number) {
        this._classPosition = value;
    }

    get driver(): DriverDto {
        return this._driver;
    }

    set driver(value: DriverDto) {
        this._driver = value;
    }

    get numberOfLaps(): number {
        return this._numberOfLaps;
    }

    set numberOfLaps(value: number) {
        this._numberOfLaps = value;
    }

    get numberOfLapsCompleted(): number {
        return this._numberOfLapsCompleted;
    }

    set numberOfLapsCompleted(value: number) {
        this._numberOfLapsCompleted = value;
    }

    get numberOfLapsLed(): number {
        return this._numberOfLapsLed;
    }

    set numberOfLapsLed(value: number) {
        this._numberOfLapsLed = value;
    }

    get numberOfLapsDriven(): number {
        return this._numberOfLapsDriven;
    }

    set numberOfLapsDriven(value: number) {
        this._numberOfLapsDriven = value;
    }

    get fastestLap(): LapDto {
        return this._fastestLap;
    }

    set fastestLap(value: LapDto) {
        this._fastestLap = value;
    }

    get lastLap(): LapDto {
        return this._lastLap;
    }

    set lastLap(value: LapDto) {
        this._lastLap = value;
    }
}
