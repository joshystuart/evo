// @flow
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {reducers} from 'src/modules/Store/ReducerFactory';
import {webSocketMiddleware} from 'src/modules/Utils/webSocketMiddleware';
import {ENV} from 'src/modules/Utils/ApplicationContstants';
import config from 'src/config/config';

const middlewareConfig = [thunk, webSocketMiddleware];
let middleware;

if (config.env === ENV.DEVELOPMENT) {
    middlewareConfig.push(createLogger());
    middleware = composeWithDevTools(applyMiddleware(...middlewareConfig));
} else {
    middleware = applyMiddleware(...middlewareConfig);
}


export const store = createStore(reducers, /* preloadedState, */ middleware);
