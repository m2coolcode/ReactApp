import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Popup from '../CutomComponents/CustomModalPopup';
import Accordion from './../CutomComponents/CustomAccordion';
import SettingIcon from '@material-ui/icons/Settings'

import Typography from "@material-ui/core/es/Typography/Typography";

import PresetsView from './PresetsView';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const presetsView = <PresetsView/>;

const realtime = <div>realtime view</div>;

const dateRange = <Typography>date range</Typography>;

const dateTimeRange = <Typography>date time range view</Typography>;

const advanced = <Typography>advanced view</Typography>;

class SearchPopup extends Component {

    state = {
        open: false,
    };

    handleClick = () => {
        this.setState(state => ({
            open: !state.open,
        }));
    };

    handleSelect = (event) => {
        this.setState({
            open: false
        });
        this.props.handleSelect({searchTime: event.target.textContent});
    };

    render() {
        const panels = [
            {
                panelId : 'panel-presets',
                heading : 'Presets',
                defaultExpanded : true,
                content : <PresetsView
                    handleSelect={this.handleSelect}
                />
            },
            {
                panelId : 'panel-relative',
                heading : 'Relative',
                content : <PresetsView
                    handleSelect={this.handleSelect}
                />
            },
            {
                panelId : 'panel-real-time',
                heading : 'Real Time',
                content : realtime
            },
            {
                panelId : 'panel-date-range',
                heading : 'Date Range',
                content : dateRange
            },
            {
                panelId : 'panel-date-time-range',
                heading : 'Date & Time Range',
                content : dateTimeRange
            },{
                panelId : 'panel-advanced',
                heading : 'Advanced',
                content : advanced
            }
        ];
        const popUpContent = <Accordion panels={panels}/>;
        return <React.Fragment>
            <span className="query-time">

                    <SettingIcon
                        id='b1'
                        variant="contained"
                        onClick={this.handleClick}
                    />


                {this.state.open ? <Popup
                    open={this.state.open}
                    content={popUpContent}
                /> : null}

            </span>
        </React.Fragment>;
    }
}

const style = {

};
export default withStyles(style)(SearchPopup);
