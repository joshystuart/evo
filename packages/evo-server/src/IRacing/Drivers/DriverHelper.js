// @flow
import type {DriverDto} from '@evo/common';

export default class DriverHelper {
    /**
     * iRacing creates a "session id" called "CarIdx". So instead of using their actually UserId they
     * make up some new one....weird. Anyway, this is so we can find a driver in our collection based on the idx.
     *
     * @param id
     * @param drivers
     */
    findDriverBySessionId(id: number, drivers: DriverDto[]) {
        return drivers.find((driver) => id === driver.sessionId);
    }
}
