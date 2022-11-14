import React from 'react';
import { makeStyles } from '@material-ui/core';

// import './styles.css';
//---------------------------------------------------------------------
// Common helpers and constants imports
//---------------------------------------------------------------------
import { setClassNameInDefns } from '../../Helper/definitionHelper';
//---------------------------------------------------------------------
// CSS
//---------------------------------------------------------------------
const useStyles = (params = {}) => {
    return makeStyles(theme => ({
        root: { paddingTop: '90px', paddingBottom: '20px' },
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

const MbstuBanner = ({ img_path }) => {
    const classes = useStyles({})();
    const defns = getDefns({ classes });
    return (
        <div {...defns.root}>
            <img src={img_path} alt="" className="w-100 img-fluid" />
        </div>
    );
};

export default MbstuBanner;
