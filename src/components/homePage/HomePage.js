import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Footer from './Footer';

// TODO - finish converting this component styling to MDBreact
class Header extends Component {
    constructImageLinks = () => {
        return this.props.apartments.map((apartment) => {
            return (
                <div className='col-lg-4 col-sm-6' key={apartment.id}>
                    <Link className='portfolio-box' to={`/project/${apartment.id}`}>
                        <img className='img-fluid' src={require(`../../assets/img/portfolio/thumbnails/${apartment.mainImage}.jpg`)} alt='' />
                        <div className='portfolio-box-caption'>
                            <div className='portfolio-box-caption-content'>
                                <div className='project-category text-faded'>Click for more info</div>
                                <div className='project-name'>{apartment.aptName}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                <header className='masthead text-center text-white d-flex'>
                    <div className='container my-auto bg-dark-transparent'>
                        <div className='row'>
                            <div className='col-lg-10 mx-auto'>
                                <h1 className='text-uppercase'>
                                    <strong>Streamline Wiring Installations</strong>
                                </h1>
                                <hr />
                            </div>
                            <div className='col-lg-8 mx-auto'>
                                <p className='mb-5'>
                                    Installation &amp; Structured Cabling - Trim Out - Security and Authorization Integration <br /> We focus on Multifamily Apartment Complex Projects
                                </p>
                                {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a> */}
                            </div>
                        </div>
                    </div>
                </header>
                <section className='bg-dark' id='about'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h2 className='section-heading text-white'>Services</h2>
                                <hr className='my-1' />
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-6 text-center'>
                                <div className='service-box mt-5 mx-auto'>
                                    <i className='text-primary mb-3 sr-icons' />
                                    <h3 className='mb-3 text-white'>Voice</h3>
                                    <p className='text-muted mb-0'>Our team can help design and install the voice wiring that meets your needs whether it be a traditional landline or VoIP.</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 text-center'>
                                <div className='service-box mt-5 mx-auto'>
                                    <i className='text-primary mb-3 sr-icons' />
                                    <h3 className='mb-3 text-white'>Data</h3>
                                    <p className='text-muted mb-0'>Structured, low-voltage cabling is the backbone of any network infrastructure. Our team will deliver your next project with success.</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 text-center'>
                                <div className='service-box mt-5 mx-auto'>
                                    <i className='text-primary mb-3 sr-icons' />
                                    <h3 className='mb-3 text-white'>Video</h3>
                                    <p className='text-muted mb-0'>Interested in video applications? Our team of experienced A/V professionals are specialized in home or office entertainment.</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 text-center'>
                                <div className='service-box mt-5 mx-auto'>
                                    <i className='text-primary mb-3 sr-icons' />
                                    <h3 className='mb-3 text-white'>Access Control</h3>
                                    <p className='text-muted mb-0'>Protecting those who are most vulnerable are both security and safety requirements of today. Our team will deliver a solid access control solution.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='p-0  bg-dark minor-space' id='portfolio'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h2 className='section-heading text-white'>Project Spotlights</h2>
                                <hr className='my-4' />
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid p-0'>
                        <div className='row no-gutters popup-gallery'>{this.constructImageLinks()}</div>
                    </div>
                </section>

                <div className='parallax' />
                <Footer />
                {/* <div className='bg-dark' id='contact'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8 mx-auto text-center'>
                                <h2 className='section-heading text-white mt-4'>Let's Get In Touch!</h2>
                                <hr className='my-4' />
                                <p className='mb-5 text-faded'>Ready to start your next project with us? We are Ready - We will be there.</p>
                            </div>
                            <div className='container'>
                                <div className='col-lg-12 mx-auto text-center'>
                                    <Link className='btn btn-primary btn-lg  mb-5' to='/contact/new'>
                                        Contact Us
                                    </Link>
                                    <p className='mb-5 text-faded'>Or Call Us at: 817-909-2138</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { apartments: Object.values(state.streamlineData) };
};

export default connect(mapStateToProps)(Header);
