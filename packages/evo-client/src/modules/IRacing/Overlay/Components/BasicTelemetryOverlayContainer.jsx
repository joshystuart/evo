// @flow
import React, { Component } from 'react';
import BasicTelemetryOverlay from './BasicTelemetryOverlay';
import withTelemetry from '../../Telemetry/withTelemetry';

type Props = {
    telemetry: TelemetryDto,
};

export class BasicTelemetryOverlayContainer extends Component<Props> {
    render() {
        const { telemetry } = this.props;
        const { pedals, gears, speed } = telemetry;

        return <BasicTelemetryOverlay pedals={pedals} gears={gears} speed={speed} />;
    }
}

export default withTelemetry(BasicTelemetryOverlayContainer);
