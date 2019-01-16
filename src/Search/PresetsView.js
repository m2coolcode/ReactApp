import React from "react";
import CustomList from "../CutomComponents/CustomList";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import {withStyles} from "@material-ui/core";
import Accordion from "./SearchPopup";

const realTimeHeader = {
    content : "Real-time"
};

const realTimeBody = [
    {
        content : "30 second window"
    },
    {
        content : "1 minute window"
    },
    {
        content : "5 minute window"
    },
    {
        content : "5 minute window"
    },
    {
        content : "30 minute window"
    },
    {
        content : "1 hour window"
    },
    {
        content : "All time(real-time)"
    }
];

const relativeHeader = {
    content : "Relative"
};
const relativeHiddenHeader = {
    content : "Relative",
    hidden : true
};

const relativeBody1 = [
    {
        content : "Today"
    },
    {
        content : "Week to date"
    },
    {
        content : "Business week to date"
    },
    {
        content : "Months to date"
    },
    {
        content : "Year to date"
    },
    {
        content : "Previous week"
    },
    {
        content : "Previous business week"
    },
    {
        content : "Previous month"
    },
    {
        content : "Previous year"
    }
];
const relativeBody2 = [
    {
        content : "Last 15 minutes"
    },
    {
        content : "Last 60 minutes"
    },
    {
        content : "Last 4 hours"
    },
    {
        content : "Last 24 hours"
    },
    {
        content : "Last 7 days"
    },
    {
        content : "Last 30 days"
    }
];

const othersHeader = {
    content : "Other"
};

const othersBody = [
    {
        content : "All time"
    },
];



function PresetsView(props){

    function handleSelect(event){
        props.handleSelect(event);
    }

    const {
        inline,
        marginRight,
        zeroPadding,
        zeroPaddingLeft
    } = props.classes;
    return <React.Fragment>
        <CardContent className={`${marginRight} ${zeroPadding} ${zeroPaddingLeft} ${inline}`}>
            <span onClick={handleSelect}>
                <CustomList header={realTimeHeader} body={realTimeBody} />
            </span>
        </CardContent>
        <CardContent className={` ${zeroPadding} ${inline}`}>
            <span onClick={handleSelect}>
                <CustomList header={relativeHeader} body={relativeBody1}/>
            </span>
        </CardContent>
        <CardContent className={`${inline} ${zeroPadding} ${marginRight}`}>
            <span onClick={handleSelect}>
            <CustomList header={relativeHiddenHeader} body={relativeBody2}/>
            </span>
        </CardContent>
        <CardContent className={`${zeroPadding} ${inline}`}>
            <span onClick={handleSelect}>
            <CustomList header={othersHeader} body={othersBody}/>
            </span>
        </CardContent>
    </React.Fragment>;


}

const styles = {
    inline : {
        display : 'inline-block'
    },

    marginRight : {
        'margin-right' : '5px',
        'border-right' : '1px solid grey'
    },
    zeroPadding:{
        'padding-top': '0',
        'padding-bottom' : '0'
    },
    zeroPaddingLeft:{
        'padding-left': '0',
    },
};

export default withStyles(styles)(PresetsView);