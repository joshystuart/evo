// @flow
import { webSocketDao } from './WebSocketDaoFactory';
import { EVENTS as WEBSOCKET_EVENTS } from './WebSocketDao';

const NAMESPACE = 'WEBSOCKET';

export const ACTIONS = {
    CONNECT: `${NAMESPACE}:CONNECT`,
    SEND: `${NAMESPACE}:SEND`,
    CONNECTED: `${NAMESPACE}:CONNECTED`,
    CLOSED: `${NAMESPACE}:CLOSED`,
    MESSAGE: `${NAMESPACE}:MESSAGE`,
    ERROR: `${NAMESPACE}:ERROR`,
    DISCONNECT: `${NAMESPACE}:DISCONNECT`,
};

export const webSocketMiddleware = ({ dispatch }) => (next) => (action) => {
    switch (action.type) {
        // User request to connect
        case ACTIONS.CONNECT:
            // Attach the callbacks
            webSocketDao.on(WEBSOCKET_EVENTS.CONNECTED, () => dispatch({ type: ACTIONS.CONNECTED }));
            webSocketDao.on(WEBSOCKET_EVENTS.CLOSED, (event) => dispatch({ type: ACTIONS.CLOSED, payload: event }));
            webSocketDao.on(WEBSOCKET_EVENTS.MESSAGE, (event) => dispatch({ type: ACTIONS.MESSAGE, payload: event }));
            webSocketDao.on(WEBSOCKET_EVENTS.ERROR, (event) => dispatch({ type: ACTIONS.ERROR, payload: event }));
            webSocketDao.connect();

            break;

        // User request to send a message
        case ACTIONS.SEND:
            webSocketDao.send(action.payload);
            break;

        // User request to disconnect
        case ACTIONS.DISCONNECT:
            webSocketDao.close();
            break;

        default:
            break;
    }

    return next(action);
};
