// @flow
import {GearsDto} from '@evo/common';

export type GearsData = {
    currentGear: string,
    allGears?: string,
};

export default class GearsTelemetryMapper {
    convert(data: GearsData): GearsDto {
        const gears = new GearsDto();

        gears.currentGear = data.currentGear;
        gears.allGears = data.allGears;

        return gears;
    }
}
