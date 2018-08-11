// @flow
import {SpeedDto} from '@evo/common';

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
