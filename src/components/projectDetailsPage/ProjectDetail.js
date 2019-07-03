import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ImageList from './ImageList';


class ProjectDetail extends React.Component {

  render() {
    return (
      <div className="container">
        <div>
          <h2 className="text-center mt-4 text-white">{this.props.apartment.aptName}</h2>
        </div>
        <div className="row mb-5">
          <div className="col-lg-4">
            <img className="img-fluid" src={require(`../../assets/img/portfolio/thumbnails/${this.props.apartment.mainImage}.jpg`)} alt="" />
          </div>
          <div className="col-lg-8">
            <div>
              <label className="text-secondary">Address:</label>
              <p className="text-white">{this.props.apartment.address}</p>
            </div>
            <div>
              <label className="text-secondary">Duration of work:</label>
              <p className="text-white">{this.props.apartment.duration}</p>
            </div>
            <div>
              <label className="text-secondary">Number of people employed:</label>
              <p className="text-white">{this.props.apartment.numberOfEmployed}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <label className="text-secondary">Installation Details:</label>
            <p className="text-white">{this.props.apartment.details}</p>
          </div>
        </div>
        <div className="mb-5">
          <ImageList images={this.props.apartment.images} />
        </div>
        <div className="text-center">
          <Link className="btn btn-primary btn-sm btn-block" to="/" >Return to Home</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return { apartment: state.streamlineData[ownProps.match.params.id] };
}

export default connect(mapStateToProps)(ProjectDetail);