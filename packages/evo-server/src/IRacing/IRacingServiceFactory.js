import IRacingService from 'packages/evo-server/src/IRacing/IRacingService';
import { telemetryMapper } from 'packages/evo-server/src/IRacing/Telemetry/TelemetryMapperFactory';
import { sessionMapper } from 'packages/evo-server/src/IRacing/Session/SessionMapperFactory';

const POLLING_TIME = 100;
export const iRacingService = new IRacingService(telemetryMapper, sessionMapper, POLLING_TIME, POLLING_TIME);
