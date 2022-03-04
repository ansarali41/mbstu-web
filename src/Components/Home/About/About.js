import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div class="aboutus-area">
            <Container>
                <Row>
                    <Col sm={12} xs={12} md={4} lg={4} xl={4}>
                        <div class="aboutus-image float-left hidden-sm">
                            <img src="https://mbstu.ac.bd/2ndConvocation/Academic-1.jpg" alt="" />
                        </div>
                    </Col>
                    <Col sm={12} xs={12} md={8} lg={8} xl={8}>
                        <div class="aboutus-content ">
                            <h1>
                                MBSTU <span>at a glance</span>
                            </h1>
                            <br />
                            <p>
                                Mawlana Bhashani Science and Technology University is the 12th oldest public university and 2nd science and technology specialized public university
                                in Bangladesh focusing in science, technology and business. It is named after the charismatic political leader Mawlana Abdul Hamid Khan Bhashani.
                            </p>

                            <div class="counter ">
                                <div class="single-counter text-center">
                                    <h2 class="counter">6</h2>
                                    <p>Faculties</p>
                                </div>

                                <div class="single-counter text-center">
                                    <h2 class="counter">16</h2>
                                    <p>Departments</p>
                                </div>

                                <div class="single-counter text-center">
                                    <h2 class="counter">5</h2>
                                    <p>Residential Halls</p>
                                </div>

                                <div class="single-counter text-center">
                                    <h2 class="counter">5500</h2>
                                    <p>Students</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
