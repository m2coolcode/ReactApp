import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import SearchIcon from '@material-ui/icons/Search';

import EditSearchSettingIcon from './SearchPopup';
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import {TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import IconButton from "@material-ui/core/IconButton";


const styles = theme => ({
    root: {
        width: '100%',
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    removeTopPad : {
        'padding-top' : '0',
    },
    removeBottomPad : {
        'padding-bottom' : '0'
    },
    displayInlineFlex : {
        'display' : 'inline-flex'
    },
    padding4px : {
        padding : '4px'
    }
});

class CheckboxListSecondary extends React.Component {
    state = {
        checked: [1],
        searchTime: 'Last 4 hours'
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    handleSelect = state => {
        this.setState(state);
    };

    render() {
        const { classes } = this.props;
        const {searchTime} = this.state;
        return (
            <Paper style={{marginBottom:"1rem"}}>

                <ListItem className={`${classes.removeTopPad} `}>
                    <TextField
                        fullWidth={true}
                        placeholder="Enter your query..."
                        helperText={'Query in ' + searchTime.toLowerCase() + ' (Click setting icon to modify)'}
                    />
                    <span className={classes.displayInlineFlex}>
                        <Tooltip title="Edit query time duration">
                            <IconButton className={classes.padding4px}>
                                <SearchIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit query time duration">
                            <IconButton className={classes.padding4px}>
                                 <EditSearchSettingIcon handleSelect={this.handleSelect}/>
                            </IconButton>
                        </Tooltip>
                        </span>
                </ListItem>
            </Paper>
        );
    }
}

CheckboxListSecondary.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);
