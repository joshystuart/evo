// @flow
import type PedalsDto from 'packages/evo-server/src/IRacing/Telemetry/Pedals/PedalsDto';
import type GearsDto from 'packages/evo-server/src/IRacing/Telemetry/Gear/GearsDto';
import SpeedDto from 'packages/evo-server/src/IRacing/Telemetry/Speed/SpeedDto';

export default class TelemetryDto {
    pedals: PedalsDto;
    gears: GearsDto;
    speed: SpeedDto;
}
