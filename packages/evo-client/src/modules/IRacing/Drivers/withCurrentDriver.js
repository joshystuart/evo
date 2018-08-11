// @flow
import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {NAMESPACE, TYPES} from 'src/modules/IRacing/iRacingReducers';
import withWebSocket from 'src/modules/Utils/withWebSocket';
import type DriverDto from '@evo/server/lib/IRacing/Drivers/DriverDto';
import LoadingMessage from 'src/Components/LoadingMessage';

export const mapStateToProps = (state: any) => ({
    currentDriver: state[NAMESPACE][TYPES.CURRENT_DRIVER],
    error: state[NAMESPACE][TYPES.ERROR]
});

type Props = {
    dispatch: any,
    error: string,
    currentDriver: DriverDto,
};

const withCurrentDriver = (WrappedComponent: Component) => class WithDriver extends Component<Props> {
    render() {
        const {currentDriver, error, ...rest} = this.props;

        if (error) {
            return (
                <div>
                </div>
            );
        }

        if (currentDriver) {
            return <WrappedComponent currentDriver={currentDriver} {...rest}/>;
        }

        return (<LoadingMessage message=" Waiting for driver data..."/>);
    }
};

export default compose(connect(mapStateToProps), withWebSocket, withCurrentDriver);


