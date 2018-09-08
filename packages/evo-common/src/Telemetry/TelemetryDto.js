// @flow
import type PedalsDto from './PedalsDto';
import type GearsDto from './GearsDto';
import type SpeedDto from './SpeedDto';
import type TimingDto from './TimingDto';

export default class TelemetryDto {
    pedals: PedalsDto;
    gears: GearsDto;
    speed: SpeedDto;
    timing: TimingDto;
}
