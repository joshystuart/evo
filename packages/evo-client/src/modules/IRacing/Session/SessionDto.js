// @flow
import type DriverPositionDto from 'src/modules/IRacing/Session/DriverPositionDto';
import type LapDto from 'src/modules/IRacing/Session/Laps/LapDto';

export type SessionType = {

}

export default class SessionDto {
    _id: string;
    _type: string;
    // _trackState: string; TODO
    _totalNumberOfLaps: number | null = null;
    _numberOfLapsCompleted: number | null = null;
    _positions: DriverPositionDto[];
    _fastestLaps: LapDto[];

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get totalNumberOfLaps(): number | null {
        return this._totalNumberOfLaps;
    }

    set totalNumberOfLaps(value: number | null) {
        this._totalNumberOfLaps = value;
    }

    get numberOfLapsCompleted(): number | null {
        return this._numberOfLapsCompleted;
    }

    set numberOfLapsCompleted(value: number | null) {
        this._numberOfLapsCompleted = value;
    }

    get positions(): DriverPositionDto[] {
        return this._positions;
    }

    set positions(value: Array) {
        this._positions = value;
    }

    get fastestLaps(): LapDto[] {
        return this._fastestLaps;
    }

    set fastestLaps(value: Array) {
        this._fastestLaps = value;
    }
}
