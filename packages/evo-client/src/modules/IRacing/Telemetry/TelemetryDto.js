// @flow
import type PedalsDto from 'src/modules/IRacing/Telemetry/Pedals/PedalsDto';
import type GearsDto from 'src/modules/IRacing/Telemetry/Gear/GearsDto';
import SpeedDto from 'src/modules/IRacing/Telemetry/Speed/SpeedDto';

export default class TelemetryDto {
    _pedals: PedalsDto;
    _gears: GearsDto;
    _speed: SpeedDto;

    get pedals(): PedalsDto {
        return this._pedals;
    }

    set pedals(value: PedalsDto) {
        this._pedals = value;
    }

    get gears(): GearsDto {
        return this._gears;
    }

    set gears(value: GearsDto) {
        this._gears = value;
    }

    get speed(): SpeedDto {
        return this._speed;
    }

    set speed(value: SpeedDto) {
        this._speed = value;
    }
}
