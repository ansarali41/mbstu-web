import React from 'react';
// import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';
import sotoBorso from '../../../Images/sotoborso.png';
import banner1 from '../../../Images/homeBanner/banner1.jpeg';
import banner2 from '../../../Images/homeBanner/banner2.jpeg';
import banner3 from '../../../Images/homeBanner/banner3.jpeg';

// import './styles.css';
//---------------------------------------------------------------------
// Common helpers and constants imports
//---------------------------------------------------------------------
import { setClassNameInDefns } from '../../../Helper/definitionHelper';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

//---------------------------------------------------------------------
// CSS
//---------------------------------------------------------------------
const useStyles = (params = {}) => {
    return makeStyles(theme => ({
        root: { paddingTop: 100 },
        sotoBorsoImg: { position: 'absolute', right: 0, top: 130, background: 'white' },
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
            <Carousel>
                <div>
                    <img src={banner1} alt="img" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={banner2} alt="img" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={banner3} alt="img" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            <div {...defns.sotoBorsoImg}>
                <img src={sotoBorso} alt="" className="img-fluid" />
            </div>
        </div>
    );
};

export default Banner;
