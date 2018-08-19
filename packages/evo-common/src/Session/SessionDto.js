// @flow
import find from 'lodash.find';
import type DriverPositionDto from './DriverPositionDto';
import DriverDto from '../Drivers/DriverDto';
import TrackDto from '../Tracks/TrackDto';

export default class SessionDto {
    id: string;
    type: string;
    totalNumberOfLaps: number | null = null;
    numberOfLapsCompleted: number | null = null;
    positions: DriverPositionDto[];
    drivers: DriverDto[];
    currentDriver: DriverDto;
    track: TrackDto;
    //
    // getDriverPosition(findDriver: DriverDto) {
    //     return find(this.positions, ())
    // }
}
