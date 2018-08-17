// @flow
import { GearsDto } from '@evo/common';

export type GearData = {
    Gear: string,
};

export default class GearsTelemetryMapper {
    convert(data: GearData): GearsDto {
        const gears = new GearsDto();

        gears.currentGear = data.Gear;

        return gears;
    }
}
