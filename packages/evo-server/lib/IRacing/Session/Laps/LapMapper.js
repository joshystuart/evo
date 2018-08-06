// @flow
import type {FastestLapData} from 'lib/IRacing/Session/SessionInfoData';
import LapDto from 'lib/IRacing/Session/Laps/LapDto';
import type TimeFormatter from 'lib/IRacing/Timing/TimeFormatter';

export default class LapMapper {
    _timeFormatter: TimeFormatter;

    _convertMultiple = (messages: FastestLapData[]): LapDto[] => {
        const drivers = [];

        messages.forEach((message) => {
            drivers.push(this._convertSingle(message));
        });

        return drivers;
    };
    _convertSingle = (message: FastestLapData): LapDto => {
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

    convert(message: FastestLapData | FastestLapData[]): LapDto | LapDto[] {
        if (message instanceof Array) {
            return this._convertMultiple(message);
        }
        return this._convertSingle(message);
    }
}
