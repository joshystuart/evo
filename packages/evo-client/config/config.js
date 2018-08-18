/* eslint-disable no-underscore-dangle */
import theme from './theme';

const config = window.__PRELOADED_STATE__ || {};
delete window.__PRELOADED_STATE__;

export default {
    env: config.EVO_ENV || 'development',
    host: config.EVO_OVERLAY_HOST || 'http://localhost:3000',
    api: {
        source: config.EVO_IRACING_API_SOURCE || 'stub',
        endpoint: config.EVO_IRACING_API_ENDPOINT || 'ws://127.0.0.1:3001/ws',
    },
    theme,
};
