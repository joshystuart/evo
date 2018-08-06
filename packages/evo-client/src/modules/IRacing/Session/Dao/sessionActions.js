// @flow
import {DATA} from 'src/modules/IRacing/IRacingServiceConstants';
import {ACTIONS} from 'src/modules/Utils/webSocketMiddleware';

export function getCurrentSession() {
    return {
        type: ACTIONS.SEND,
        payload: {
            fps: 1,
            requestParams: [DATA.SESSION],
            requestParamsOnce: [DATA.DRIVER]
        }
    };
}
