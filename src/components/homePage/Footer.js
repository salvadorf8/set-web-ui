import './Footer.css';
import React from 'react';
import { Container, Row, MDBCol, MDBFooter, MDBBtn, MDBIcon } from 'mdbreact';

import MinimalFooter from './MinimalFooter';
// import { Link } from 'react-router-dom';

// const myButton = () => {
//     return (
//         <MDBBtn social='form' size='sm'>
//             <MDBIcon fab icon='wpforms' className='pr-1' />
//             Contact Form
//         </MDBBtn>
//     );
// };

const Footer = () => {
    return (
        <MDBFooter id='mainFooter' className='font-small mt-5'>
            <Container fluid className='text-center text-md-left'>
                <Row>
                    <MDBCol md='5'>
                        <h5 className='title'>Company Profile</h5>
                        <p>Streamline wiring was founded in 2007. We specialize in low voltage wiring and trimming installations for multi dueling unit apartments. </p>
                        <p>Voice - Data - Video</p>
                    </MDBCol>
                    <MDBCol md='7' className='md-center'>
                        <h5 className='title'>Contact Options</h5>

                        <MDBBtn social='email' href='mailto:salvador.flores@streamlinewiring.com?subject=Mail from streamlinewiring site' size='sm'>
                            <MDBIcon icon='envelope' className='pr-2' />
                            Email
                        </MDBBtn>
                        <MDBBtn
                            size='sm'
                            onClick={() => {
                                this.props.history.push('/contact/new');
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
            <MinimalFooter />
        </MDBFooter>
    );
};

export default Footer;
