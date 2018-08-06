// @flow
import PedalsDto from 'src/modules/IRacing/Telemetry/Pedals/PedalsDto';

type PedalData = {
    Throttle: string,
    Brake: string,
    Clutch: string,
};

export default class PedalsTelemetryMapper {
    convert(data: PedalData): PedalsDto {
        // pedals telemetry
        const pedals = new PedalsDto();

        pedals.throttle = data.Throttle;
        pedals.brake = data.Brake;
        pedals.clutch = data.Clutch;

        return pedals;
    }
}
