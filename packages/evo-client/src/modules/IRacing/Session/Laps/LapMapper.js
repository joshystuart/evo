// @flow
import {LapDto, TimeDto} from '@evo/common';

export default class LapMapper {
    convertMultiple = (messages: LapDto[]): LapDto[] => {
        const drivers = [];

        messages.forEach((message) => {
            drivers.push(this.convertSingle(message));
        });

        return drivers;
    };

    convertSingle = (message: LapDto): LapDto => {
        const time = new TimeDto();
        time.milliseconds = message.time.milliseconds;
        time.seconds = message.time.seconds;
        time.minutes = message.time.minutes;
        time.hours = message.time.hours;

        const lap = new LapDto();

        lap.id = message.id;
        lap.time = time;

        return lap;
    };

    convert(message: LapDto | LapDto[]): LapDto | LapDto[] {
        if (message instanceof Array) {
            return this.convertMultiple(message);
        }
        return this.convertSingle(message);
    }
}
