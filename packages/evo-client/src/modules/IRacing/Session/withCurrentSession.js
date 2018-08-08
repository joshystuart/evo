// @flow
import React, {Component} from 'react';
import {compose} from 'redux';
import withWebSocket from 'src/modules/Utils/withWebSocket';
import withCurrentDriver from 'src/modules/IRacing/Drivers/withCurrentDriver';
import {NAMESPACE, TYPES} from 'src/modules/IRacing/iRacingReducers';
import connect from 'react-redux/es/connect/connect';
import {getCurrentSession} from 'src/modules/IRacing/Session/Dao/sessionActions';
import type SessionDto from '@evo/server/lib/IRacing/Session/SessionDto';

export const mapStateToProps = (state: any) => ({
    currentSession: state[NAMESPACE][TYPES.SESSION]
});

type Props = {
    dispatch: any,
    currentSession: SessionDto,
};

const withCurrentSession = (WrappedComponent: Component) => class WithCurrentSession extends Component<Props> {
    componentDidMount() {
        const {dispatch, currentSession} = this.props;
        if (!currentSession) {
            dispatch(getCurrentSession());
        }
    }

    render() {
        const {currentSession, ...rest} = this.props;
        if (currentSession) {
            return <WrappedComponent currentSession={currentSession} {...rest} />;
        }

        return <div>Waiting for session data...</div>;
    }
};

export default compose(connect(mapStateToProps), withWebSocket, withCurrentDriver, withCurrentSession);


