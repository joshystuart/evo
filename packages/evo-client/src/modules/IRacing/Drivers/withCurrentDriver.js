// @flow
import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import type { DriverDto } from '@evo/common';
import { NAMESPACE, TYPES } from '../iRacingReducers';
import withWebSocket from '../../Utils/withWebSocket';
import LoadingMessage from '../../Common/Components/LoadingMessage';

export const mapStateToProps = (state: any) => ({
    currentDriver: state[NAMESPACE][TYPES.CURRENT_DRIVER],
    error: state[NAMESPACE][TYPES.ERROR],
});

type Props = {
    dispatch: any,
    error: string,
    currentDriver: DriverDto,
};

const withCurrentDriver = (WrappedComponent: Component) =>
    class WithDriver extends Component<Props> {
        render() {
            const { currentDriver, error, ...rest } = this.props;

            if (error) {
                return <div />;
            }

            if (currentDriver) {
                return <WrappedComponent currentDriver={currentDriver} {...rest} />;
            }

            return <LoadingMessage message=" Waiting for driver data..." />;
        }
    };

export default compose(connect(mapStateToProps), withWebSocket, withCurrentDriver);
