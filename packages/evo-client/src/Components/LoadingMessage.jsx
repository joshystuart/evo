// @flow
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const DEFAULT_SIZE = 15;
type Props = {
    classes: any,
    message: string,
    loadingSize: number
};

const styles = {
    root: {
        flexGrow: 1
    },
    progress: {
        marginRight: 10
    },
    message: {}
};

function LoadingMessage(props: Props) {
    const {classes, message, loadingSize = DEFAULT_SIZE} = props;
    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="flex-start" alignItems="center">
                <Grid item>
                    <CircularProgress className={classes.progress} size={loadingSize}/>
                </Grid>
                <Grid item>
                    <Typography className={classes.message} variant="subheading">
                        {message}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(LoadingMessage);
