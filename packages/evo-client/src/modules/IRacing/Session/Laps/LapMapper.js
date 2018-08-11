// @flow
import type {FastedLapData} from 'src/modules/IRacing/Session/Dao/SessionInfoData';
import {LapDto} from '@evo/common';
import type TimeFormatter from 'src/modules/IRacing/Timing/TimeFormatter';

export default class LapMapper {
    _timeFormatter: TimeFormatter;

    _convertMultiple = (messages: FastedLapData[]): LapDto[] => {
        const drivers = [];

        messages.forEach((message) => {
            drivers.push(this._convertSingle(message));
        });

        return drivers;
    };
    _convertSingle = (message: FastedLapData): LapDto => {
        const lap = new LapDto();
        lap.id = message.FastestLap;
        lap.time = this._timeFormatter.format(message.FastestTime);

        // TODO use the driver mapper and some kind of state lookup to augment this
        lap.driver = message.CarIdx;
        return lap;
    };

    constructor(timeFormatter: TimeFormatter) {
        this._timeFormatter = timeFormatter;
    }

    convert(message: FastedLapData | FastedLapData[]): LapDto | LapDto[] {
        if (message instanceof Array) {
            return this._convertMultiple(message);
        }
        return this._convertSingle(message);
    }
}
