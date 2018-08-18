// @flow
import React from 'react';
import {GearsDto, PedalsDto, SpeedDto, TelemetryDto} from '@evo/common';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {BasicTelemetryOverlayContainer} from '../../../IRacing/Overlay/Components/BasicTelemetryOverlayContainer';

type Props = {
    classes: any,
};

const styles = {
    root: {
        flexGrow: 1,
    },
};

function BasicTelemetryOverlayDemoScene(props: Props) {
    const {classes, ...rest} = props;

    const pedals = new PedalsDto();
    pedals.throttle = 0.7;

    const gears = new GearsDto();
    gears.allGears = ['R', 'N', 1, 2, 3, 4, 5, 6, 7];
    gears.currentGear = 4;

    const speed = new SpeedDto();
    speed.speed = 183;
    speed.uom = 'KMH';

    const telemetry = new TelemetryDto();
    telemetry.speed = speed;
    telemetry.gears = gears;
    telemetry.pedals = pedals;

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <BasicTelemetryOverlayContainer telemetry={telemetry} {...rest}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(BasicTelemetryOverlayDemoScene);
