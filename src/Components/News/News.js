import React, {useEffect, useState} from 'react';
import {Grid, makeStyles} from '@material-ui/core';

// import './styles.css';
//---------------------------------------------------------------------
// Common helpers and constants imports
//---------------------------------------------------------------------
import {setClassNameInDefns} from '../../Helper/definitionHelper';
import {Card} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import {Button} from '@mui/material';
import banner from '../../Images/Latest-News-Banner-01.png';
import axios from "axios";
//---------------------------------------------------------------------
// CSS
//---------------------------------------------------------------------
const useStyles = (params = {}) => {
    return makeStyles(theme => ({
        // root: { paddingTop: '120' },
        heading: {paddingLeft: 18, paddingTop: 20},
    }));
};

//---------------------------------------------------------------------
// Get definitions
//---------------------------------------------------------------------
const getDefns = params => {
    const {classes} = params;

    const defns = {
        noticeContainer: {container: true, justification: 'space-between'},
        noticeCard: {item: true, xl: 4, lg: 4, md: 6, sm: 6, xs: 11},
    };

    // Automatically inject className for matching keys
    setClassNameInDefns(defns, classes);

    return defns;
};

const News = () => {
    // local state
    const [notices, setNotices] = useState([]);
    const url = useLocation();
    const noticeShowLength = url.pathname === '/' || url.pathname === '/home' ? 3 : notices.length;
    // effects
    useEffect(() => {
        axios.get("http://localhost:4000/news/all-news").then((res) => {
            console.log(res.data);
            setNotices(res.data.result)
        });

    }, []);

    // scrollToTop
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const classes = useStyles({})();
    const defns = getDefns({classes});
    return (
        <div {...defns.root}>
            <div>
                {url.pathname === '/' || url.pathname === '/home' ? null : (
                    <div style={{paddingTop: '100px'}}>
                        <img src={banner} alt="" className="w-100"/>
                    </div>
                )}

                <h3 {...defns.heading}>LATEST NEWS</h3>
                <Grid {...defns.noticeContainer}>
                    {notices.slice(0, noticeShowLength).map(notice => (
                        <Grid key={notice._id} {...defns.noticeCard}>
                            {/* <Link to={`/notice/${notice.id}`}> */}
                            <Card className="m-3 border border-primary">
                                <Card.Img variant="top"
                                          src="http://zamanmuzib.weebly.com/uploads/2/6/8/9/26898612/header_images/1418327668.jpg"/>
                                <Card.Body>
                                    <Card.Title>{notice.title}</Card.Title>
                                    <Card.Text>{notice.noticeDetails}</Card.Text>
                                    <a href={notice.pdf} target="_blank" rel="noreferrer"
                                       style={{textDecoration: 'none'}}>
                                        <Button variant="outlined" color="primary">
                                            See More
                                        </Button>
                                    </a>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated {notice.date} mins ago</small>
                                </Card.Footer>
                            </Card>
                            {/* </Link> */}
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default News;
