import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Notice from '../Notice/Notice';
import About from './About/About';
import { makeStyles } from '@material-ui/core';

// import './styles.css';
//---------------------------------------------------------------------
// Common helpers and constants imports
//---------------------------------------------------------------------
import { setClassNameInDefns } from '../../Helper/definitionHelper';
import Banner from './Banner/Banner';
import News from '../News/News';
import Message from './Message/Message';
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
        link: { textDecoration: 'none', color: 'inherit', marginRight: 15 },
    }));
};

//---------------------------------------------------------------------
// Get definitions
//---------------------------------------------------------------------
const getDefns = params => {
    const { classes } = params;

    const defns = {
        noticeContainer: { container: true, justifyContent: 'flex-end' },
        administrationItem: { item: 'true', xl: 11, lg: 11, md: 11, sm: 11, xm: 11 },
        // administrationItemLeft: { item: true, xl: 8, lg: 8, md: 7, sm: 7, xs: 11 },
        // administrationItemRight: { item: true, xl: 3, lg: 3, md: 3, sm: 3, xs: 11 },
    };

    // Automatically inject className for matching keys
    setClassNameInDefns(defns, classes);

    return defns;
};

const Home = () => {
    const classes = useStyles({})();
    const defns = getDefns({ classes });
    return (
        <div>
            <Banner />
            <Message />
            <About />
            {/* notice */}
            <div className="py-5">
                <Notice />
                <Grid {...defns.noticeContainer}>
                    <Grid item>
                        <Link to="/notice" {...defns.link}>
                            <Button variant="contained" color="primary">
                                See More
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>

            <div className="py-5">
                <News />
                <Grid {...defns.noticeContainer}>
                    <Grid item>
                        <Link to="/news" {...defns.link}>
                            <Button variant="contained" color="primary">
                                See More
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Home;
