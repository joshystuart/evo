// @flow
import GearsDto from 'packages/evo-server/src/IRacing/Telemetry/Gear/GearsDto';

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
