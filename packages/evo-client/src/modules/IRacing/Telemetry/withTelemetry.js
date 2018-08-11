// @flow
import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {NAMESPACE, TYPES} from 'src/modules/IRacing/iRacingReducers';
import withWebSocket from 'src/modules/Utils/withWebSocket';
import type {TelemetryDto} from '@evo/common';
import LoadingMessage from 'src/Components/LoadingMessage';

export const mapStateToProps = (state: any) => ({
    telemetry: state[NAMESPACE][TYPES.TELEMETRY]
});

export type Config = {
    showDefault: boolean
}

type Props = {
    dispatch: any,
    telemetry: TelemetryDto,
    config?: Config
};

const withTelemetry = (WrappedComponent: Component, config: Config = {}) => class WithTelemetry extends Component<Props> {
    render() {
        const {telemetry, ...rest} = this.props;
        const {showDefault = false} = config;

        if (telemetry) {
            return <WrappedComponent telemetry={telemetry} {...rest}/>;
        }

        return (<LoadingMessage message=" Waiting for telemetry data..."/>);
    }
};

export default compose(connect(mapStateToProps), withWebSocket, withTelemetry);


