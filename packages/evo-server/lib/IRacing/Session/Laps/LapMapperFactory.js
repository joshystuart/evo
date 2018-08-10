// @flow
import LapMapper from 'lib/IRacing/Session/Laps/LapMapper';
import { timeFormatter } from 'lib/IRacing/Timing/TimeFormatterFactory';

/**
 * @type {LapMapper} lapMapper
 */
const lapMapper = new LapMapper(timeFormatter);

export { lapMapper };
