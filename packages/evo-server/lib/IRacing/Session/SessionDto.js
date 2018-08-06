// @flow
import type DriverPositionDto from 'lib/IRacing/Session/DriverPositionDto';
import type LapDto from 'lib/IRacing/Session/Laps/LapDto';

export default class SessionDto {
    id: string;
    type: string;
    // trackState: string; TODO
    totalNumberOfLaps: number | null = null;
    numberOfLapsCompleted: number | null = null;
    positions: DriverPositionDto[];
    fastestLaps: LapDto[];
}
