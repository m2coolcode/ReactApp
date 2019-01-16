import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


import SearchContext from './Search/SearchContext';
import AppDrawer from './AppDrawer';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        height : '100%',
        width : '100%',
        position : 'absolute',
    },
    minWidth : {
        minWidth: '1px',
    }
});

class SearchNReportApp extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                    >
                        <Tab label="Search" className={classes.minWidth} />
                        <Tab label="Dataset" className={classes.minWidth} />
                        <Tab label="Reports" className={classes.minWidth} />
                        <Tab label="Alerts" className={classes.minWidth} />
                        <Tab label="Dashboards" className={classes.minWidth} />
                    </Tabs>
                </AppBar>
                <AppDrawer/>
                {value === 0 && <TabContainer><SearchContext /></TabContainer>}
                {value === 1 && <TabContainer>Dataset context</TabContainer>}
                {value === 2 && <TabContainer>Reports context</TabContainer>}
                {value === 3 && <TabContainer>Alerts context</TabContainer>}
                {value === 4 && <TabContainer>Dashboards context</TabContainer>}
            </div>
        );
    }
}

SearchNReportApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchNReportApp);
