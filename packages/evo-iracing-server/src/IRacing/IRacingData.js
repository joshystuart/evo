// @flow
import type {SessionInfoData} from './Session/SessionInfoData';
import type {DriverInfoData} from './Drivers/DriverInfoData';
import type {TelemetryData} from './Telemetry/TelemetryData';

export type IRacingData = {
    SessionInfo: SessionInfoData,
    DriverInfo: DriverInfoData,
    TelemetryData: TelemetryData,
};
