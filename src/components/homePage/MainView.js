import './mainview.css';

import React from 'react';
import { MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBAnimation } from 'mdbreact';

import NavBar from '../NavigationBar';

const MainView = () => {
    return (
        <div id='mainview'>
            <NavBar isFixed='top' />
            <MDBView>
                <img className='img-fluid' alt='' />
                <MDBMask className='d-flex align-items-center gradient'>
                    <MDBContainer className=' my-auto'>
                        <MDBRow>
                            <MDBCol md='8' className='white-text text-center mx-auto'>
                                <MDBAnimation type='fadeInLeft' delay='.3s'>
                                    <h1 className='h1-responsive mt-sm-4 mx-sm-2'>STREAMLINE WIRING INSTALLATIONS</h1>
                                    <hr />
                                    <h6 className='mb-sm-1'>structured cabling - trim outs - security and authorization entry installations</h6>
                                    <h6 className='mb-sm-1 mb-lg-5'>14 years delivering multidwelling unit (MDU) solutions</h6>
                                </MDBAnimation>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBMask>
            </MDBView>
        </div>
    );
};

export default MainView;
