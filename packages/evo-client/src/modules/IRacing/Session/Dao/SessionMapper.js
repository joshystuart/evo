// @flow
import SessionDto from 'src/modules/IRacing/Session/SessionDto';
import type {SessionData} from 'src/modules/IRacing/Session/Dao/SessionInfoData';
import type LapMapper from 'src/modules/IRacing/Session/Laps/LapMapper';

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
        console.log('----------', message);
        const session = new SessionDto();
        session.type = message.SessionType;
        session.fastestLaps = this._lapMapper.convert(message.ResultsFastestLap);
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
