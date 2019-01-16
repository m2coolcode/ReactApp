import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    }
});

class CustomAccordion extends React.Component {


    constructor(props){
        super(props);

        let expanded = null;
        props.panels.forEach(panel => {
            if(panel.defaultExpanded){
                expanded = panel.panelId
            }
        });

        this.state = {
            expanded: expanded,
        };
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    getAccordionPanel = (panel) => {
        const { expanded } = this.state;
        const { classes } = this.props;
        const {
            panelId,
            heading,
            secondaryHeading,
            content,
        } = panel;

        return <ExpansionPanel key={panelId}
                               expanded={expanded === panelId}
                               onChange={this.handleChange(panelId)}
                               //defaultExpanded={defaultExpanded}
        >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{heading}</Typography>
                {secondaryHeading
                    ? <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
                    : null}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {content}
            </ExpansionPanelDetails>
        </ExpansionPanel>;
    };

    render() {
        const {
            classes,
            panels
        } = this.props;

        return (
            <div className={classes.root}>
                {panels.map(this.getAccordionPanel)}
            </div>
        );
    }
}

CustomAccordion.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomAccordion);
