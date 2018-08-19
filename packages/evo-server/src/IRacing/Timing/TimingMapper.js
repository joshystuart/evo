// @flow
import {TimingDto} from '@evo/common';
import type {TelemetryData} from '../Telemetry/TelemetryData';

export default class TimingMapper {
    convert(data: TelemetryData): TimingDto {
        const telemetry = new TimingDto();

        telemetry.lastLap = data.LapLastLapTime;
        telemetry.fastestLap = data.LapBestLapTime;

        return telemetry;
    }
}
