import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageList from './commonComponents/ImageList';
// import unsplash from '../api/unsplash';

class ProjectDetail extends Component {

  // onSearchSubmit = async (term) => {
  //   // const response = await unsplash.get('/search/photos', {
  //     const response = await unsplash.get('/collections/3973797/photos', {
  //     params: { query: 3973797 }
  //   });
  //   // this.setState({ images: response.data });
  // };

  // componentDidMount() {
  //   this.onSearchSubmit('construction');
  // };

  render(props) {
    return (
      <div className="container">
        <div>
          <h2 className="text-center mt-4 text-white">{this.props.aptName}</h2>
        </div>
        <div className="row mb-5">
          <div className="col-lg-4">
            <img className="img-fluid" src={require(`../assets/img/portfolio/thumbnails/${this.props.mainImage}.jpg`)} alt="" />
          </div>
          <div className="col-lg-8">
            <div>
              <label className="text-secondary">Address:</label>
              <p className="text-white">{this.props.address}</p>
            </div>
            <div>
              <label className="text-secondary">Duration of work:</label>
              <p className="text-white">{this.props.duration}</p>
            </div>
            <div>
              <label className="text-secondary">Number of people employed:</label>
              <p className="text-white">{this.props.numberOfEmployed}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <label className="text-secondary">Installation Details:</label>
            <p className="text-white">{this.props.details}</p>
          </div>
        </div>
        <div className="mb-5">
          <ImageList images={this.props.images} />
        </div>
        <div className="text-center">
          <Link className="btn btn-primary btn-sm btn-block" to="/" >Return to Home</Link>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;