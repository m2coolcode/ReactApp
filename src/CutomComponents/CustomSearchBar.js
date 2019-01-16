import React from "react";
import PropTypes from "prop-types";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const color = "rgb(224, 224, 224)";
const styles = theme => ({
    root: {
        width: "100%",
        border: "1px solid",
        'border-color': color,
        'border-radius':"10px",
        height:'2rem'
    },

    search: {
        position: "relative",
        float:'left',
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing.unit * 2,
            width: "auto"
        }
    },
    searchIcon: {
        width: theme.spacing.unit * 6,
        height: "100%",
        'margin-top':"7px",
        float:"right",
        pointerEvents: "none",
        display: "flex",
        justifyContent: "center"
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: 200
        }
    }
});

class SearchBar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div position="static">
                    <div className={classes.search}>
                        <InputBase
                            placeholder="Search…"
                            classes={{input: classes.inputInput}}
                        />
                    </div>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                </div>
            </div>
        );
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);