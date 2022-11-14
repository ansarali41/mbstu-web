import React from 'react';
import { makeStyles } from '@material-ui/core';

// import './styles.css';
//---------------------------------------------------------------------
// Common helpers and constants imports
//---------------------------------------------------------------------
import { setClassNameInDefns } from '../../Helper/definitionHelper';
import { useParams } from 'react-router-dom';
import noticeData from '../fakeData/noticeData';
//---------------------------------------------------------------------
// CSS
//---------------------------------------------------------------------
const useStyles = (params = {}) => {
    return makeStyles(theme => ({
        // root: { paddingTop: '120' },
        heading: { color: '#85A64E' },
        headingSecondary: { color: '#999943' },
        administrationDiv: {
            padding: '15px 0px',
        },
        link: { textDecoration: 'none', color: 'inherit' },
    }));
};

//---------------------------------------------------------------------
// Get definitions
//---------------------------------------------------------------------
const getDefns = params => {
    const { classes } = params;

    const defns = {
        administrationContainer: { container: true, justifyContent: 'center' },
        administrationItem: { item: 'true', xl: 11, lg: 11, md: 11, sm: 11, xm: 11 },
        // administrationItemLeft: { item: true, xl: 8, lg: 8, md: 7, sm: 7, xs: 11 },
        // administrationItemRight: { item: true, xl: 3, lg: 3, md: 3, sm: 3, xs: 11 },
    };

    // Automatically inject className for matching keys
    setClassNameInDefns(defns, classes);

    return defns;
};

const NoticeDetails = () => {
    // local hooks
    const { noticeId } = useParams();
    const notice = noticeData.filter(item => item.id === parseInt(noticeId));
    const { fullDetails, title } = notice[0];
    const classes = useStyles({})();
    const defns = getDefns({ classes });
    return (
        <div {...defns.root} style={{ padding: '30px 100px' }}>
            <h4>{title}</h4>
            <p>{fullDetails}</p>
        </div>
    );
};

export default NoticeDetails;
