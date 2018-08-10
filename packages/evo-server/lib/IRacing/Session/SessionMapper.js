// @flow
import SessionDto from 'lib/IRacing/Session/SessionDto';
import type { SessionData } from 'lib/IRacing/Session/SessionInfoData';
import type LapMapper from 'lib/IRacing/Session/Laps/LapMapper';

export default class SessionMapper {
    _lapMapper: LapMapper;
    _convertMultiple = (messages: SessionData[]): SessionDto[] => {
        const drivers = [];

        messages.forEach((message) => {
            drivers.push(this._convertSingle(message));
        });

        return drivers;
    };
    _convertSingle = (message: SessionData): SessionDto => {
        const session = new SessionDto();
        session.type = message.SessionType;
        if (message.ResultsFastestLap) {
            session.fastestLaps = this._lapMapper.convert(message.ResultsFastestLap);
        }
        return session;
    };

    constructor(lapMapper: LapMapper) {
        this._lapMapper = lapMapper;
    }

    convert(message: SessionData | SessionData[]): SessionDto | SessionDto[] {
        if (message instanceof Array) {
            return this._convertMultiple(message);
        }
        return this._convertSingle(message);
    }
}
