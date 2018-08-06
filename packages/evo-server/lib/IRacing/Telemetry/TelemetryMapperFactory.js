// @flow
import TelemetryMapper from 'lib/IRacing/Telemetry/TelemetryMapper';
import {pedalsTelemetryMapper} from 'lib/IRacing/Telemetry/Pedals/PedalsTelemetryMapperFactory';
import {gearsTelemetryMapper} from 'lib/IRacing/Telemetry/Gear/GearsTelemetryMapperFactory';
import {speedTelemetryMapper} from 'lib/IRacing/Telemetry/Speed/SpeedTelemetryMapperFactory';

/**
 * @type {TelemetryMapper} telemetryMapper
 */
export const telemetryMapper = new TelemetryMapper(
    pedalsTelemetryMapper,
    gearsTelemetryMapper,
    speedTelemetryMapper,
);
