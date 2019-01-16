import React from 'react';
import Typography from '@material-ui/core/Typography';

import Accordion from '../CutomComponents/CustomAccordion';
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CardContent from "@material-ui/core/CardContent";

import CustomListDemo from '../CutomComponents/CustomList';
import Paper from "@material-ui/core/Paper";


class AccordionDemo extends React.Component {
    render() {

        const header = {
            content : "header content"
        };

        const body = [
            {
                content : "body content1",
                component : 'a'
            },
            {
                content : "body content2"
            },
            {
                content : "body content3"
            }
        ];

        //const realative = <CustomListDemo header={header} body={body}/>;
        const realative = "hi";


        const realTimeCard = <React.Fragment>
            <Paper>
                <CardContent>
                    { realative }
                </CardContent>
            </Paper>
        </React.Fragment>;

        const realtime = <div>
                <List subheader={<ListSubheader>Settings</ListSubheader>} >
                    <ListItem>
                        <ListItemText primary="Wi-Fi" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Bluetooth" />
                    </ListItem>
                </List>
            </div>
        ;


        const dateRange = <Typography>date range</Typography>;

        const dateTimeRange = <Typography>date time range view</Typography>;

        const advanced = <Typography>advanced view</Typography>;

        const panels = [
            {
                panelId : 'panel-presets',
                heading : 'Presets',
                content : realTimeCard
            },
            {
                panelId : 'panel-relative',
                heading : 'Relative',
                content : realative
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
                panelId : 'Advanced',
                heading : 'panel-advanced',
                content : advanced
            }
        ];

        return (
            <Accordion panels={panels}/>
        );
    }
}

export default (AccordionDemo);
