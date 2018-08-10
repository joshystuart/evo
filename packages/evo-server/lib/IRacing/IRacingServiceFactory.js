import IRacingService from 'lib/IRacing/IRacingService';
import { telemetryMapper } from 'lib/IRacing/Telemetry/TelemetryMapperFactory';
import { sessionMapper } from 'lib/IRacing/Session/SessionMapperFactory';

const POLLING_TIME = 100;
export const iRacingService = new IRacingService(telemetryMapper, sessionMapper, POLLING_TIME, POLLING_TIME);
