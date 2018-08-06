// @flow
import type PedalsDto from 'lib/IRacing/Telemetry/Pedals/PedalsDto';
import type GearsDto from 'lib/IRacing/Telemetry/Gear/GearsDto';
import SpeedDto from 'lib/IRacing/Telemetry/Speed/SpeedDto';

export default class TelemetryDto {
    pedals: PedalsDto;
    gears: GearsDto;
    speed: SpeedDto;
}
