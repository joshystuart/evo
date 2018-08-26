// @flow
import {SessionDto, RaceSessionDto, QualifyingSessionDto, PracticeSessionDto} from '@evo/common';

const SESSION_TYPES = {
    RACE: 'Race',
    QUALIFYING: 'Qualifying',
    PRACTICE: 'Test',
}

export default class SessionProvider {
    createInstance(fullSessionData: FullSessionInfoData): SessionDto | SessionDto[] {
        // const sesstionType = data.SessionInfo.Re
    }
}
