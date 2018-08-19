// @flow
import SessionMapper from './SessionMapper';
import {driverPositionsMapper} from './DriverPositionsMapperFactory';
import {driverHelper} from '../Drivers/DriverHelperFactory';
import {driverMapper} from '../Drivers/DriverMapperFactory';

/**
 * @type {SessionMapper} sessionMapper
 */
const sessionMapper = new SessionMapper(
    driverPositionsMapper,
    driverMapper,
    driverHelper,
);

export {sessionMapper};
