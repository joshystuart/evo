// @flow
import type DriverDto from '../Drivers/DriverDto';
import type TimeDto from '../Timing/TimeDto';

export default class LapDto {
    id: string;
    driver: DriverDto;
    time: TimeDto;
}
