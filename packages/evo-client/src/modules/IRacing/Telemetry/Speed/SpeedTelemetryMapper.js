// @flow
import SpeedDto from '@evo/server/lib/IRacing/Telemetry/Speed/SpeedDto';

export type SpeedData = {
    speed: string,
    uom: string,
};

export default class SpeedTelemetryMapper {
    convert(data: SpeedData): SpeedDto {
        const speed = new SpeedDto();

        speed.speed = data.speed;
        speed.uom = data.uom;

        return speed;
    }
}
