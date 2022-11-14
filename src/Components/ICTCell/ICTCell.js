import React, { useEffect } from 'react';
import { Divider, Grid, makeStyles } from '@material-ui/core';

// import './styles.css';
//---------------------------------------------------------------------
// Common helpers and constants imports
//---------------------------------------------------------------------
import { setClassNameInDefns } from '../../Helper/definitionHelper';
import MbstuBanner from '../../Helper/CommonComponents/MbstuBanner';
import ictCellBanner from '../../Images/ict-cell-banner.png';
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
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <MbstuBanner img_path={ictCellBanner} />
            <Grid {...defns.mainContainer}>
                <Grid {...defns.gridItem}>
                    <div>
                        <h2 {...defns.heading}>ICT Cell Office</h2>
                        <Divider />
                        <p {...defns.paragraph}></p>
                    </div>
                    <div className="row d-flex align-items-center justify-content-around">
                        <div className="col-md-5">
                            <img src="https://mbstu.ac.bd/assets/images/Professor%20Monir%20Morshed.png" alt="" className="img-fluid w-50" />
                        </div>
                        <div className="col-md-7">
                            <h3>Director</h3>
                            <h4>Professor Dr. Monir Morshed</h4>
                        </div>
                    </div>
                    {/* table */}
                    <div className="mt-5">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Amzad Hossain</td>
                                    <td>Assistant Database Programmer</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Md. Atiqul Haque</td>
                                    <td>Assistant Computer Programmer</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Dilara Shabnam</td>
                                    <td>Section Officer</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Md. Ariful Islam</td>
                                    <td>Section Officer (Data Entry)</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Md. Khairul Islam</td>
                                    <td>Administrative Officer (Hardware)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default ICTCell;
