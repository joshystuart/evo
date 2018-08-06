// @flow
export default class PedalsDto {
    _throttle: number = 0;
    _brake: number = 0;
    _clutch: number = 0;

    get throttle(): number {
        return this._throttle;
    }

    set throttle(value: number) {
        this._throttle = value;
    }

    get brake(): number {
        return this._brake;
    }

    set brake(value: number) {
        this._brake = value;
    }

    get clutch(): number {
        return this._clutch;
    }

    set clutch(value: number) {
        this._clutch = value;
    }
}
