// @flow
import IRacingService from './IRacingService';
import {iRacingDataMapper} from './IRacingDataMapperFactory';

const POLLING_TIME = 200;
export const iRacingService = new IRacingService(iRacingDataMapper, POLLING_TIME, POLLING_TIME);
