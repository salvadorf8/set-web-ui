// TODO - currently sharing this css file, this component will have its own css
import './ImageList.css';
import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

import ImageList from './ImageList';
import { file } from '@babel/types';

// TODO - finish converting this component styling to MDBreact
class ProjectDetail extends React.Component {
    render() {
        return (
            <div className='container' id='details'>
                <div>
                    <h2 className='text-center mt-4'>{this.props.apartment.aptName}</h2>
                </div>
                <div className='row mb-5'>
                    <div className='col-lg-4'>
                        <img className='img-fluid' src={require(`../../assets/img/portfolio/thumbnails/${this.props.apartment.mainImage}.jpg`)} alt='' />
                    </div>
                    <div className='col-lg-8'>
                        <div>
                            <label>Address:</label>
                            <p>{this.props.apartment.address}</p>
                        </div>
                        <div>
                            <label>Duration of work:</label>
                            <p>{this.props.apartment.duration}</p>
                        </div>
                        <div>
                            <label>Number of people employed:</label>
                            <p>{this.props.apartment.numberOfEmployed}</p>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <label>Installation Details:</label>
                        <p>{this.props.apartment.details}</p>
                    </div>
                </div>
                <div className='mb-5'>
                    <ImageList images={this.props.apartment.images} />
                </div>
                <div>
                    <MDBRow>
                        <MDBCol md='12' className='d-flex justify-content-between'>
                            <MDBBtn
                                size='sm'
                                onClick={() => {
                                    this.props.history.push('/');
                                }}>
                                Return
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { apartment: state.streamlineData[ownProps.match.params.id] };
};

export default connect(mapStateToProps)(ProjectDetail);
