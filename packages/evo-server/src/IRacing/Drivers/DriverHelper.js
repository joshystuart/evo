// @flow
import type {DriverDto} from '@evo/common';
import find from 'lodash.find';

export default class DriverHelper {
    /**
     * iRacing creates a "session id" called "CarIdx". So instead of using their actually UserId they
     * make up some new one....weird. Anyway, this is so we can find a driver in our collection based on the idx.
     *
     * @param id
     * @param drivers
     */
    findDriverBySessionId(id: number, drivers: DriverDto[]) {
        return find(drivers, (driver) => id === driver.sessionId);
    }
}
