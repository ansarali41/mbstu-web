import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './MenuBar.css';
import { Link } from 'react-router-dom';

function MenuBar() {
    return (
        <Navbar bg="bg-white" expand="lg" className="shadow-sm bg-body fixed-top">
            <Container fluid className="container">
                {/* <Navbar.Brand href="#"> */}
                <Link to="/">
                    <img src="" alt="" style={{ width: 70 }} />
                </Link>
                <h6 className="text-center px-2 heading-title">
                    M/S JAHANARA CONSTRUCTION <br /> & SUPPLIER
                </h6>

                {/* </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="justify-content-lg-end" id="navbarScroll">
                    <Nav className="mr-auto" style={{ maxHeight: '100%' }} navbarScroll>
                        <Nav.Link>
                            <Link className="navbar-link" to="/home">
                                Home
                            </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link className="navbar-link" to="/qualityPlan">
                                Quality Plan
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="navbar-link" to="/gallery">
                                Gallery
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="navbar-link" to="/machinery-collections">
                                Machineries
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MenuBar;
