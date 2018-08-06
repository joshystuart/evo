// @flow
export const UOM = {
    KMH: 'kmh',
    MPH: 'mph'
};

export default class SpeedDto {
    speed: number = 0;
    uom: UOM = UOM.KMH;
}
