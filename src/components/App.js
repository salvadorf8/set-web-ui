import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBRow, MDBCol } from 'mdbreact';

import HomePage from './homePage/HomePage';
import ContactForm from './contactFormPage/ContactForm';
import ProjectDetail from './projectDetailsPage/ProjectDetail';
import Login from './managementPage/Login';
import DrawSchedule from './managementPage/DrawSchedule';
import Uconstruction from './projectDetailsPage/UnderConstruction';

import { selectProperty } from '../actions';

class App extends React.Component {
    renderApartmentLinks = () => {
        return this.props.apartments.map((apartment) => {
            if (apartment.isUnderConstruction) {
                return <Route key={apartment.id} path='/underconstruction' exact component={Uconstruction} />;
            }

            return <Route key={apartment.id} path={`/project/:id`} exact component={ProjectDetail} />;
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
                            <Route path='/login' component={Login} />
                            <Route path='/manager/drawschedule/:id' component={DrawSchedule} />
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
