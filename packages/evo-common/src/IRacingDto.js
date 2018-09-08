// @flow
import SessionDto from './Session/SessionDto';
import TelemetryDto from './Telemetry/TelemetryDto';

export default class IRacingDto {
    sessions: SessionDto[] = [];
    telemetry: TelemetryDto;
}
