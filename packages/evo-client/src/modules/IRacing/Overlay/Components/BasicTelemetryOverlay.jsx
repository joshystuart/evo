// @flow
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {withStyles} from '@material-ui/core/styles';
import type {GearsDto, PedalsDto, SpeedDto, DriverDto, SessionDto} from '@evo/common';
import PedalsTelemetry from '../../Telemetry/Pedals/Components/PedalsTelemetry';
import GearList from '../../Telemetry/Gear/Components/GearList';
import Speed from '../../Telemetry/Speed/components/Speed';
import CurrentLapTime from '../../Timing/Components/CurrentLapTime';

type Props = {
    pedals: PedalsDto,
    gears: GearsDto,
    speed: SpeedDto,
    currentDriver: DriverDto,
    currentSession: SessionDto,
    classes: any,
};

const styles = () => ({
    root: {
        flexGrow: 1,
    },
    row1: {
        marginBottom: 5,
    },
    row2: {
        marginBottom: 5,
    },
    gears: {
        marginRight: 5,
        height: '100%',
    },
    content: {
        // padding: 0
    },
    pedals: {},
});

export class BasicTelemetryOverlay extends Component<Props> {
    render() {
        const {pedals, gears, speed, currentSession, currentDriver, classes} = this.props;

        return (
            <Grid container spacing={0}>
                <Grid container spacing={0} className={classes.row1}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent className={classes.content}>
                                <CurrentLapTime currentSession={currentSession} currentDriver={currentDriver}/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={0} className={classes.row2}>
                    <Grid item xs={4}>
                        <Card className={classes.gears}>
                            <CardContent className={classes.content}>
                                <Speed speed={speed.speed} uom={speed.uom}/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={8}>
                        <Card className={classes.pedals}>
                            <CardContent className={classes.content}>
                                <PedalsTelemetry
                                    throttle={pedals.throttle}
                                    brake={pedals.brake}
                                    clutch={pedals.clutch}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <GearList currentGear={gears.currentGear} gears={gears.allGears}/>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(BasicTelemetryOverlay);
