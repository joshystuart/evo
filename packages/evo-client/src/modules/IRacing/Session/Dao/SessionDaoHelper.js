// @flow
import get from 'lodash/get';
import {DATA} from 'src/modules/IRacing/IRacingServiceConstants';
import type {SessionData, SessionInfoData} from 'src/modules/IRacing/Session/Dao/SessionInfoData';

export default class SessionDaoHelper {
    getSessionInfoData(data: Object): SessionInfoData {
        return get(data, DATA.SESSION);
    }

    getAllSessionsData(data: Object): SessionData[] {
        const sessionInfoData = this.getSessionInfoData(data);
        return sessionInfoData.Sessions;
    }

    getCurrentSessionData(data: Object): SessionData {
        const sessionsData = this.getAllSessionsData(data);
        return sessionsData[0];
    }
}
