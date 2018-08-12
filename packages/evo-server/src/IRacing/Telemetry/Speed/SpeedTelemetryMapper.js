// @flow
import SpeedDto, { UOM } from 'packages/evo-server/src/IRacing/Telemetry/Speed/SpeedDto';

export type SpeedData = {
    Speed: string,
};
// I'm not sure why, but the speed coming back from the telemetry is out by a factor of 3.61. So weird.
const SPEED_MODIFIER = 3.61;

export default class SpeedTelemetryMapper {
    convert(data: SpeedData): SpeedDto {
        const speed = new SpeedDto();

        speed.speed = data.Speed * SPEED_MODIFIER;
        speed.uom = UOM.KMH;

        return speed;
    }
}
