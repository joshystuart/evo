// @flow
import SessionMapper from 'packages/evo-server/src/IRacing/Session/SessionMapper';
import { lapMapper } from 'packages/evo-server/src/IRacing/Session/Laps/LapMapperFactory';

/**
 * @type {SessionMapper} sessionMapper
 */
const sessionMapper = new SessionMapper(lapMapper);

export { sessionMapper };
