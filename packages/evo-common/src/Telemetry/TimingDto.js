// @flow
import type LapDto from '../Session/LapDto';

export default class TimingDto {
    fastestLap: LapDto;
    lastLap: LapDto;
    laps: LapDto[];
}
