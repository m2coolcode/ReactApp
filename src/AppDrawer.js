import React from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import MenuIcon from "@material-ui/icons/Menu";
import Apps from '@material-ui/icons/Apps';
import Chat from '@material-ui/icons/Chat';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Search from '@material-ui/icons/Search';
import Settings from '@material-ui/icons/Settings';
import Exposure from '@material-ui/icons/Exposure';
import DeviceHub from '@material-ui/icons/DeviceHub';
import SurroundSound from '@material-ui/icons/SurroundSound';
import { withStyles } from "@material-ui/core/styles";


const drawerWidth = 240;
const styles = theme => ({
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    pos : {
        position : 'absolute',
        top : '0px'
    }
});

class TestDrawer extends React.Component {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, theme } = this.props;
        const drawer = (

            <List
                component="nav"
                subheader={<ListSubheader component="div"></ListSubheader>}
                className={classes.root}
            >
                <ListItem button onClick={this.handleClick}>
                    <ListItemIcon>
                        <Apps />
                    </ListItemIcon>
                    <ListItemText inset primary="App" />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <Search />
                            </ListItemIcon>
                            <ListItemText inset primary="Search And Reporting" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <DeviceHub />
                            </ListItemIcon>
                            <ListItemText inset primary="Admin Console" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <Exposure />
                            </ListItemIcon>
                            <ListItemText inset primary="Operations Monitoring" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button>
                    <ListItemIcon>
                        <Chat />
                    </ListItemIcon>
                    <ListItemText inset primary="Message" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText inset primary="Setting" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SurroundSound />
                    </ListItemIcon>
                    <ListItemText inset primary="Activity" />
                </ListItem>

            </List>
        );

        return (
            <React.Fragment>
                <IconButton
                    color="secondary"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.pos}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    container={this.props.container}
                    variant="temporary"
                    anchor={theme.direction === "rtl" ? "right" : "left"}
                    open={this.state.mobileOpen}
                    onClose={this.handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    {drawer}
                </Drawer>
            </React.Fragment>
        );
    }
}


export default withStyles(styles, { withTheme: true })(TestDrawer);