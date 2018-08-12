// @flow
import type DriverPositionDto from 'packages/evo-server/src/IRacing/Session/DriverPositionDto';
import type LapDto from 'packages/evo-server/src/IRacing/Session/Laps/LapDto';

export default class SessionDto {
    id: string;
    type: string;
    // trackState: string; TODO
    totalNumberOfLaps: number | null = null;
    numberOfLapsCompleted: number | null = null;
    positions: DriverPositionDto[];
    fastestLaps: LapDto[];
}
