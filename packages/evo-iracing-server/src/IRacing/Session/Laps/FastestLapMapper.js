// @flow
import {LapDto} from '@evo/common';
import type {FastestLapData} from '../SessionInfoData';
import type TimeFormatter from '../../Timing/TimeFormatter';

export default class FastestLapMapper {
    _timeFormatter: TimeFormatter;

    convertMultiple = (messages: FastestLapData[]): LapDto[] => {
        const drivers = [];

        messages.forEach((message) => {
            drivers.push(this.convertSingle(message));
        });

        return drivers;
    };

    convertSingle = (message: FastestLapData): LapDto => {
        const lap = new LapDto();
        lap.id = message.FastestLap;
        lap.time = this._timeFormatter.format(message.FastestTime);
        return lap;
    };

    constructor(timeFormatter: TimeFormatter) {
        this._timeFormatter = timeFormatter;
    }

    convert(message: FastestLapData | FastestLapData[]): LapDto | LapDto[] {
        if (message instanceof Array) {
            return this.convertMultiple(message);
        }
        return this.convertSingle(message);
    }
}
