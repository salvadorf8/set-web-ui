import './underconstruction.css';

import React from 'react';
import { MDBCol, MDBRow, MDBBtn, MDBView, MDBMask, MDBContainer, MDBBadge } from 'mdbreact';
import NavBar from '../NavigationBar';
import MinimizedFooter from '../homePage/MinimizedFooter';

class UnderConstruction extends React.Component {
    state = { days: 4, hours: 0, minutes: 0, seconds: 0 };

    componentDidMount = () => {
        this.myInterval = setInterval(() => {
            const { days, hours, minutes, seconds } = this.state;

            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        if (days === 0) {
                            clearInterval(this.myInterval);
                        } else {
                            this.setState(({ days }) => ({ days: days - 1 }));
                            this.setState({ hours: 23 });
                            this.setState({ minutes: 59 });
                            this.setState({ seconds: 59 });
                        }
                    } else {
                        this.setState(({ hours }) => ({ hours: hours - 1 }));
                        this.setState({ minutes: 59 });
                        this.setState({ seconds: 59 });
                    }
                } else {
                    this.setState(({ minutes }) => ({ minutes: minutes - 1 }));
                    this.setState({ seconds: 59 });
                }
            } else {
                this.setState(({ seconds }) => ({ seconds: seconds - 1 }));
            }
        }, 1000);
    };

    render() {
        const { days, hours, minutes, seconds } = this.state;

        return (
            <div id='underconstruction'>
                <NavBar isFixed='top' />
                <MDBView>
                    <MDBMask className='d-flex justify-content-center align-items-center' overlay='stylish-strong'>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol>
                                    <div className='text-center mx-auto white-text'>
                                        <h1 className='display-4 mb-4'>
                                            <strong>Coming Soon!</strong>
                                        </h1>

                                        <h4 className='mb-4'>
                                            <strong>Working hard to finish the development of this page. </strong>
                                        </h4>
                                        <MDBRow className='mb-5'>
                                            <MDBCol className='border border-light my-5 py-2 mx-4 z-depth-5'>{days < 2 ? `${days} day` : `${days} days`}</MDBCol>
                                            <MDBCol className='border border-light my-5 py-2 mx-4 z-depth-5'>{hours < 10 ? `0${hours} hours` : `${hours} hour`}</MDBCol>
                                            <MDBCol className='border border-light my-5 py-2 mx-4 z-depth-5'>{minutes < 10 ? `0${minutes} minutes` : `${minutes} minute`}</MDBCol>
                                            <MDBCol className='border border-light my-5 py-2 mx-4 z-depth-5'>{seconds < 10 ? `0${seconds} seconds` : `${seconds} seconds`}</MDBCol>
                                        </MDBRow>

                                        <h4 className='mb-4 d-none d-md-block'>
                                            <strong></strong>
                                        </h4>
                                        {/* <MDBBtn className='z-depth-5 myColor' size='sm'>
                                            Return to home
                                        </MDBBtn> */}
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
                <MinimizedFooter />
            </div>
        );
    }
}

export default UnderConstruction;

// <!-- Full Page Intro -->
//             <div class="view">

//               <video class="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsinline autoplay
//                 muted loop>
//                 <source src="https://mdbootstrap.com/img/video/Lines-min.mp4" type="video/mp4">
//               </video>

//               <!-- Mask & flexbox options-->
//               <div class="mask rgba-black-light d-flex justify-content-center align-items-center">

//                 <!-- Content -->
//                 <div class="text-center white-text mx-5 wow fadeIn">

//                   <h1 class="display-4 mb-4">
//                     <strong>Coming Soon!</strong>
//                   </h1>

//                   <!-- Time Counter -->
//                   <p id="time-counter" class="border border-light my-4"></p>

//                   <h4 class="mb-4">
//                     <strong>We're working hard to finish the development of this site. </strong>
//                   </h4>

//                   <h4 class="mb-4 d-none d-md-block">
//                     <strong>Until then have a look at our Free Bootstrap 4 tutorials</strong>
//                   </h4>

//                   <a target="_blank" href="https://mdbootstrap.com/education/bootstrap/" class="btn btn-outline-white btn-lg">Start
//                     free tutorial
//                     <i class="fas fa-graduation-cap ml-2"></i>
//                   </a>
//                 </div>
//                 <!-- Content -->

//               </div>
//               <!-- Mask & flexbox options-->

//             </div>
//             <!-- Full Page Intro --></div>
