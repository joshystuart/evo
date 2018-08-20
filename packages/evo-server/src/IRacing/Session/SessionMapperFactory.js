// @flow
import SessionMapper from './SessionMapper';
import {driverStandingsMapper} from './DriverStandingsMapperFactory';
import {driverHelper} from '../Drivers/DriverHelperFactory';
import {driverMapper} from '../Drivers/DriverMapperFactory';

/**
 * @type {SessionMapper} sessionMapper
 */
const sessionMapper = new SessionMapper(
    driverStandingsMapper,
    driverMapper,
    driverHelper,
);

export {sessionMapper};
