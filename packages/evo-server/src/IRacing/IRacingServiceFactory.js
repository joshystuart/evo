// @flow
import IRacingService from './IRacingService';
import { telemetryMapper } from './Telemetry/TelemetryMapperFactory';
import { sessionMapper } from './Session/SessionMapperFactory';

const POLLING_TIME = 100;
export const iRacingService = new IRacingService(telemetryMapper, sessionMapper, POLLING_TIME, POLLING_TIME);
