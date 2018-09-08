// @flow
import { timeFormatter } from '../../Timing/TimeFormatterFactory';
import FastestLapMapper from './FastestLapMapper';

/**
 * @type {FastestLapMapper} fastestLapMapper
 */
const fastestLapMapper = new FastestLapMapper(timeFormatter);

export { fastestLapMapper };
