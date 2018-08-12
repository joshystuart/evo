// @flow
import React, {Component} from 'react';
import {compose} from 'redux';
import withWebSocket from 'src/modules/Utils/withWebSocket';
import withCurrentDriver from 'src/modules/IRacing/Drivers/withCurrentDriver';
import {NAMESPACE, TYPES} from 'src/modules/IRacing/iRacingReducers';
import connect from 'react-redux/es/connect/connect';
import type {SessionDto} from '@evo/common';
import LoadingMessage from 'src/modules/Common/Components/LoadingMessage';

export const mapStateToProps = (state: any) => ({
    currentSession: state[NAMESPACE][TYPES.SESSION]
});

type Props = {
    dispatch: any,
    currentSession: SessionDto,
};

const withCurrentSession = (WrappedComponent: Component) => class WithCurrentSession extends Component<Props> {
    render() {
        const {currentSession, ...rest} = this.props;
        if (currentSession) {
            return <WrappedComponent currentSession={currentSession} {...rest} />;
        }

        return (<LoadingMessage message=" Waiting for session data..."/>);
    }
};

export default compose(connect(mapStateToProps), withWebSocket, withCurrentDriver, withCurrentSession);


