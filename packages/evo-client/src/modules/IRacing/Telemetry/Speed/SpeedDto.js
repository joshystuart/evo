// @flow
export const UOM = {
    KMH: 'kmh',
    MPH: 'mph'
};
export default class SpeedDto {
    _speed: number = 0;
    _uom: UOM = UOM.KMH;

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get uom(): UOM {
        return this._uom;
    }

    set uom(value: UOM) {
        this._uom = value;
    }
}
