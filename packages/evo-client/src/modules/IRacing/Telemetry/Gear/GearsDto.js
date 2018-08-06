// @flow
export default class GearsDto {
    _currentGear: number | string | null = null;
    _allGears: (number | string)[] | null = null;

    get currentGear(): number | string | null {
        return this._currentGear;
    }

    set currentGear(value: number | string | null) {
        this._currentGear = value;
    }

    get allGears(): (number | string)[] | null {
        return this._allGears;
    }

    set allGears(value: Array) {
        this._allGears = value;
    }
}
