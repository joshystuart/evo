// @flow
import type DriverStandingDto from './DriverStandingDto';
import DriverDto from '../Drivers/DriverDto';
import TrackDto from '../Tracks/TrackDto';

export default class SessionDto {
    id: string;
    type: string;
    isActive: boolean = false;
    totalNumberOfLaps: number | null = null;
    numberOfLapsCompleted: number | null = null;
    standings: DriverStandingDto[];
    drivers: DriverDto[];
    currentDriver: DriverDto;
    track: TrackDto;
}
