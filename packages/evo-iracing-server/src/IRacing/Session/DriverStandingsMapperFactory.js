// @flow
import {timeFormatter} from '../Timing/TimeFormatterFactory';
import DriverStandingsMapper from './DriverStandingsMapper';
import {driverHelper} from '../Drivers/DriverHelperFactory';

/**
 * @type {DriverStandingsMapper} driverStandingsMapper
 */
const driverStandingsMapper = new DriverStandingsMapper(timeFormatter, driverHelper);

export {driverStandingsMapper};
