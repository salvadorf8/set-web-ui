import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageList from '../commonComponents/ImageList';
import unsplash from '../../api/unsplash';

class ServicesPage extends Component {
  //when we expect an object to be an array, you default your object an empty array
  state = { images: [] };

  //callback function
  //we will fix the issue using option 2 onSearchSubmit as an arrow function
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  componentDidMount() {
    this.onSearchSubmit('construction');
  };

  render() {
    return (
      <div className="container">
        <div>
          <h2 className="text-center mt-4 text-white">APARTMENT COMPLEX NAME</h2>
        </div>
        <div  className="row mb-5">
          <div className="col-lg-4">
            <img className="img-fluid" src={require('../../Assets/img/windsor_city_line.jpg')} alt="" />
          </div>
          <div className="col-lg-8">
            <div>
              <label className="text-secondary">Duration of work:</label>
              <p className="text-white">2 years</p>
            </div>
            <div>
              <label className="text-secondary">Number of people employed:</label>
              <p className="text-white">10</p>
            </div>
            <div>
              <label className="text-secondary">Installation Details:</label>
              <p className="text-white">Ran 10,000 ft of cable, installed conduit, installed access control items on 20 doors.  Also installed 10 televisions, ceiling speakers</p>
            </div>
          </div>
          
        </div>
        <div className="mb-5">
            <ImageList images={this.state.images} />
          </div>

        <div className="text-center">
          <Link className="btn btn-primary btn-sm btn-block" to="/" >Return to Home</Link>
        </div>

      </div>
    );
  }
}
// btn btn-light btn-xl mb-5   
export default ServicesPage;