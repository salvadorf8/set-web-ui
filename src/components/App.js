import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBRow, MDBCol } from 'mdbreact';

import HomePage from './homePage/HomePage';
import ContactForm from './contactFormPage/ContactForm';
import ProjectDetail from './projectDetailsPage/ProjectDetail';

import { selectProperty } from '../actions';

class App extends React.Component {
    renderApartmentLinks = () => {
        return this.props.apartments.map((apartment) => {
            return (
                <div key={apartment.id}>
                    <Route path={`/project/:id`} exact component={ProjectDetail} />
                </div>
            );
        });
    };

    render() {
        return (
            <BrowserRouter>
                <MDBRow>
                    <MDBCol>
                        <Switch>
                            <Route path='/' exact component={HomePage} />
                            <Route path='/contact/new' component={ContactForm} />
                            {this.renderApartmentLinks()}
                        </Switch>
                    </MDBCol>
                </MDBRow>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return { apartments: Object.values(state.streamlineData) };
};

export default connect(mapStateToProps, { selectProperty })(App);
