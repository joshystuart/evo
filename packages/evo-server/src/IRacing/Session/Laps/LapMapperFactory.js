// @flow
import LapMapper from 'packages/evo-server/src/IRacing/Session/Laps/LapMapper';
import { timeFormatter } from 'packages/evo-server/src/IRacing/Timing/TimeFormatterFactory';

/**
 * @type {LapMapper} lapMapper
 */
const lapMapper = new LapMapper(timeFormatter);

export { lapMapper };
