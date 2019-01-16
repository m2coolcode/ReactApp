import React, { Component } from 'react';
import '../App.css'

import Popup from './../CutomComponents/CustomPopup';
import AccordionDemo from './AccordionDemo';
import Button from "@material-ui/core/es/Button/Button";

class AccordionInPopUpDemo extends Component {

    state = {
        anchorEl: null,
    };

    handleClick = event => {
        const { currentTarget } = event;
        debugger;
        this.setState(state => ({
            anchorEl: state.anchorEl ? null : currentTarget,
        }));
    };

    render() {
        const popUpContent = <AccordionDemo/>;
        return (
            <div className="App">
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
                    content={popUpContent}
                />
            </div>
        );
    }
}



export default AccordionInPopUpDemo;
