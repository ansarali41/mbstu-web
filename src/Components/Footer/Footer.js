// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="contactUs-container">
            <div className="row p-5 w-100">
                <div className="col-md-8">
                    <div className="container">
                        <h1 className="contactUs-title">Contact Us</h1>
                        <div style={{ height: '2px', background: '#fff', margin: '15px 0px', marginRight: 62 }} />
                        <div className="d-flex align-items-center">
                            <h6>Phone: +880921 55399</h6>
                        </div>
                        <div className="d-flex align-items-center">
                            <h6>Fax: +880921 55400</h6>
                        </div>
                        <div className="d-flex align-items-center">
                            {/* <FontAwesomeIcon icon={faEnvelope} className="icons" /> */}
                            <h6>
                                Email:{' '}
                                <a href="mailto:registrar@mbstu.ac.bd" className="footer-items a-link-style">
                                    registrar@mbstu.ac.bd
                                </a>
                            </h6>
                        </div>
                        <br />

                        <div className="d-flex align-items-center">
                            {/* <FontAwesomeIcon icon={faLocationDot} className="icons" /> */}

                            <h6 className="footer-items">
                                MAWLANA BHASHANI SCIENCE AND TECHNOLOGY UNIVERSITY <br /> Santosh, Tangail - 1902.
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-10 container pt-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.1734093609593!2d89.88839481499062!3d24.235712984352368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfc7edb573571%3A0xda791ddc1ce793bd!2sMawlana%20Bhashani%20Science%20and%20Technology%20University!5e0!3m2!1sen!2sbd!4v1668269837783!5m2!1sen!2sbd"
                        width="100% "
                        height="200"
                        style={{ border: 10 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="map"
                    ></iframe>
                </div>
            </div>
            <div className="d-flex justify-content-center copy-right-text pt-2">
                <p className="bottom-text">MBSTU © {new Date().getFullYear()}. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
