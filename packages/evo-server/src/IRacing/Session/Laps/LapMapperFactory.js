// @flow
import { timeFormatter } from '../../Timing/TimeFormatterFactory';
import LapMapper from './LapMapper';

/**
 * @type {LapMapper} lapMapper
 */
const lapMapper = new LapMapper(timeFormatter);

export { lapMapper };
