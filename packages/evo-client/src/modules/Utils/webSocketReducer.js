// @flow
import { ACTIONS } from './webSocketMiddleware';

export const NAMESPACE = 'websocket';

export const webSocketReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.CONNECTED:
            return {
                isConnected: true,
                ...state,
            };
        case ACTIONS.ERROR:
            return {
                hasError: true,
                ...state,
            };
        default:
            return state;
    }
};
