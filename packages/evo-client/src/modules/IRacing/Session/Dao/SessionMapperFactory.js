// @flow
import SessionMapper from './SessionMapper';
import {driverMapper} from '../../Drivers/Dao/DriverMapperFactory';
import {driverStandingsMapper} from './DriverStandingsMapperFactory';

/**
 * @type {SessionMapper} sessionMapper
 */
const sessionMapper = new SessionMapper(driverMapper, driverStandingsMapper);

export {sessionMapper};
