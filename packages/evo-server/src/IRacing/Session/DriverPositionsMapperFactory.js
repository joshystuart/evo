// @flow
import {timeFormatter} from '../Timing/TimeFormatterFactory';
import DriverPositionsMapper from './DriverPositionsMapper';
import {driverHelper} from '../Drivers/DriverHelperFactory';

/**
 * @type {DriverPositionsMapper} driverPositionsMapper
 */
const driverPositionsMapper = new DriverPositionsMapper(timeFormatter, driverHelper);

export {driverPositionsMapper};
