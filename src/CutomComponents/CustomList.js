import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
    clickable : {
        cursor : 'pointer'
    },
    visibilityHidden : {
        visibility : 'hidden'
    }
};

function CustomList (props) {
    function getValFromContent(content) {
        return content.replace(/\s/g,'').replace('window','');
    }

    function getListItem(item, index){
        const {
            component = 'p',
            content = 'non content',
            color = 'primary',
            key = index,
            id = index
        } = item;

        const val = getValFromContent(content);

        return <Typography
            id={id}
            key={key}
            val={val}
            component={component}
            color={color}
            className={props.classes.clickable}
        >
            { content }
        </Typography>;
    }

    function getBodyContent(){
        return props.body.map(getListItem);
    }

    function getListHeader(){
        const { header } = props;

        if(header){
            const {
                color = 'textSecondary',
                content = 'non content',
                component = 'p',
                hidden = false
            } = header;
            return <Typography
                color={color}
                component={component}
                gutterBottom
                className = {hidden ? props.classes.visibilityHidden : null}
            >
                { content }
            </Typography>;
        }

        return null;
    }

    return <React.Fragment>
        { getListHeader() }
        { getBodyContent() }
    </React.Fragment>;
}

CustomList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomList);