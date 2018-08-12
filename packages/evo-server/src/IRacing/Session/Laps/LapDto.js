// @flow
import type DriverDto from 'packages/evo-server/src/IRacing/Drivers/DriverDto';
import type TimeDto from 'packages/evo-server/src/IRacing/Timing/TimeDto';

export default class LapDto {
    id: string;
    driver: DriverDto;
    time: TimeDto;
}
