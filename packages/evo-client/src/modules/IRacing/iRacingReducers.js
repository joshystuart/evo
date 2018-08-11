// @flow
import {ACTIONS} from 'src/modules/Utils/webSocketMiddleware';
import {EVENTS} from '@evo/server/lib/IRacing/IRacingConstants';
import {telemetryMapper} from 'src/modules/IRacing/Telemetry/Dao/TelemetryMapperFactory';

export const TYPES = {
    ERROR: 'error',
    CAMERA: 'camera',
    RADIO: 'radio',
    TELEMETRY: 'telemetry',
    ALL_DRIVERS: 'allDrivers',
    CURRENT_DRIVER: 'currentDriver',
    SESSION: 'session',
    QUALIFYING: 'qualifying',
    WEEKEND: 'weekend'
};

export type Action = {
    type: string,
    payload: {
        data: SessionInfoData | DriverInfoData | any
    }
}

export const NAMESPACE = 'iracing';

export const iRacingReducers = (state = {}, action) => {
    const {payload} = action;

    // look at the data and try to figure out what it is.
    if (action.type === ACTIONS.MESSAGE) {
        const {data, type} = payload;
        let newState = {...state};

        if (type === EVENTS.TELEMETRY) {
            newState = {
                ...newState,
                [TYPES.TELEMETRY]: telemetryMapper.convert(data)
            };
        }

        // if (iRacingMessageHelper.hasTelemetryData(data)) {
        //     newState = {
        //         ...newState,
        //         [TYPES.TELEMETRY]: telemetryMapper.convert(data)
        //     };
        // }
        //
        // if (iRacingMessageHelper.hasDriverData(data)) {
        //     newState = {
        //         ...newState,
        //         [TYPES.ALL_DRIVERS]: diverMapper.convert(
        //             driverDaoHelper.getAllDriverData(data)
        //         ),
        //         [TYPES.CURRENT_DRIVER]: diverMapper.convert(
        //             driverDaoHelper.getCurrentDriverData(data)
        //         )
        //     };
        // }
        //
        // if (iRacingMessageHelper.hasQualifyingData(data)) {
        //     newState = {
        //         ...newState,
        //         [TYPES.QUALIFYING]: telemetryMapper.convert(data)
        //     };
        // }
        //
        // if (iRacingMessageHelper.hasSessionData(data)) {
        //     newState = {
        //         ...newState,
        //         [TYPES.SESSION]: sessionMapper.convert(
        //             sessionDaoHelper.getCurrentSessionData(data)
        //         )
        //     };
        // }

        return newState;
    } else if (action.type === ACTIONS.ERROR) {
        // TODO make the error contextual
        const newState = {...state};
        newState[TYPES.ERROR] = payload;
        return newState;
    }
    return state;
};
