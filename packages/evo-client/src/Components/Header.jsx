// @flow
import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Navigation from 'src/Components/Navigation';

type Props = {
    classes: any,
};
type State = {
    isOpen: boolean,
};

const styles = {
    root: {
        flexGrow: 1
    },
    appBar: {
        boxShadow: 'none'
    },
    title: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    list: {
        width: 250
    }
};

class Header extends Component <Props, State> {
    state = {
        isOpen: false
    };
    toggleDrawer = (isOpen) => () => {
        this.setState({
            isOpen
        });
    };

    render() {
        const {classes, ...rest} = this.props;
        const {isOpen} = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.toggleDrawer(true)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.title}>
                            EVO: Enhanced Vision Overlays
                        </Typography>
                        <Button color="inherit">Download</Button>
                    </Toolbar>
                </AppBar>
                <Drawer open={isOpen} onClose={this.toggleDrawer(false)}>
                    <Navigation
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                        className={classes.list}
                        {...rest}
                    />
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(Header);
