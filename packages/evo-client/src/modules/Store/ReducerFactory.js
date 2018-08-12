// @flow
import {combineReducers} from 'redux';
import {NAMESPACE as websocket, webSocketReducer} from '../Utils/webSocketReducer';
import {iRacingReducers, NAMESPACE as iracing} from '../IRacing/iRacingReducers';

export const reducers = combineReducers({
    [websocket]: webSocketReducer,
    [iracing]: iRacingReducers
});
