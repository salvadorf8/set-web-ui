// import React, { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
          <div className="container">
              <span className="navbar-brand">STREAMLINE WIRING</span>
              <div className="navbar-header">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact/new" >Contact Us</Link>
                </li>
                <li className="nav-item">
                  <span className="nav-link" to="" >Phone:  817 909 2138</span>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </nav>
    )
};

export default NavigationBar;