import React from 'react';
// import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

// import './styles.css';
//---------------------------------------------------------------------
// Common helpers and constants imports
//---------------------------------------------------------------------
import { setClassNameInDefns } from '../../../Helper/definitionHelper';
import { Link } from 'react-router-dom';
//---------------------------------------------------------------------
// CSS
//---------------------------------------------------------------------
const useStyles = (params = {}) => {
    return makeStyles(theme => ({
        root: { position: 'fixed', zIndex: 5, width: '100%' },
        logoText: { fontWeight: 'bold' },
        marqueeContainer: { display: 'flex', alignItems: 'center', background: 'black' },
        navbarContainer: { padding: '0px 20px', background: '#0a1c2e !important' },
        link: { textDecoration: 'none', color: 'inherit' },
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

const Header = () => {
    const classes = useStyles({})();
    const defns = getDefns({ classes });
    return (
        <div {...defns.root}>
            <div {...defns.marqueeContainer}>
                {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                <marquee width="90%" direction="left" style={{ background: '#E6E7E8' }}>
                    মাওলানা ভাসানী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের নব-নিযুক্ত মাননীয় ভাইস-চ্যান্সেলর অধ্যাপক ড. মোঃ ফরহাদ হোসেন কে শুভেচ্ছা ও অভিনন্দন।
                </marquee>
                <span className="text-warning px-4">Highlight</span>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" {...defns.navbarContainer}>
                <Navbar.Brand>
                    <Link to="/" {...defns.link}>
                        <img className="w-25" src="https://i.ibb.co/s5XmR5J/mbstu-logo.png" alt="" />
                    </Link>

                    <Link to="/" {...defns.link}>
                        <span {...defns.logoText}>MBSTU</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/home" {...defns.link}>
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/history" {...defns.link}>
                                History
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/administration" {...defns.link}>
                                Administration
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/notice" {...defns.link}>
                                Notice
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/campus-life" {...defns.link}>
                                Campus Life
                            </Link>
                        </Nav.Link>
                        {/* <NavDropdown title="Departments" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">CSE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">ICT</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Textile Engineering</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">About</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://mbstu.ac.bd/admissionresult.html" target="_blank">
                            Admission
                        </Nav.Link>
                        <Nav.Link eventKey={2}>
                            <Link to="/ict-cell" {...defns.link}>
                                ICT Cell
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
