// @flow
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import withCurrentSession from 'src/modules/IRacing/Session/withCurrentSession';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import type SessionDto from 'src/modules/IRacing/Session/SessionDto';
import type DriverDto from 'src/modules/IRacing/Drivers/DriverDto';

type Props = {
    currentSession: SessionDto,
    currentDriver: DriverDto,
    classes: any
};

const styles = {
    root: {
        flexGrow: 1
    },
    driverNameLabel: {}
};

function CurrentLapTime(props: Props) {
    const {currentSession, currentDriver, classes} = props;

    const fastestLap = currentSession.fastestLaps[0];

    return (
        <Grid container spacing={0} className={classes.root}>
            <Grid item xs={6}>
                <Typography
                    variant="subheading"
                    className={classes.driverNameLabel}
                >
                    {currentDriver.username}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography
                    variant="subheading"
                    className={classes.driverNameLabel}
                >
                    {fastestLap.time.format}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(withCurrentSession(CurrentLapTime));
