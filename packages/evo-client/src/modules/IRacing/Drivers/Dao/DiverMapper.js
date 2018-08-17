// @flow
import { DriverDto } from '@evo/common';
import type { DriverData } from './DriverInfoData';

export default class DiverMapper {
    _convertMultiple = (messages: DriverData[]): DriverDto[] => {
        const drivers = [];

        messages.forEach((message) => {
            drivers.push(this._convertSingle(message));
        });

        return drivers;
    };

    _convertSingle = (message: DriverData): DriverDto => {
        const driver = new DriverDto();
        driver.id = message.UserID;
        driver.sessionId = message.CarIdx;
        driver.username = message.UserName;
        driver.nickname = message.AbbrevName;
        driver.iRating = message.IRating;
        driver.license = message.LicLevel;
        driver.teamName = message.TeamName;
        driver.carNumber = message.CarNumber;

        return driver;
    };

    convert(message: DriverData | DriverData[]): DriverDto | DriverDto[] {
        if (message instanceof Array) {
            return this._convertMultiple(message);
        }
        return this._convertSingle(message);
    }
}
