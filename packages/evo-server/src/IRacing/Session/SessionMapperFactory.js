// @flow
import SessionMapper from './SessionMapper';
import { lapMapper } from './Laps/LapMapperFactory';

/**
 * @type {SessionMapper} sessionMapper
 */
const sessionMapper = new SessionMapper(lapMapper);

export { sessionMapper };
