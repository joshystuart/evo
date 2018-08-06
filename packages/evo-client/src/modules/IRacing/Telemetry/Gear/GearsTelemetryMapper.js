// @flow
import get from 'lodash/get';
import GearsDto from 'src/modules/IRacing/Telemetry/Gear/GearsDto';

export const DATA_POINTS = {
    CURRENT_GEAR: 'Gear'
};

export default class GearsTelemetryMapper {
    convert(data: any): GearsDto {
        const gears = new GearsDto();

        gears.currentGear = get(data, DATA_POINTS.CURRENT_GEAR);
        // gears.totalGears = get(data, DATA_POINTS.BRAKE);

        return gears;
    }
}
