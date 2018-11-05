import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ServicesPage extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center mt-4">
          Under Construction
        </h2>
        <h2 className="text-center mb-5">
          Coming Soon
        </h2>
        <div className="text-center">
          <Link className="btn btn-primary btn-sm btn-block" to="/" >Return to Home</Link>
        </div>
        
      </div>
    );
  }
}
// btn btn-light btn-xl mb-5   
export default ServicesPage;