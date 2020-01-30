import './homepage.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import MainView from './MainView';
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
            <div id='homepage'>
                <MainView />
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h2 className='section-heading'>Low-Voltage</h2>
                                <hr className='my-1' />
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-6 text-center'>
                                <div className='service-box mt-5 mx-auto'>
                                    <i className='text-primary mb-3 sr-icons' />
                                    <h3 className='mb-3'>Voice</h3>
                                    <p className='mb-0'>Traditional landline or VoIP, communication installation has always been a standard where our professionals are here to install to code</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 text-center'>
                                <div className='service-box mt-5 mx-auto'>
                                    <i className='text-primary mb-3 sr-icons' />
                                    <h3 className='mb-3'>Video</h3>
                                    <p className='mb-0'>Interested in audio and visual applications? Our team of experienced A/V professionals are specialized in Amenities relaxation and entertainment.</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 text-center'>
                                <div className='service-box mt-5 mx-auto'>
                                    <i className='text-primary mb-3 sr-icons' />
                                    <h3 className='mb-3'>Data</h3>
                                    <p className='mb-0'>Structuring low-voltage wiring is the backbone of any network infrastructure. Our team will home run connectivity capability where desired.</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 text-center'>
                                <div className='service-box mt-5 mx-auto'>
                                    <i className='text-primary mb-3 sr-icons' />
                                    <h3 className='mb-3'>Access Control</h3>
                                    <p className='mb-0'>Protecting those who are most vulnerable are both a security and safety of today. We will install hardware to any door location and run wiring to any MDF or IDF</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='p-0 minor-space mb-5' id='portfolio'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h2 className='section-heading'>Project Spotlights</h2>
                                <hr className='my-4' />
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid p-0'>
                        <div className='row no-gutters popup-gallery'>{this.constructImageLinks()}</div>
                    </div>
                </section>

                <div className='parallax' />
                <Footer history={this.props.history} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { apartments: Object.values(state.streamlineData) };
};

export default connect(mapStateToProps)(Header);
