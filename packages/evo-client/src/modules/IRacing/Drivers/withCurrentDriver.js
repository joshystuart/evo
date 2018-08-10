// @flow
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {NAMESPACE, TYPES} from 'src/modules/IRacing/iRacingReducers';
import withWebSocket from 'src/modules/Utils/withWebSocket';
import type DriverDto from '@evo/server/lib/IRacing/Drivers/DriverDto';
import {getCurrentDriver} from 'src/modules/IRacing/Drivers/Dao/driverActions';

export const mapStateToProps = (state: any) => ({
    currentDriver: state[NAMESPACE][TYPES.CURRENT_DRIVER],
    error: state[NAMESPACE][TYPES.ERROR]
});

type Props = {
    dispatch: any,
    error: string,
    currentDriver: DriverDto,
};
type State = {
    boolean: any,
};

const withCurrentDriver = (WrappedComponent: Component) => class WithDriver extends Component<Props, State> {
    state = {
        open: true
    };
    handleClose = () => {
        this.setState({open: false});
    };

    componentDidMount() {
        const {dispatch, currentDriver} = this.props;
        if (!currentDriver) {
            dispatch(getCurrentDriver());
        }
    }

    render() {
        const {currentDriver, error, ...rest} = this.props;

        if (error) {
            return (
                <div>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <DialogTitle>Error</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                {error}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="secondary" autoFocus>
                                Ok
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            );
        }

        if (currentDriver) {
            return <WrappedComponent currentDriver={currentDriver} {...rest}/>;
        }

        return <div>Waiting for driver data...</div>;
    }
};

export default compose(connect(mapStateToProps), withWebSocket, withCurrentDriver);


