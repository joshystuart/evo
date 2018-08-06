// @flow

import React from 'react';

export default class TimeDto {
    _hours: number;
    _minutes: number;
    _seconds: number;
    _milliseconds: number;

    get hours(): number {
        return this._hours;
    }

    set hours(value: number) {
        this._hours = value;
    }

    get minutes(): number {
        return this._minutes;
    }

    set minutes(value: number) {
        this._minutes = value;
    }

    get seconds(): number {
        return this._seconds;
    }

    set seconds(value: number) {
        this._seconds = value;
    }

    get milliseconds(): number {
        return this._milliseconds;
    }

    set milliseconds(value: number) {
        this._milliseconds = value;
    }

    get format():string {
        return `${this.minutes}:${this.seconds}.${this.milliseconds}`;
    }
}
