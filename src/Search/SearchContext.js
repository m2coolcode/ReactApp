import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import SearchBar from './SearchBar'
import SearchResults from "./SearchResults";


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class SearchContext extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <SearchBar/>
                <SearchResults/>
            </div>
        );
    }
}

SearchContext.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchContext);
