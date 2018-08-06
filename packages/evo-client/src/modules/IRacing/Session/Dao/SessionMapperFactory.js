// @flow
import SessionMapper from 'src/modules/IRacing/Session/Dao/SessionMapper';
import {lapMapper} from 'src/modules/IRacing/Session/Laps/LapMapperFactory';

/**
 * @type {SessionMapper} sessionMapper
 */
const sessionMapper = new SessionMapper(lapMapper);

export {sessionMapper};
