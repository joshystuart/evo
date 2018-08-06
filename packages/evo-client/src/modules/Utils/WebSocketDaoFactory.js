// @flow
import WebSocketDao from 'src/modules/Utils/WebSocketDao';
import config from 'src/config/config';

/**
 * @type {WebSocketDao} webSocketDao
 */
const webSocketDao = new WebSocketDao(config.api.endpoint);

export {webSocketDao};
