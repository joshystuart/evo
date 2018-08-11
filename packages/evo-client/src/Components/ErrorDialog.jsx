// @flow
import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

type Props = {
    message: any,
    classes: any,
};

type State = {
    open: boolean,
};

const styles = {
    root: {}
};

class ErrorDialog extends Component<Props, State> {
    state = {
        open: true
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes, message} = this.props;
        return (
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                className={classes.root}
            >
                <DialogTitle>Error</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="secondary" autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(ErrorDialog);
