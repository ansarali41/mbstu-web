import React, { useEffect } from 'react';
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

const CampusLife = () => {
    const classes = useStyles({})();
    const defns = getDefns({ classes });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div {...defns.root} style={{ padding: '30px 0px' }}>
            <Grid {...defns.mainContainer}>
                <Grid {...defns.gridItem}>
                    <div>
                        <h3 {...defns.heading}>Campus Life</h3>
                        <Divider />
                        <p {...defns.paragraph}>
                            MBSTU leads a lifestyle which is colorful, exciting & full of various interesting events. The students are ought to attend their classes from 8:00a.m to
                            5:00 p.m during the weekdays - Saturday to Wednesday. Thursday and Friday are weekend. The students get the opportunity to visit various interesting
                            places as educational tours every now and then. <br /> <br />
                            The students are inhabited in four distinctive dormitories. Three of the dormitories are for the gents & the other one is for the ladies. Several
                            multistoried dormitories with all kinds of modern facilities are under process of deployment. <br />
                            <br />
                            The official activities are maintained by the administrative department of MBSTU which is divided into several sub departments to perform its various
                            operations smoothly. Though the administrative department is still young in age & has limitations regarding to its activities for the lake of enough
                            skilled manpower, still it manages to execute on its own. <br />
                            <br />
                            The medical centre of MBSTU is equipped with necessary instruments and doctor to provide appropriate health care to the students and it is always ready
                            to face any sudden situation. <br />
                            <br />
                            The Physical Education Department plays a significant role in the campus. It occasionally organizes different departmental sport events to cheer the
                            students up. It also maintains & organizes the annual sports of MBSTU. This department also runs the gymnasium to facilitate the students to keep sound
                            health.
                            <br />
                            <br />
                            Various cultural activities such as Ekushe February, Sadhinota Dibosh, Bijoy Dibosh, Nobo Borsho, Pohela Falgun & Boshonto Boron are celebrated with
                            proper respect & ritual regarding to the occasion. Besides these national annual events, many more activities such as programming contests, seminars on
                            environmental crisis, debating, film festivals etc. are organized throughout the whole year.
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default CampusLife;
