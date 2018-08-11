// @flow
import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {NAMESPACE, TYPES} from 'src/modules/IRacing/iRacingReducers';
import withWebSocket from 'src/modules/Utils/withWebSocket';
import type TelemetryDto from '@evo/server/lib/IRacing/Telemetry/TelemetryDto';
import LoadingMessage from 'src/Components/LoadingMessage';

export const mapStateToProps = (state: any) => ({
    telemetry: state[NAMESPACE][TYPES.TELEMETRY]
});

type Props = {
    dispatch: any,
    telemetry: TelemetryDto,
};

const withTelemetry = (WrappedComponent: Component) => class WithTelemetry extends Component<Props> {
    render() {
        const {telemetry, ...rest} = this.props;
        if (telemetry) {
            return <WrappedComponent telemetry={telemetry} {...rest}/>;
        }

        return (<LoadingMessage message=" Waiting for telemetry data..."/>);
    }
};

export default compose(connect(mapStateToProps), withWebSocket, withTelemetry);


