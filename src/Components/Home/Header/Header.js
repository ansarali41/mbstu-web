import React from 'react';
// import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

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
        root: { position: 'fixed', zIndex: 5, width: '100%' },
        logoText: { fontWeight: 'bold' },
        marqueeContainer: { display: 'flex', alignItems: 'center', background: 'black' },
        navbarContainer: { padding: '0px 20px', background: '#0a1c2e !important' },
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
                    করোনা ঝুঁকি যাচাই করতে ৩৩৩ বা *৩৩৩২# ডায়াল করুন। ভিজিট করুন corona.gov.bd অথবা ডাউনলোড করুন CoronaBD অ্যাপ। ৩৩৩ নম্বরে অপ্রয়োজনে কল করা থেকে বিরত থাকুন।
                </marquee>
                <span className="text-warning px-4">Highlight</span>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" {...defns.navbarContainer}>
                <Navbar.Brand href="#home">
                    <img className="w-25" src="https://i.ibb.co/s5XmR5J/mbstu-logo.png" alt="" /> <span {...defns.logoText}>MBSTU</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#History">History</Nav.Link>
                        <Nav.Link href="#History">Notice</Nav.Link>
                        <NavDropdown title="Departments" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">CSE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">ICT</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Textile Engineering</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">About</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Admission</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            ICT Cell
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
