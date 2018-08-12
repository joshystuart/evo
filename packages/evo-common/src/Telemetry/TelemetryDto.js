// @flow
import type PedalsDto from './PedalsDto';
import type GearsDto from './GearsDto';
import SpeedDto from './SpeedDto';

export default class TelemetryDto {
    pedals: PedalsDto;
    gears: GearsDto;
    speed: SpeedDto;
}
