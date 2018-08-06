// @flow
import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initTelemetryData} from 'src/modules/IRacing/Telemetry/telemetryActions';
import {NAMESPACE, TYPES} from 'src/modules/IRacing/iRacingReducers';
import withWebSocket from 'src/modules/Utils/withWebSocket';
import type TelemetryDto from 'src/modules/IRacing/Telemetry/TelemetryDto';

export const mapStateToProps = (state: any) => ({
    telemetry: state[NAMESPACE][TYPES.TELEMETRY]
});

type Props = {
    dispatch: any,
    telemetry: TelemetryDto,
};

const withTelemetry = (WrappedComponent: Component) => {
    return class WithTelemetry extends Component<Props> {
        componentDidMount() {
            const {dispatch, telemetry} = this.props;
            if (!telemetry) {
                dispatch(initTelemetryData());
            }
        }

        render() {
            const {telemetry, ...rest} = this.props;
            if (telemetry) {
                return <WrappedComponent telemetry={telemetry} {...rest}/>;
            }

            return <div>Waiting for telemetry...</div>;
        }
    };
};

export default compose(connect(mapStateToProps), withWebSocket, withTelemetry);


