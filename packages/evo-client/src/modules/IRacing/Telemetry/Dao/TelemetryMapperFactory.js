// @flow
import TelemetryMapper from './TelemetryMapper';
import {pedalsTelemetryMapper} from '../Pedals/PedalsTelemetryMapperFactory';
import {gearsTelemetryMapper} from '../Gear/GearsTelemetryMapperFactory';
import {speedTelemetryMapper} from '../Speed/SpeedTelemetryMapperFactory';

/**
 * @type {TelemetryMapper} telemetryMapper
 */
const telemetryMapper = new TelemetryMapper(
    pedalsTelemetryMapper,
    gearsTelemetryMapper,
    speedTelemetryMapper,
);

export {telemetryMapper};
