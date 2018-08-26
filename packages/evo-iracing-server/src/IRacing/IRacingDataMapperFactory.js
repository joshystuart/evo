// @flow
import IRacingDataMapper from './IRacingDataMapper';
import {telemetryMapper} from './Telemetry/TelemetryMapperFactory';
import {sessionMapper} from './Session/SessionMapperFactory';

export const iRacingDataMapper = new IRacingDataMapper(sessionMapper, telemetryMapper);
