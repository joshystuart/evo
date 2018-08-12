// @flow
import TelemetryDto from 'packages/evo-server/src/IRacing/Telemetry/TelemetryDto';
import type PedalsTelemetryMapper from 'packages/evo-server/src/IRacing/Telemetry/Pedals/PedalsTelemetryMapper';
import GearsTelemetryMapper from './Gear/GearsTelemetryMapper';
import SpeedTelemetryMapper from 'packages/evo-server/src/IRacing/Telemetry/Speed/SpeedTelemetryMapper';
import type { TelemetryData } from 'packages/evo-server/src/IRacing/Telemetry/TelemetryData';

export default class TelemetryMapper {
    _pedalsTelemetryMapper: PedalsTelemetryMapper;
    _gearsTelemetryMapper: GearsTelemetryMapper;
    _speedTelemetryMapper: SpeedTelemetryMapper;

    constructor(pedalsTelemetryMapper: PedalsTelemetryMapper, gearsTelemetryMapper: GearsTelemetryMapper, speedTelemetryMapper: SpeedTelemetryMapper) {
        this._pedalsTelemetryMapper = pedalsTelemetryMapper;
        this._gearsTelemetryMapper = gearsTelemetryMapper;
        this._speedTelemetryMapper = speedTelemetryMapper;
    }

    convert(data: TelemetryData): TelemetryDto {
        const telemetry = new TelemetryDto();

        telemetry.pedals = this._pedalsTelemetryMapper.convert(data);
        telemetry.gears = this._gearsTelemetryMapper.convert(data);
        telemetry.speed = this._speedTelemetryMapper.convert(data);

        return telemetry;
    }
}
