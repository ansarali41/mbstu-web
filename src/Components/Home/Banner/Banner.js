import React from 'react';
import { Carousel } from 'react-bootstrap';
// import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';

// import './styles.css';
//---------------------------------------------------------------------
// Common helpers and constants imports
//---------------------------------------------------------------------
import { setClassNameInDefns } from '../../../Helper/definitionHelper';
//---------------------------------------------------------------------
// CSS
//---------------------------------------------------------------------
const useStyles = (params = {}) => {
    return makeStyles(theme => ({
        root: { paddingTop: 100 },
        mujibBorhsoImgContainer: { display: 'flex', justifyContent: 'center', padding: '25px 0px' },
    }));
};

//---------------------------------------------------------------------
// Get definitions
//---------------------------------------------------------------------
const getDefns = params => {
    const { classes } = params;

    const defns = {
        pageContainer: { container: true, direction: 'column' },
        pageHeader: { item: true, lg: 12, md: 12, sm: 12, xs: 12 },
    };

    // Automatically inject className for matching keys
    setClassNameInDefns(defns, classes);

    return defns;
};

const Banner = () => {
    const classes = useStyles({})();
    const defns = getDefns({ classes });
    return (
        <div {...defns.root}>
            <Carousel fade>
                <Carousel.Item>
                    <img style={{ height: 400 }} className="d-block w-100" src="https://mbstu.ac.bd/images/main_gate.jpg" alt="First slide" />
                    {/* <Carousel.Caption>
                        <h3>First Gate</h3>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 400 }} className="d-block w-100" src="https://i.ibb.co/QNfwM5w/b.jpg" alt="Second slide" />

                    {/* <Carousel.Caption>
                        <h3>New Building</h3>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 400 }} className="d-block w-100" src="https://i.ibb.co/XpPp7vB/c.jpg" alt="Third slide" />

                    {/* <Carousel.Caption>
                        <h3>New Building</h3>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
            {/* <div {...defns.mujibBorhsoImgContainer}>
                <img className="img-fluid" src="https://i.ibb.co/QHMFCFq/mujib100-banner-970.jpg" alt="mujib100-banner-970" border="0" />
            </div> */}
        </div>
    );
};

export default Banner;
