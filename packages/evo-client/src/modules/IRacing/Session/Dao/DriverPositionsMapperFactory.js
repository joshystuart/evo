// @flow
import DriverPositionsMapper from './DriverPositionsMapper';
import {driverMapper} from '../../Drivers/Dao/DriverMapperFactory';
import {lapMapper} from '../Laps/LapMapperFactory';

/**
 * @type {DriverPositionsMapper} driverPositionsMapper
 */
const driverPositionsMapper = new DriverPositionsMapper(driverMapper, lapMapper);

export {driverPositionsMapper};
