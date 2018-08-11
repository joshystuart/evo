// @flow
import {TelemetryDto} from '@evo/common';
import type PedalsTelemetryMapper, {PedalData} from 'src/modules/IRacing/Telemetry/Pedals/PedalsTelemetryMapper';
import type GearsTelemetryMapper, {GearsData} from 'src/modules/IRacing/Telemetry/Gear/GearsTelemetryMapper';
import type SpeedTelemetryMapper, {SpeedData} from 'src/modules/IRacing/Telemetry/Speed/SpeedTelemetryMapper';

type TelemetryData = {
    pedals: PedalData,
    gears: GearsData,
    speed: SpeedData,
};

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

    convert(data: TelemetryData): TelemetryDto {
        const telemetry = new TelemetryDto();

        telemetry.pedals = this._pedalsTelemetryMapper.convert(data.pedals);
        telemetry.gears = this._gearsTelemetryMapper.convert(data.gears);
        telemetry.speed = this._speedTelemetryMapper.convert(data.speed);

        return telemetry;
    }
}
