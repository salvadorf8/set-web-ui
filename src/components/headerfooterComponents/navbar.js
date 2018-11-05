import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <div className="container">
            <div className="navbar-brand js-scroll-trigger">
              INPUTSTREAM
            </div>
            <div className="navbar-header">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    {/* <Link className="nav-link js-scroll-trigger" to="/" >Home</Link> */}
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/contact/new" >Contact Us</Link>
                </li> 
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" to="" >Phone:  817 909 2138</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    );
  }
}

export default Navbar;