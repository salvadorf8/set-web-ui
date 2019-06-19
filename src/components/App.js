import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Footer } from 'mdbreact';
import { connect } from 'react-redux';

import HomePage from './HomePage';
import ContactNew from './ContactForm';
import ProjectDetail from './ProjectDetail';
import NavBar from './NavBar';
import { selectProperty } from '../actions';

class App extends React.Component {

    renderApartmentLinks = () => {
        return this.props.apartments.map((apartment) => {
            return (
                <div key={apartment.id}>
                    <Route path={`/project/${apartment.id}`} exact render={() => <ProjectDetail
                            aptName={apartment.aptName}
                            address={apartment.address}
                            duration={apartment.duration}
                            numberOfEmployed={apartment.numberOfEmployed}
                            details={apartment.details}
                            mainImage={apartment.mainImage}
                            images={apartment.images}
                        />}
                    />
                </div>
            )
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/contact/new" component={ContactNew} />
                    {this.renderApartmentLinks()}
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