// @flow
import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Home from '@material-ui/icons/Home';
import PictureInPicture from '@material-ui/icons/PictureInPicture';
import FeaturedVideo from '@material-ui/icons/FeaturedVideo';
import FormatListNumbered from '@material-ui/icons/FormatListNumbered';

type Props = {
    classes: any,
    history: any,
};

const styles = {
    root: {
        flexGrow: 1,
    },
};

class Navigation extends Component<Props> {
    navigate = (url) => {
        const {history} = this.props;
        history.push(url);
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <List>
                    <ListItem
                        button
                        onClick={() => {
                            this.navigate('/');
                        }}
                    >
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
                </List>
                <List>
                    <ListItem
                        button
                        onClick={() => {
                            this.navigate('/overlays');
                        }}
                    >
                        <ListItemIcon>
                            <PictureInPicture/>
                        </ListItemIcon>
                        <ListItemText primary="Overlays"/>
                    </ListItem>
                </List>
                <Divider/>
            </div>
        );
    }
}

export default withStyles(styles)(Navigation);
