import './Footer.css';

import React from 'react';
import { Container, Row, MDBCol, MDBFooter, MDBBtn, MDBIcon } from 'mdbreact';

const Footer = (props) => {
    return (
        <div>
            <MDBFooter id='mainFooter' className='font-small pt-5' color='elegant-color-dark'>
                <Container fluid className='text-center text-md-left'>
                    <Row>
                        <MDBCol md='6'>
                            <h5 className='title'>Company Profile</h5>
                            <p>Streamline wiring was founded in 2007. We specialize in low voltage wiring and trimming installations for multi-family construction properties.</p>
                            <p>Voice - Data - Video</p>
                        </MDBCol>
                        <MDBCol md='6' className='md-center'>
                            <h5 className='title'>Contact Options</h5>

                            <MDBBtn social='email' href='mailto:salvador.flores@streamlinewiring.com?subject=Mail from streamlinewiring site' size='sm'>
                                <MDBIcon icon='envelope' className='pr-2' />
                                Email
                            </MDBBtn>
                            <MDBBtn
                                size='sm'
                                onClick={() => {
                                    props.history.push('/contact/new');
                                }}>
                                <MDBIcon fab icon='wpforms' className='pr-2' />
                                Contact Form
                            </MDBBtn>
                            <MDBBtn social='phone' href='tel: 972-302-9892' size='sm'>
                                <MDBIcon icon='phone' className='pr-2' />
                                972 302 9892
                            </MDBBtn>

                            <p>Need an estimate? Please send all bidding/estimating inquires by email</p>
                        </MDBCol>
                    </Row>
                </Container>
                <div className={`footer-copyright text-center py-3 mt-5`}>
                    &copy; {new Date().getFullYear()} Copyright: <a href='http://www.streamlinewiring.com'>Streamlinewiring.com</a>
                </div>
            </MDBFooter>
        </div>
    );
};

export default Footer;
