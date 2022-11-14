import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

// import './styles.css';
//---------------------------------------------------------------------
// Common helpers and constants imports
//---------------------------------------------------------------------
import { setClassNameInDefns } from '../../Helper/definitionHelper';
import { Divider, Grid } from '@mui/material';
import centralLibrary from '../../Images/Library/mbstu-cafetaria-central-library.jpeg';
import MbstuBanner from '../../Helper/CommonComponents/MbstuBanner';
import libraryBanner from '../../Images/library-banner.jpeg';
//---------------------------------------------------------------------
// CSS
//---------------------------------------------------------------------
const useStyles = (params = {}) => {
    return makeStyles(theme => ({
        // root: { paddingTop: '120' },
        heading: { color: '#85A64E' },
        headingSecondary: { color: '#999943' },
        link: { textDecoration: 'none', color: 'inherit' },
        historyItemRight: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
        historyContainer: { padding: '20px 0px' },
    }));
};

//---------------------------------------------------------------------
// Get definitions
//---------------------------------------------------------------------
const getDefns = params => {
    const { classes } = params;

    const defns = {
        historyContainer: { container: true, justifyContent: 'center' },
        historyItemLeft: { item: true, xl: 6, lg: 6, md: 6, sm: 6, xs: 11 },
        historyItemRight: { item: true, xl: 5, lg: 5, md: 5, sm: 5, xs: 11 },
    };

    // Automatically inject className for matching keys
    setClassNameInDefns(defns, classes);

    return defns;
};

const Library = () => {
    const classes = useStyles({})();
    const defns = getDefns({ classes });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <MbstuBanner img_path={libraryBanner} />
            <Grid {...defns.historyContainer}>
                <Grid {...defns.historyItemLeft}>
                    <h2 {...defns.headingSecondary}>Library</h2>
                    <Divider />
                    <p>
                        The central library is situated in a significant point of the campus with a calm & relaxing environment, essential for the readers to engage themselves in
                        concentrating in their studies. A vast collection of course oriented books along with a variety of reference books as well as books that are beyond the
                        courses offered by the university. The collection of books of the library is sufficient enough for any student of any department to acquire knowledge on his
                        particular subjects. The central library is equipped with several Xerox machines to facilitate the students to photocopy any book or journal that he needs
                        to study at home. The central library is proposed to emerge into an electronic library soon so that it can run more flexibly & the students can get the
                        chance to take the advantage of the library to the fullest. The university library has been marching forward keeping pace with the moto "Digital
                        Bangladesh". There is a digital library corner functioning in the library premises. Also, anyone can access the following sites through the university IP:
                    </p>
                </Grid>
                <Grid {...defns.historyItemRight}>
                    <img style={{ width: '60%' }} src={centralLibrary} alt="mbstu library" />
                </Grid>
            </Grid>
        </div>
    );
};

export default Library;
