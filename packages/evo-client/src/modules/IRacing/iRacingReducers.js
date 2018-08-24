// @flow
import {IRacingConstants} from '@evo/common';
import {ACTIONS} from '../Utils/webSocketMiddleware';
import {telemetryMapper} from './Telemetry/Dao/TelemetryMapperFactory';
import {sessionMapper} from './Session/Dao/SessionMapperFactory';

export const TYPES = {
    ERROR: 'error',
    CAMERA: 'camera',
    RADIO: 'radio',
    TELEMETRY: 'telemetry',
    ALL_DRIVERS: 'allDrivers',
    CURRENT_DRIVER: 'currentDriver',
    SESSIONS: 'sessions',
    CURRENT_SESSION: 'currentSession',
    QUALIFYING: 'qualifying',
    WEEKEND: 'weekend',
};

export type Action = {
    type: string,
    payload: {
        data: SessionInfoData | DriverInfoData | any,
    },
};

export const NAMESPACE = 'iracing';

export const iRacingReducers = (state = {}, action) => {
    const {payload} = action;

    // look at the data and try to figure out what it is.
    if (action.type === ACTIONS.MESSAGE) {
        const {data, type} = payload;
        let newState = {...state};

        if (type === IRacingConstants.TELEMETRY) {
            newState = {
                ...newState,
                [TYPES.TELEMETRY]: telemetryMapper.convert(data),
            };
        }

        if (type === IRacingConstants.SESSION) {
            const sessions = sessionMapper.convert(data) || [];
            if (sessions.length > 0) {
                const currentSession = sessions.find((session) => session.isActive === true) || sessions[0];

                newState = {
                    ...newState,
                    [TYPES.SESSIONS]: sessions,
                    [TYPES.CURRENT_SESSION]: currentSession,
                    [TYPES.CURRENT_DRIVER]: currentSession.currentDriver,
                };
            }
        }

        return newState;
    } else if (action.type === ACTIONS.ERROR) {
        // TODO make the error contextual
        const newState = {...state};
        newState[TYPES.ERROR] = payload;
        return newState;
    }

    return state;
};
