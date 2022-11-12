import React, { useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

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

const Administration = () => {
    const classes = useStyles({})();
    const defns = getDefns({ classes });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div {...defns.root} style={{ padding: '30px 0px' }}>
            <Grid {...defns.administrationContainer}>
                <Grid {...defns.administrationItem}>
                    <div {...defns.administrationDiv}>
                        <h3 {...defns.heading}>Administration</h3>
                        <hr />
                    </div>
                    <div {...defns.administrationDiv}>
                        <h5 {...defns.headingSecondary}>The Chancellor of the University</h5>
                        <hr />
                        <p>
                            <strong>Md. Abdul Hamid</strong> <br /> President, People’s Republic of Bangladesh
                        </p>
                    </div>
                    <div {...defns.administrationDiv}>
                        <h5 {...defns.headingSecondary}>The Vice-Chancellor</h5>
                        <hr />
                        <p>Professor Dr. Md. Forhad Hossain</p>
                    </div>
                    <div {...defns.administrationDiv}>
                        <h5 {...defns.headingSecondary}>Pro-Vice-Chancellor</h5>
                        <hr />
                        <p>Professor Dr. A.R.M. Solaiman</p>
                    </div>
                    <div {...defns.administrationDiv}>
                        <h5 {...defns.headingSecondary}>Treasurer</h5>
                        <hr />
                        <p>Professor Dr. Md. Sirajul Islam</p>
                    </div>
                    <div {...defns.administrationDiv}>
                        <h5 {...defns.headingSecondary}>The Regent Board</h5>
                        <hr />
                        <p>
                            <strong>Chairman</strong>
                        </p>

                        <p>
                            Professor Dr. Md. Forhad Hossain <br />
                            Vice-Chancellor, MBSTU
                        </p>
                        <br />
                        <p>
                            <strong>Members</strong>
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Administration;
