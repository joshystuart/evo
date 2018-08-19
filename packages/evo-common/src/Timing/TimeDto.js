// @flow

export default class TimeDto {
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    raw: number;

    get format(): string {
        return `${this.minutes}:${this.seconds}.${this.milliseconds}`;
    }
}
