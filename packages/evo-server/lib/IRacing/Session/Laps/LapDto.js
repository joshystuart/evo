// @flow
import type DriverDto from 'lib/IRacing/Drivers/DriverDto';
import type TimeDto from 'lib/IRacing/Timing/TimeDto';

export default class LapDto {
    id: string;
    driver: DriverDto;
    time: TimeDto;
}
