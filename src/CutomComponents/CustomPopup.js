import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Modal from "@material-ui/core/Modal";
import Dialog from "@material-ui/core/Dialog";

const styles = theme => ({
    typography: {
        padding: theme.spacing.unit * 2
    },
    popper: {
        zIndex: 1,
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${theme.palette.common.white} transparent`,
            },
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: `${theme.palette.common.white} transparent transparent transparent`,
            },
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: `transparent ${theme.palette.common.white} transparent transparent`,
            },
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: `transparent transparent transparent ${theme.palette.common.white}`,
            },
        },
    },

    arrow: {
        position: 'absolute',
        fontSize: 7,
        width: '3em',
        height: '3em',
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
});


class CustomPopup extends React.Component {
    state = {
        anchorEl: null,
        arrowRef: null,
        open: true,
        fullWidth: true,
        maxWidth: 'sm',
    };

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

    handleArrowRef = node => {
        this.setState({
            arrowRef: node
        });
    };

    render() {
        const {
            id,
            anchorEl,
            placement,
            classes,
            content,
            disablePortal = true
        } = this.props;

        const open = Boolean(anchorEl);
        const { arrowRef } = this.state;
        const arrowSpan = <span className={classes.arrow} ref={this.handleArrowRef} />;

        return (
            <Dialog
                fullWidth={this.state.fullWidth}
                maxWidth={this.state.maxWidth}
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                {/*<Popper
                key={id}
                id={id}
                open={open}
                anchorEl={anchorEl}
                placement={placement}
                className={classes.popper}
                disablePortal={disablePortal}
                modifiers={{
                    arrow: {
                        enabled: true,
                        element: arrowRef,
                    },
                    preventOverflow: {
                        enabled: true,
                        boundariesElement: 'scrollParent',
                    },
                    flip: {
                        enabled: true,
                    },
                }}
            >
                {arrowSpan}
                {content}
            </Popper>*/}
                {content}
        </Dialog>
        );
    }
}

CustomPopup.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomPopup);
