// @flow
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {withStyles} from '@material-ui/core/styles';
import PedalsTelemetry from 'src/modules/IRacing/Telemetry/Pedals/components/PedalsTelemetry';
import GearList from 'src/modules/IRacing/Telemetry/Gear/components/GearList';
import Speed from 'src/modules/IRacing/Telemetry/Speed/components/Speed';
import type TelemetryDto from '@evo/server/lib/IRacing/Telemetry/TelemetryDto';
import withTelemetry from 'src/modules/IRacing/Telemetry/withTelemetry';

type Props = {
    telemetry: TelemetryDto,
    classes: any,
};

const styles = () => ({
    root: {
        flexGrow: 1
    },
    row1: {
        marginBottom: 5
    },
    gears: {
        marginRight: 5,
        height: '100%',
    },
    content: {
        // padding: 0
    },
    pedals: {}
});

export class BasicTelemetryOverlay extends Component<Props> {
    render() {
        const {telemetry, classes} = this.props;
        const {pedals, gears, speed} = telemetry;

        return (
            <Grid container spacing={0}>
                <Grid container spacing={0} className={classes.row1}>
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
                                <PedalsTelemetry throttle={pedals.throttle} brake={pedals.brake} clutch={pedals.clutch}/>
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

export default withStyles(styles)(withTelemetry(BasicTelemetryOverlay));
