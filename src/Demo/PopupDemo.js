import React, { Component } from 'react';

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import Popup from '../CutomComponents/CustomPopup';


const content1 = <Paper>
    <Typography>
        The content of the Popper0.
    </Typography>
</Paper>;

const content2 = <Paper>
    <Typography>
        The content of the Popper1.
        The content of the Popper2.
        The content of the Popper3.
        The content of the Popper4.
    </Typography>
</Paper>;

class PopupDemo extends Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: state.anchorEl ? null : currentTarget,
        }));
    };
    render() {

        return (
            <div className="App">
                <p>a</p>
                <p>a</p>
                <Button
                    id='b1'
                    variant="contained"
                    onClick={this.handleClick}
                >
                    Toggle Popper
                </Button>
                <Popup
                    id='b1'
                    anchorEl={this.state.anchorEl}
                    content={content1}
                    placement='top'
                />
                <p>a</p>
                <Button
                    id='b2'
                    variant="contained"
                    onClick={this.handleClick}
                >
                    Toggle Popper
                </Button>
                <Popup
                    id='b2'
                    anchorEl={this.state.anchorEl}
                    content={content2}
                />
            </div>
        );
    }
}

export default PopupDemo;
