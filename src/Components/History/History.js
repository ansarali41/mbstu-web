import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

// import './styles.css';
//---------------------------------------------------------------------
// Common helpers and constants imports
//---------------------------------------------------------------------
import { setClassNameInDefns } from '../../Helper/definitionHelper';
import { Grid } from '@mui/material';
import Bhashani from '../../Images/History/bhashani.jpeg';
import lateVc from '../../Images/History/late_vc_sir.jpeg';
import MbstuBanner from '../../Helper/CommonComponents/MbstuBanner';
import historyBanner from '../../Images/history-banner.jpeg';
//---------------------------------------------------------------------
// CSS
//---------------------------------------------------------------------
const useStyles = (params = {}) => {
    return makeStyles(theme => ({
        // root: { paddingTop: '120' },
        link: { textDecoration: 'none', color: 'inherit' },
        historyItemRight: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
    }));
};

//---------------------------------------------------------------------
// Get definitions
//---------------------------------------------------------------------
const getDefns = params => {
    const { classes } = params;

    const defns = {
        historyContainer: { container: true, justifyContent: 'center' },
        welcomeItem: { item: 'true', xl: 11, lg: 11, md: 11, sm: 11, xm: 11 },
        historyItemLeft: { item: true, xl: 8, lg: 8, md: 7, sm: 7, xs: 11 },
        historyItemRight: { item: true, xl: 3, lg: 3, md: 3, sm: 3, xs: 11 },
    };

    // Automatically inject className for matching keys
    setClassNameInDefns(defns, classes);

    return defns;
};

const History = () => {
    const classes = useStyles({})();
    const defns = getDefns({ classes });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <MbstuBanner img_path={historyBanner} />
            <Grid {...defns.historyContainer} style={{ padding: '40px 0px' }}>
                {/* <Grid {...defns.welcomeItem}>
                    <h4>Welcome</h4>
                    <p>
                        The divine power lies in the understanding of science and the application of technology. Mawlana Bhashani Science and Technology University is aimed to
                        provide its students with the knowledge of proper combination of science and technology to get them prepared for the challenges of the 21st century. The
                        students of MBSTU hold not only the scientific knowledge but also the norm and values to become complete social human beings who would break all the
                        obstacles of the society and lead it to a better one as they are influenced by the vision of the spiritual philosopher and the leader of the leaders -
                        Mawlana Abdul Hamid Khan Bhashani. That is why the students of MBSTU are well prepared to face the challenges of day to day life anywhere.
                    </p>
                </Grid> */}
                <Grid {...defns.historyItemLeft}>
                    <h4>History Of MBSTU</h4>
                    <p>
                        Mawlana Bhashani Science and Technology University has been named after one of the renowned political leaders and philosophers of Bangladesh - Mawlana Abdul
                        Hamid Khan Bhashani. Today's MBSTU is the outcome of the dream which had been dreamt by him long ago. Mawlana Bhashani had the desire to establish a
                        university that would build its students as independent, honest and hard working citizens. He had proposed the name of this university "Islamic University".
                        Unfortunately his concerns of Islamic University had remained just a dream throughout his lifetime. Long after this spiritual leader`s death, a university
                        named "Islamic University" did establish but this university was established in the district of Kustia instead of Tangail. After waiting a long period of
                        time the Prime Minister of The Peoples Republic of Bangladesh "Sheikh Hasina" founded the foundation-stone of MBSTU at Santosh, Tangail in 1999.
                    </p>
                </Grid>
                <Grid {...defns.historyItemRight}>
                    <img src={Bhashani} alt="" />
                </Grid>
                <Grid {...defns.historyItemLeft}>
                    <p>
                        On 21st November of 2002 Prof. Dr. Md. Yousuf Sharif Ahmed Khan had been appointed as the first Vice Chancellor of the university and finally MBSTU started
                        running officially with only two departments - Computer Science and Engineering & Information And Communication Technology under the first Faculty of the
                        University which is the faculty of Computer Science & Engineering. MBSTU had started its first academic activities with a total of 83 students and 5
                        teachers of the CSE faculty on 25/10/2003. After about eight months of academic duration of the university, MBSTU had been added with two new departments -
                        Environmental Science & Resource Management and Criminology & Police Science under the second faculty of the University which is the faculty of Life
                        Science. In course of time new departments have been added under both the CSE and the LS faculties of MBSTU. These newly added departments are - Textile
                        Engineering, Biotechnology & Genetic Engineering, Food Technology & Nutritional Science. At present the university holds a total of near about 2000 of
                        students in it and MBSTU is making its way towards the success and glory.
                    </p>
                </Grid>
                <Grid {...defns.historyItemRight}>
                    <img src={lateVc} alt="" />
                </Grid>
            </Grid>
        </div>
    );
};

export default History;
