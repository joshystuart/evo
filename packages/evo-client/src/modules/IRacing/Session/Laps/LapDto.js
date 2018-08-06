// @flow
import type DriverDto from 'src/modules/IRacing/Drivers/DriverDto';
import type TimeDto from 'src/modules/IRacing/Timing/TimeDto';

export default class LapDto {
    _id: string;
    _driver: DriverDto;
    _time: TimeDto;

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get driver(): DriverDto {
        return this._driver;
    }

    set driver(value: DriverDto) {
        this._driver = value;
    }

    get time(): TimeDto {
        return this._time;
    }

    set time(value: TimeDto) {
        this._time = value;
    }
}
