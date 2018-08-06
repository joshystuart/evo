// @flow
import {OPTIONS} from 'src/modules/IRacing/IRacingServiceConstants';
import {EVENTS} from 'src/modules/IRacing/Telemetry/TelemetryConstants';
import {ACTIONS} from 'src/modules/Utils/webSocketMiddleware';

export function initTelemetryData(fps: number = OPTIONS.FPS) {
    return {
        type: ACTIONS.SEND,
        payload: {
            fps,
            requestParams: [EVENTS.TELEMETRY]
        }
    };
}
