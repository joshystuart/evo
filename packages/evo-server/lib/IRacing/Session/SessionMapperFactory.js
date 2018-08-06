// @flow
import SessionMapper from 'lib/IRacing/Session/SessionMapper';
import {lapMapper} from 'lib/IRacing/Session/Laps/LapMapperFactory';

/**
 * @type {SessionMapper} sessionMapper
 */
const sessionMapper = new SessionMapper(lapMapper);

export {sessionMapper};
