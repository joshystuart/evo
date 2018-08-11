// @flow
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BasicTelemetryOverlayContainer from 'src/modules/IRacing/Overlay/Components/BasicTelemetryOverlayContainer';

type Props = {
    classes: any,
};

const styles = {
    root: {
        flexGrow: 1
    }
};

function BasicTelemetryOverlayScene(props: Props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <BasicTelemetryOverlayContainer/>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(BasicTelemetryOverlayScene);
