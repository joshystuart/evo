// @flow
import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import type {TelemetryDto} from '@evo/common';
import {NAMESPACE, TYPES} from '../iRacingReducers';
import withWebSocket from '../../Utils/withWebSocket';
import LoadingMessage from '../../Common/Components/LoadingMessage';

export const mapStateToProps = (state: any) => ({
    telemetry: state[NAMESPACE][TYPES.TELEMETRY],
});

export type Config = {
    showDefault: boolean,
};

type Props = {
    telemetry: TelemetryDto,
    config?: Config,
};

const withTelemetry = (WrappedComponent: Component) =>
    class WithTelemetry extends Component<Props> {
        render() {
            const {telemetry, ...rest} = this.props;

            if (telemetry) {
                return <WrappedComponent telemetry={telemetry} {...rest} />;
            }

            return <LoadingMessage message=" Waiting for telemetry data from iRacing..."/>;
        }
    };

export default compose(connect(mapStateToProps), withWebSocket, withTelemetry);
