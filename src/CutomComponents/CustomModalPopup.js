import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

const styles = theme => ({
    typography: {
        padding: theme.spacing.unit * 2
    },
});


class CustomPopup extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            open: props.open,
            fullWidth: true,
            maxWidth: 'sm',
        };
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleMaxWidthChange = event => {
        this.setState({ maxWidth: event.target.value });
    };

    handleFullWidthChange = event => {
        this.setState({ fullWidth: event.target.checked });
    };


    render() {
        const {
            content,
        } = this.props;


        return (
            <Dialog
                fullWidth={this.state.fullWidth}
                maxWidth={this.state.maxWidth}
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                {content}
            </Dialog>
        );
    }
}

CustomPopup.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomPopup);
