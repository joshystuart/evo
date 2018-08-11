// @flow
import React, {Component} from 'react';
import BasicTelemetryOverlay from 'src/modules/IRacing/Overlay/Components/BasicTelemetryOverlay';
import withTelemetry from 'src/modules/IRacing/Telemetry/withTelemetry';

type Props = {
    telemetry: TelemetryDto,
};

export class BasicTelemetryOverlayContainer extends Component<Props> {
    render() {
        const {telemetry} = this.props;
        const {pedals, gears, speed} = telemetry;

        return (
            <BasicTelemetryOverlay pedals={pedals} gears={gears} speed={speed}/>
        );
    }
}

export default withTelemetry(BasicTelemetryOverlayContainer);
