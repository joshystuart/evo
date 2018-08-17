// @flow
import { PedalsDto } from '@evo/common';

export type PedalData = {
    throttle: string,
    brake: string,
    clutch: string,
};

export default class PedalsTelemetryMapper {
    convert(data: PedalData): PedalsDto {
        // pedals telemetry
        const pedals = new PedalsDto();

        pedals.throttle = data.throttle;
        pedals.brake = data.brake;
        pedals.clutch = data.clutch;

        return pedals;
    }
}
