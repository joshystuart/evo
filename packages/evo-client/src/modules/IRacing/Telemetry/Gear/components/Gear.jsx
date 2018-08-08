// @flow
import React from 'react';
import Tab from '@material-ui/core/Tab';
import {withStyles} from '@material-ui/core/styles';

type Props = {
    classes: any,
    gear: string | number,
};

const styles = () => ({
    tabRoot: {
        minWidth: 40
    },
    label: {
        fontSize: '6vw'
    }
});

function Gears(props: Props) {
    const {gear, classes} = props;

    return (
        <Tab
            label={gear}
            value={gear}
            classes={{root: classes.tabRoot, label: classes.label}}
        />
    );
}

export default withStyles(styles)(Gears);
