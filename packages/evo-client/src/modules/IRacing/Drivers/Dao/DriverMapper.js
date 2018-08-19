// @flow
import { DriverDto } from '@evo/common';

export default class DriverMapper {
    convertMultiple = (messages: DriverDto[]): DriverDto[] => {
        const drivers = [];

        messages.forEach((message) => {
            drivers.push(this.convertSingle(message));
        });

        return drivers;
    };

    convertSingle = (message: DriverDto): DriverDto => {
        const driver = new DriverDto();
        driver.id = message.id;
        driver.sessionId = message.sessionId;
        driver.username = message.username;
        driver.nickname = message.nickname;
        driver.iRating = message.iRating;
        driver.license = message.license;
        driver.teamName = message.teamName;
        driver.carNumber = message.carNumber;

        return driver;
    };

    convert(message: DriverDto | DriverDto[]): DriverDto | DriverDto[] {
        if (message instanceof Array) {
            return this.convertMultiple(message);
        }
        return this.convertSingle(message);
    }
}
