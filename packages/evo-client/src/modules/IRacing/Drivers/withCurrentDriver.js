// @flow
import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {NAMESPACE, TYPES} from 'src/modules/IRacing/iRacingReducers';
import withWebSocket from 'src/modules/Utils/withWebSocket';
import type DriverDto from '@evo/server/lib/IRacing/Drivers/DriverDto';
import {getCurrentDriver} from 'src/modules/IRacing/Drivers/Dao/driverActions';

export const mapStateToProps = (state: any) => ({
    currentDriver: state[NAMESPACE][TYPES.CURRENT_DRIVER]
});

type Props = {
    dispatch: any,
    currentDriver: DriverDto,
};

const withCurrentDriver = (WrappedComponent: Component) => class WithDriver extends Component<Props> {
    componentDidMount() {
        const {dispatch, currentDriver} = this.props;
        if (!currentDriver) {
            dispatch(getCurrentDriver());
        }
    }

    render() {
        const {currentDriver, ...rest} = this.props;
        if (currentDriver) {
            return <WrappedComponent currentDriver={currentDriver} {...rest}/>;
        }

        return <div>Waiting for driver data...</div>;
    }
};

export default compose(connect(mapStateToProps), withWebSocket, withCurrentDriver);


