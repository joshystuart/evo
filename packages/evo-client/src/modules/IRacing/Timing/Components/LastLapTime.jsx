// @flow
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import type {DriverDto, SessionDto} from '@evo/common';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

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
    content: {
        paddingRight: 5
    }
};

function LastLapTime(props: Props) {
    const {currentSession, currentDriver, classes} = props;
    if (currentSession && currentDriver) {
        const currentStanding = currentSession.standings.find((driverStanding) => driverStanding.driver.id === currentDriver.id);
        let lastLapTime = 'N/A';
        let lastLapNumber = 0;

        if (currentStanding && currentStanding.lastLap && currentStanding.lastLap.time) {
            lastLapTime = currentStanding.lastLap.time.format;
            lastLapNumber = currentStanding.lastLap.id;
            // get delta from previous lap
        }

        return (
            <Grid container spacing={5} className={classes.root}>
                <Grid item xs={4} className={classes.content}>
                    <Card>
                        <CardContent>
                            <Typography variant="subheading" className={classes.driverNameLabel}>
                                Position: {currentStanding.position}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} className={classes.content}>
                    <Card>
                        <CardContent>
                            <Typography variant="subheading" className={classes.lastLapTime}>
                                Lap {lastLapNumber}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subheading" className={classes.lastLapTime}>
                                {lastLapTime}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }

    return null;
}

export default withStyles(styles)(LastLapTime);
