// @flow
import React, {Component} from 'react';
import {compose} from 'redux';
import type {SessionDto} from '@evo/common';
import connect from 'react-redux/es/connect/connect';
import withWebSocket from '../../Utils/withWebSocket';
import {NAMESPACE, TYPES} from '../iRacingReducers';
import LoadingMessage from '../../Common/Components/LoadingMessage';

export const mapStateToProps = (state: any) => ({
    currentSession: state[NAMESPACE][TYPES.CURRENT_SESSION],
    error: state[NAMESPACE][TYPES.ERROR],
});

type Props = {
    currentSession: SessionDto,
};

const withCurrentSession = (WrappedComponent: Component) =>
    class WithCurrentSession extends Component<Props> {
        render() {
            const {currentSession, ...rest} = this.props;
            if (currentSession) {
                return <WrappedComponent currentSession={currentSession} {...rest} />;
            }

            return <LoadingMessage message=" Waiting for session data..."/>;
        }
    };

export default compose(connect(mapStateToProps), withWebSocket, withCurrentSession);
