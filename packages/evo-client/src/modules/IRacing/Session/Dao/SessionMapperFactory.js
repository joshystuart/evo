// @flow
import SessionMapper from './SessionMapper';
import {driverMapper} from '../../Drivers/Dao/DriverMapperFactory';
import {driverPositionsMapper} from './DriverPositionsMapperFactory';

/**
 * @type {SessionMapper} sessionMapper
 */
const sessionMapper = new SessionMapper(driverMapper, driverPositionsMapper);

export {sessionMapper};
