// @flow
import type {TelemetryDto, SessionDto, DriverDto} from '@evo/common';
import React, {Component} from 'react';
import BasicTelemetryOverlay from './BasicTelemetryOverlay';
import withTelemetry from '../../Telemetry/withTelemetry';
import withCurrentDriver from '../../Drivers/withCurrentDriver';
import withCurrentSession from '../../Session/withCurrentSession';

type Props = {
    telemetry: TelemetryDto,
    currentDriver: DriverDto,
    currentSession: SessionDto,
};

export class BasicTelemetryOverlayContainer extends Component<Props> {
    render() {
        const {telemetry, currentDriver, currentSession} = this.props;
        const {pedals, gears, speed} = telemetry;

        return (
            <BasicTelemetryOverlay
                pedals={pedals}
                gears={gears}
                speed={speed}
                currentSession={currentSession}
                currentDriver={currentDriver}
            />
        );
    }
}

export default withCurrentSession(withCurrentDriver(withTelemetry(BasicTelemetryOverlayContainer)));
