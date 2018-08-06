// @flow
import TelemetryDto from 'src/modules/IRacing/Telemetry/TelemetryDto';
import type PedalsTelemetryMapper from 'src/modules/IRacing/Telemetry/Pedals/PedalsTelemetryMapper';
import GearsTelemetryMapper from '../Gear/GearsTelemetryMapper';
import SpeedTelemetryMapper from 'src/modules/IRacing/Telemetry/Speed/SpeedTelemetryMapper';

export default class TelemetryMapper {
    _pedalsTelemetryMapper: PedalsTelemetryMapper;
    _gearsTelemetryMapper: GearsTelemetryMapper;
    _speedTelemetryMapper: SpeedTelemetryMapper;

    constructor(
        pedalsTelemetryMapper: PedalsTelemetryMapper,
        gearsTelemetryMapper: GearsTelemetryMapper,
        speedTelemetryMapper: SpeedTelemetryMapper
    ) {
        this._pedalsTelemetryMapper = pedalsTelemetryMapper;
        this._gearsTelemetryMapper = gearsTelemetryMapper;
        this._speedTelemetryMapper = speedTelemetryMapper;
    }

    convert(data: any): TelemetryDto {
        const telemetry = new TelemetryDto();

        telemetry.pedals = this._pedalsTelemetryMapper.convert(data);
        telemetry.gears = this._gearsTelemetryMapper.convert(data);
        telemetry.speed = this._speedTelemetryMapper.convert(data);

        return telemetry;
    }
}
