// @flow
import IRacingService from 'src/modules/IRacing/IRacingService';
import {webSocketDao} from 'src/modules/Utils/WebSocketDaoFactory';

/**
 * @type {IRacingService} iRacingService
 */
const iRacingService = new IRacingService(webSocketDao);

export {iRacingService};
