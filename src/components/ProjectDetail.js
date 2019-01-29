import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageList from './commonComponents/ImageList';
import unsplash from '../api/unsplash';

class ServicesPage extends Component {
  //when we expect an object to be an array, you default your object an empty array
  state = { images: [] };

  //callback function
  //we will fix the issue using option 2 onSearchSubmit as an arrow function
  onSearchSubmit = async (term) => {
    // const response = await unsplash.get('/search/photos', {
      const response = await unsplash.get('/collections/3973797/photos', {
      params: { query: 3973797 }
      // params: { username: 'aztecsalvador'}
    });
    this.setState({ images: response.data });
  };

  componentDidMount() {
    this.onSearchSubmit('construction');
  };

  render() {
    return (
      <div className="container">
        <div>
          <h2 className="text-center mt-4 text-white">UpTown Square</h2>
        </div>
        <div  className="row mb-5">
          <div className="col-lg-4">
            <img className="img-fluid" src={require('../Assets/img/portfolio/thumbnails/UpTownSquare.png')} alt="" />
          </div>
          <div className="col-lg-8">
            <div>
              <label className="text-secondary">Address:</label>
              <p className="text-white">1354 Thorpe Ln, San Marcos, TX 78666</p>
            </div>
            <div>
              <label className="text-secondary">Duration of work:</label>
              <p className="text-white">8 Months</p>
            </div>
            <div>
              <label className="text-secondary">Number of people employed:</label>
              <p className="text-white">10</p>
            </div>
            <div>
              <label className="text-secondary">Installation Details:</label>
              <p className="text-white">A luxury apartment complex in the uptown area and most importantly a college town therefore it was imperative to have the best amenities available for all tenants.
              The contract focused on the clubhouse installation of wall mounted indoor and outdoor speaker, televisions and security to monitor behavior not to forget to mention the underground conduit and wiring 
              to provide audio and video.  The contract further more involved 36000 feet of homerun cabling and trimming, structured data cabling, and access control locks, sensors, and key fob readers to keep the unauthorized out.
              </p>
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