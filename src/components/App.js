import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Footer } from 'mdbreact';
import { connect } from 'react-redux';


import HomePage from './homePage/HomePage';
import ContactForm from './contactFormPage/ContactForm';
import ProjectDetail from './projectDetailsPage/ProjectDetail';
import NavBar from './NavBar';
import { selectProperty } from '../actions';

class App extends React.Component {

    renderApartmentLinks = () => {
        return this.props.apartments.map((apartment) => {
            return (
                <div key={apartment.id}>
                    <Route path={`/project/:id`} exact component={ProjectDetail} />
                </div>
            )
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/contact/new" component={ContactForm} />
                        {this.renderApartmentLinks()}
                    </Switch>
                    <Footer color="indigo">
                        <p className="footer-copyright mb-0 py-3 text-center text-secondary">
                            &copy; {new Date().getFullYear()} Copyright:{" "} streamlinewiring.com
                        </p>
                    </Footer>
                </div>
            </BrowserRouter>
        );
    }
};

const mapStateToProps = state => {
    return { apartments: Object.values(state.streamlineData) };
}

export default connect(mapStateToProps, { selectProperty })(App);