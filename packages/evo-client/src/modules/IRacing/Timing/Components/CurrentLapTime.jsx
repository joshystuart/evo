// @flow
import find from 'lodash.find';
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import type {DriverDto, SessionDto} from '@evo/common';

type Props = {
    currentSession: SessionDto,
    currentDriver: DriverDto,
    classes: any,
};

const styles = {
    root: {
        flexGrow: 1,
    },
    driverNameLabel: {
        color: '#fff',
        fontWeight: 700,
        fontSize: '4vmax',
    },
    lastLapTime: {
        color: '#fff',
        fontWeight: 700,
        fontSize: '4vmax',
    },
};

function CurrentLapTime(props: Props) {
    const {currentSession, currentDriver, classes} = props;
    const currentPosition = find(currentSession.positions, (position) => position.driver.id === currentDriver.id);
    let lastLap = 'N/A';

    if (currentPosition && currentPosition.lastLap) {
        lastLap = currentPosition.lastLap.time.format;
    }

    return (
        <Grid container spacing={0} className={classes.root}>
            <Grid item xs={6}>
                <Typography variant="subheading" className={classes.driverNameLabel}>
                    {currentDriver.username}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subheading" className={classes.lastLapTime}>
                    {lastLap}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(CurrentLapTime);
