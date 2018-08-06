// @flow
import {combineReducers} from 'redux';
import {NAMESPACE as websocket, webSocketReducer} from 'src/modules/Utils/webSocketReducer';
import {iRacingReducers, NAMESPACE as iracing} from 'src/modules/IRacing/iRacingReducers';

export const reducers = combineReducers({
    [websocket]: webSocketReducer,
    [iracing]: iRacingReducers
});
