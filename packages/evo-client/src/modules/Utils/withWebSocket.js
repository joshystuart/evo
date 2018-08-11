// @flow
import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {ACTIONS} from 'src/modules/Utils/webSocketMiddleware';
import {NAMESPACE} from 'src/modules/Utils/webSocketReducer';
import LoadingMessage from 'src/Components/LoadingMessage';

export const mapStateToProps = (state: any) => ({
    isWebsocketConnected: state[NAMESPACE].isConnected
});

type Props = {
    dispatch: any,
    isWebsocketConnected: boolean,
};

const withWebSocket = (WrappedComponent: Component) => class WithWebSocket extends Component<Props> {
    componentDidMount() {
        const {dispatch, isWebsocketConnected} = this.props;
        if (!isWebsocketConnected) {
            dispatch({type: ACTIONS.CONNECT});
        }
    }

    render() {
        const {isWebsocketConnected, ...rest} = this.props;
        if (isWebsocketConnected) {
            return <WrappedComponent {...rest}/>;
        }

        return (<LoadingMessage message=" Waiting for websocket connection..."/>);
    }
};

export default compose(connect(mapStateToProps), withWebSocket);


