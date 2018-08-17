// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { UOM } from '@evo/common';

type Props = {
    classes: any,
    speed: number,
    uom: UOM,
};

const styles = () => ({
    card: {
        display: 'flex',
        justifyContent: 'center',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        right: '-4%',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
    },
    speed: {
        color: '#fff',
        fontWeight: 700,
        fontSize: '9vw',
    },
    uom: {
        color: '#fff',
        transform: 'rotate(-90deg)',
        '-webkit-transform': 'rotate(-90deg)',
        '-moz-transform': 'rotate(-90deg)',
        textTransform: 'uppercase',
        position: 'relative',
        left: 10,
        fontSize: '4vw',
    },
});

function Speed(props: Props) {
    const { speed = 0, uom = UOM.KMH, classes } = props;

    const formattedSpeed = parseInt(speed, 10);

    return (
        <div className={classes.card}>
            <div className={classes.details}>
                <div className={classes.content}>
                    <Typography variant="display1" className={classes.speed}>
                        {formattedSpeed}
                    </Typography>
                    <Typography variant="subheading" className={classes.uom}>
                        {uom}
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(Speed);
