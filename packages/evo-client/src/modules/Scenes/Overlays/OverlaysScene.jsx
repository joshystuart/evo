// @flow
import React from 'react';
import Iframe from 'react-iframe'
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Header from '../../Common/Components/Header';
import {routes} from '../../Routing/routeConfig';
import config from '../../../../config/config';

type Props = {
    classes: any,
};

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    link: {
        color: theme.palette.primary.main,
    },
    contentContainer: {
        display: 'flex',
        marginTop: 100,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
        fontSize: '1vmax',
    },
});

function OverlaysScene(props: Props) {
    const {classes, ...rest} = props;
    const overlayUrl = `${config.host}${routes.basicTelemetryOverlay}`;
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Header {...rest} />
                </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.contentContainer} justify="center">
                <Grid item xs={6}>
                    <Typography variant="display2" gutterBottom>
                        Basic telemetry
                    </Typography>
                    <Iframe
                        url={routes.basicTelemetryOverlayDemo}
                        height="210px"
                        display="initial"
                        position="relative"
                        allowFullScreen
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} justify="center">
                <Grid item xs={6}>
                    <Typography variant="body2" gutterBottom>
                        Setup
                    </Typography>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>OBS browser url</TableCell>
                                <TableCell numeric>Width</TableCell>
                                <TableCell numeric>Height</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    <a
                                        href={overlayUrl}
                                        className={classes.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {overlayUrl}
                                    </a>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    500
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    136
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(OverlaysScene);
