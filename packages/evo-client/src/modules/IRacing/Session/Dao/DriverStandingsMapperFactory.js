// @flow
import DriverStandingsMapper from './DriverStandingsMapper';
import {driverMapper} from '../../Drivers/Dao/DriverMapperFactory';
import {lapMapper} from '../Laps/LapMapperFactory';

/**
 * @type {DriverStandingsMapper} driverStandingsMapper
 */
const driverStandingsMapper = new DriverStandingsMapper(driverMapper, lapMapper);

export {driverStandingsMapper};
