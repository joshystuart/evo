// @flow
import get from 'lodash/get';
import has from 'lodash/has';
import find from 'lodash/find';
import {DATA} from 'src/modules/IRacing/IRacingServiceConstants';
import type {DriverData, DriverInfoData} from 'src/modules/IRacing/Drivers/Dao/DriverInfoData';

export default class DriverDaoHelper {
    hasDriverInfoData(data: Object): boolean {
        return has(data, DATA.DRIVER);
    }

    getDriverInfoData(data: Object): DriverInfoData {
        return get(data, DATA.DRIVER);
    }

    getAllDriverData(data: DriverInfoData): DriverData[] {
        const driverData = this.getDriverInfoData(data);
        return driverData.Drivers;
    }

    getCurrentDriverData(data: DriverInfoData): DriverData {
        const driverInfo = this.getDriverInfoData(data);
        const drivers = this.getAllDriverData(data);
        return find(drivers, (driver: DriverData): boolean => driver.CarIdx === driverInfo.DriverCarIdx);
    }
}
