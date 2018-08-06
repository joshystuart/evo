import {ACTIONS} from 'src/modules/Utils/webSocketMiddleware';

export const NAMESPACE = 'websocket';

export const webSocketReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.CONNECTED:
            return {
                isConnected: true,
                ...state
            };
        default:
            return state;
    }
};
