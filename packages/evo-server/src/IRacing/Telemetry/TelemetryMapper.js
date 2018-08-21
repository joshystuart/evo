// @flow
import {TelemetryDto} from '@evo/common';
import type GearsTelemetryMapper from './Gear/GearsTelemetryMapper';
import type PedalsTelemetryMapper from './Pedals/PedalsTelemetryMapper';
import type SpeedTelemetryMapper from './Speed/SpeedTelemetryMapper';
import type {IRacingData} from '../IRacingData';

export default class TelemetryMapper {
    _pedalsTelemetryMapper: PedalsTelemetryMapper;
    _gearsTelemetryMapper: GearsTelemetryMapper;
    _speedTelemetryMapper: SpeedTelemetryMapper;

    constructor(pedalsTelemetryMapper: PedalsTelemetryMapper, gearsTelemetryMapper: GearsTelemetryMapper, speedTelemetryMapper: SpeedTelemetryMapper) {
        this._pedalsTelemetryMapper = pedalsTelemetryMapper;
        this._gearsTelemetryMapper = gearsTelemetryMapper;
        this._speedTelemetryMapper = speedTelemetryMapper;
    }

    convert(data: IRacingData): TelemetryDto {
        const telemetryData = data.TelemetryData;
        const telemetry = new TelemetryDto();

        telemetry.pedals = this._pedalsTelemetryMapper.convert(telemetryData);
        telemetry.gears = this._gearsTelemetryMapper.convert(telemetryData);
        telemetry.speed = this._speedTelemetryMapper.convert(telemetryData);

        return telemetry;
    }
}
