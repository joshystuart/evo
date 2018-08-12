// @flow
import TelemetryMapper from 'packages/evo-server/src/IRacing/Telemetry/TelemetryMapper';
import { pedalsTelemetryMapper } from 'packages/evo-server/src/IRacing/Telemetry/Pedals/PedalsTelemetryMapperFactory';
import { gearsTelemetryMapper } from 'packages/evo-server/src/IRacing/Telemetry/Gear/GearsTelemetryMapperFactory';
import { speedTelemetryMapper } from 'packages/evo-server/src/IRacing/Telemetry/Speed/SpeedTelemetryMapperFactory';

/**
 * @type {TelemetryMapper} telemetryMapper
 */
export const telemetryMapper = new TelemetryMapper(pedalsTelemetryMapper, gearsTelemetryMapper, speedTelemetryMapper);
