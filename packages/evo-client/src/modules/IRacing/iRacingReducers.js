// @flow
import {ACTIONS} from 'src/modules/Utils/webSocketMiddleware';
import {iRacingMessageHelper} from 'src/modules/IRacing/IRacingMessageHelperFactory';
import {diverMapper} from 'src/modules/IRacing/Drivers/Dao/DiverMapperFactory';
import {driverDaoHelper} from 'src/modules/IRacing/Drivers/Dao/DriverDaoHelperFactory';
import {telemetryMapper} from 'src/modules/IRacing/Telemetry/Dao/TelemetryMapperFactory';
import {sessionMapper} from 'src/modules/IRacing/Session/Dao/SessionMapperFactory';
import {sessionDaoHelper} from 'src/modules/IRacing/Session/Dao/SessionDaoHelperFactory';

export const TYPES = {
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
        const {data} = payload;
        let newState = {...state};

        if (iRacingMessageHelper.hasTelemetryData(data)) {
            newState = {
                ...newState,
                [TYPES.TELEMETRY]: telemetryMapper.convert(data)
            };
        }

        if (iRacingMessageHelper.hasDriverData(data)) {
            newState = {
                ...newState,
                [TYPES.ALL_DRIVERS]: diverMapper.convert(
                    driverDaoHelper.getAllDriverData(data)
                ),
                [TYPES.CURRENT_DRIVER]: diverMapper.convert(
                    driverDaoHelper.getCurrentDriverData(data)
                )
            };
        }

        if (iRacingMessageHelper.hasQualifyingData(data)) {
            newState = {
                ...newState,
                [TYPES.QUALIFYING]: telemetryMapper.convert(data)
            };
        }

        if (iRacingMessageHelper.hasSessionData(data)) {
            newState = {
                ...newState,
                [TYPES.SESSION]: sessionMapper.convert(
                    sessionDaoHelper.getCurrentSessionData(data)
                )
            };
        }

        return newState;
    }

    return state;
};
