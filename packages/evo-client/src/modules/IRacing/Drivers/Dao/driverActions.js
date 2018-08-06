// @flow
import {DATA} from 'src/modules/IRacing/IRacingServiceConstants';
import {ACTIONS} from 'src/modules/Utils/webSocketMiddleware';

export function getCurrentDriver() {
    return {
        type: ACTIONS.SEND,
        payload: {
            fps: 1,
            requestParams: [],
            requestParamsOnce: [DATA.DRIVER]
        }
    };
}
