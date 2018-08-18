// @flow
import LapMapper from 'src/modules/IRacing/Session/Laps/LapMapper';
import { timeFormatter } from 'src/modules/IRacing/Timing/TimeFormatterFactory';

/**
 * @type {LapMapper} lapMapper
 */
const lapMapper = new LapMapper(timeFormatter);

export { lapMapper };
