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
        // root: { paddingTop: '120' },
    }));
};

//---------------------------------------------------------------------
// Get definitions
//---------------------------------------------------------------------
const getDefns = params => {
    const { classes } = params;

    const defns = {};

    // Automatically inject className for matching keys
    setClassNameInDefns(defns, classes);

    return defns;
};

const Notice = () => {
    const classes = useStyles({})();
    const defns = getDefns({ classes });
    return (
        <div {...defns.root}>
            <div style={{ paddingTop: '30px' }}>
                <h3>LATEST NOTICES</h3>
            </div>
        </div>
    );
};

export default Notice;
