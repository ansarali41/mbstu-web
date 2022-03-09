import React from 'react';
import { Divider, Grid, makeStyles } from '@material-ui/core';

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
        heading: { color: '#85A64E' },
        headingSecondary: { color: '#999943' },
        administrationDiv: {
            padding: '15px 0px',
        },
        paragraph: { padding: '15px 0px' },
    }));
};

//---------------------------------------------------------------------
// Get definitions
//---------------------------------------------------------------------
const getDefns = params => {
    const { classes } = params;

    const defns = {
        mainContainer: { container: true, justifyContent: 'center' },
        gridItem: { item: 'true', xl: 11, lg: 11, md: 11, sm: 11, xm: 11 },
        // administrationItemLeft: { item: true, xl: 8, lg: 8, md: 7, sm: 7, xs: 11 },
        // administrationItemRight: { item: true, xl: 3, lg: 3, md: 3, sm: 3, xs: 11 },
    };

    // Automatically inject className for matching keys
    setClassNameInDefns(defns, classes);

    return defns;
};

const ICTCell = () => {
    const classes = useStyles({})();
    const defns = getDefns({ classes });
    return (
        <div {...defns.root} style={{ padding: '30px 0px' }}>
            <Grid {...defns.mainContainer}>
                <Grid {...defns.gridItem}>
                    <div>
                        <h2 {...defns.heading}>ICT Cell Office</h2>
                        <Divider />
                        <p {...defns.paragraph}></p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default ICTCell;
