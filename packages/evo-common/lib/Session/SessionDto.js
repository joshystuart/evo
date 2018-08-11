// @flow
import type DriverPositionDto from './DriverPositionDto';
import type LapDto from './LapDto';

export default class SessionDto {
    id: string;
    type: string;
    // trackState: string; TODO
    totalNumberOfLaps: number | null = null;
    numberOfLapsCompleted: number | null = null;
    positions: DriverPositionDto[];
    fastestLaps: LapDto[];
}
