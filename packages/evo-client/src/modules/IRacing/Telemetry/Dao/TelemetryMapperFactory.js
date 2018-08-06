// @flow
import TelemetryMapper from 'src/modules/IRacing/Telemetry/Dao/TelemetryMapper';
import {pedalsTelemetryMapper} from 'src/modules/IRacing/Telemetry/Pedals/PedalsTelemetryMapperFactory';
import {gearsTelemetryMapper} from 'src/modules/IRacing/Telemetry/Gear/GearsTelemetryMapperFactory';
import {speedTelemetryMapper} from 'src/modules/IRacing/Telemetry/Speed/SpeedTelemetryMapperFactory';

/**
 * @type {TelemetryMapper} telemetryMapper
 */
const telemetryMapper = new TelemetryMapper(
    pedalsTelemetryMapper,
    gearsTelemetryMapper,
    speedTelemetryMapper,
);

export {telemetryMapper};
