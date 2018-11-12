import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Navigation from '../headerfooterComponents/navigation_bar';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="masthead text-center text-white d-flex">
          <div className="container my-auto bg-dark-transparent">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h1 className="text-uppercase">
                  <strong>Streamline Wiring Installations</strong>
                </h1>
                <hr></hr>
              </div>
              <div className="col-lg-8 mx-auto">
                <p className="mb-5">Wiring and Cabling Installations - Trim Out - Security and Authorization Integration for Multifamily Development Projects</p>
                {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a> */}
              </div>
            </div>
          </div>
        </header>

        <section className="bg-dark" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-white">Services</h2>
                <hr className="my-1" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3 text-white">Voice</h3>
                  <p className="text-muted mb-0">Our team can help design and install the voice wiring that meets your needs whether it be a traditional landline or VoIP.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3 text-white">Data</h3>
                  <p className="text-muted mb-0">Structured, low-voltage cabling is the backbone of any network infrastructure. Our team will deliver your next project with success.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3 text-white">Video</h3>
                  <p className="text-muted mb-0">Interested in video applications? Our team of experienced A/V professionals are specialized in home or office entertainment.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3 text-white">Access Control</h3>
                  <p className="text-muted mb-0">Protecting those who are most vulnerable are both security and safety requirements of today. Our team will deliver a solid access control solution.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-0  bg-dark minor-space" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-white">Project Spotlights</h2>
                <hr className="my-4" />
              </div>
            </div>
          </div>
          <div className="container-fluid p-0">
            <div className="row no-gutters popup-gallery">
              <div className="col-lg-4 col-sm-6">
                <Link className="portfolio-box" to="/project/001" >
                  <img className="img-fluid" src={require('../../Assets/img/windsor_city_line.jpg')} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Windsor City Line
                      </div>
                      <div className="project-name">
                        Project Duration: 2 Years
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6">
                <Link className="portfolio-box" to="/project/002" >
                  <img className="img-fluid" src={require("../../Assets/img/amesbury_apartments.jpg")} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Amesbury Apartments
                      </div>
                      <div className="project-name">
                        Project Duration: 1 Year
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6">
                <Link className="portfolio-box" to="/project/003" >
                  <img className="img-fluid" src={require("../../Assets/img/Green_Park2.jpg")} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6">
                <Link className="portfolio-box" to="/project/004" >
                  <img className="img-fluid" src={require('../../Assets/img/alexan_katy_trail.jpg')} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6">
                <Link className="portfolio-box" to="/project/005" >
                  <img className="img-fluid" src={require("../../Assets/img/Maple-Ave-2.jpg")} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6">
                <Link className="portfolio-box" to="/project/006" >
                  <img className="img-fluid" src={require("../../Assets/img/quadrangle-apartments.jpg")} alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                  </div>
                      <div className="project-name">
                        Project Name
                  </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="parallax"></div>

        <div className="bg-dark" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading text-white">Let's Get In Touch!</h2>
                <hr className="my-4" />
                <p className="mb-5 text-white">Ready to start your next project with us? Were Ready and we will be there.</p>
              </div>
              <div className="container">
                <div className="col-lg-12 mx-auto text-center">
                  <Link className="btn btn-light btn-lg  mb-5" to="/contact/new" >Contact Us</Link>
                  <p className="mb-5 text-faded">Or Call Us at:  817-909-2138</p>
                </div>
              </div>
              <div className="container">
                <div className="text-right">
                  <p className="text-faded">&copy; 2018 INPUTSTREAM All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  };
}

export default Header;