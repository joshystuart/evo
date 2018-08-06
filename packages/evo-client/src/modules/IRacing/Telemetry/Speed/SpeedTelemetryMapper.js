// @flow
import get from 'lodash/get';
import SpeedDto, {UOM} from 'src/modules/IRacing/Telemetry/Speed/SpeedDto';

export const DATA_POINTS = {
    SPEED: 'Speed'
};

export default class SpeedTelemetryMapper {
    convert(data: any): SpeedDto {
        const speed = new SpeedDto();

        speed.speed = get(data, DATA_POINTS.SPEED);
        speed.uom = UOM.KMH;

        return speed;
    }
}
