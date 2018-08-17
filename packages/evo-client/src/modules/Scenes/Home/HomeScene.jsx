// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Header from '../../Common/Components/Header';

type Props = {
    classes: any,
};

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    hero: {
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
    },
    title: {
        fontWeight: theme.typography.fontWeightLight,
        [theme.breakpoints.only('xs')]: {
            fontSize: 28,
        },
        whiteSpace: 'nowrap',
        textAlign: 'center',
    },
    headline: {
        paddingLeft: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 4,
        marginTop: theme.spacing.unit,
        textAlign: 'center',
    },
    body: {
        textAlign: 'center',
    },
    link: {
        color: theme.palette.primary.main,
    },
});

function HomeScene(props: Props) {
    const { classes, ...rest } = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Header {...rest} />
                </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.hero}>
                <Grid item xs={12}>
                    <Typography variant="display4" align="center" component="h1" color="inherit" gutterBottom className={classes.title}>
                        EVO
                    </Typography>
                    <Typography variant="headline" component="h2" color="inherit" gutterBottom className={classes.headline}>
                        Enhanced vision overlays for iRacing
                    </Typography>
                    <Typography variant="title" component="h3" color="inherit" gutterBottom className={classes.headline}>
                        Getting started
                    </Typography>

                    <Typography variant="body2" color="inherit" gutterBottom className={classes.body}>
                        Add{' '}
                        <a href="http://localhost:3000/overlays/saved" className={classes.link} target="_blank">
                            http://localhost:3000/overlays/saved
                        </a>{' '}
                        to show the overlay inside OBS
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(HomeScene);
