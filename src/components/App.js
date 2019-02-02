import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Footer } from 'mdbreact';

import HomeIndex from './Home';
import ContactNew from './ContactForm';
import ProjectDetail from './ProjectDetail';
import NavBar from './NavBar';

class App extends React.Component {
    state = {
        n001:
        {
            aptName: 'UpTown Square',
            address: '1354 Thorpe Ln, San Marcos, TX 78666',
            mainImage: 'dallas1/UpTownSquare',
            duration: '8 Months',
            numberOfEmployed: 10,
            details: 'A luxury apartment complex in the uptown area and most importantly a college town therefore it was imperative to have the best amenities available for all tenants.  The contract focused on the clubhouse installation of wall mounted indoor and outdoor speaker, televisions and security to monitor behavior not to forget to mention the underground conduit and wiring to provide audio and video.  The contract further more involved approximatly 75000 feet of home run cabling and trim out, structured data cabling, and access control locks, sensors, and key fob readers to keep the unauthorized out.',
            images: [
                { id: '1', description: null, urls: { regular: 'dallas1/IMG_0874' } },
                { id: '2', description: null, urls: { regular: 'dallas1/IMG_0875' } },
                { id: '3', description: null, urls: { regular: 'dallas1/IMG_0876' } },
                { id: '4', description: null, urls: { regular: 'dallas1/IMG_0877' } },
                { id: '5', description: null, urls: { regular: 'dallas1/IMG_0878' } },
                { id: '7', description: null, urls: { regular: 'dallas1/IMG_0880' } },
                { id: '8', description: null, urls: { regular: 'dallas1/IMG_0881' } },
                { id: '9', description: null, urls: { regular: 'dallas1/IMG_0884' } }
            ]
        },
        n002:
        {
            aptName: '',
            address: '',
            mainImage: 'dallas1/UpTownSquare',
            duration: '',
            numberOfEmployed: 10,
            details: '',
            images: [
                { id: '1', description: null, urls: { regular: 'dallas2/IMG_1190' } },
                { id: '2', description: null, urls: { regular: 'dallas2/IMG_1192' } },
                { id: '3', description: null, urls: { regular: 'dallas2/IMG_1206' } },
                { id: '4', description: null, urls: { regular: 'dallas2/IMG_1207' } },
                { id: '5', description: null, urls: { regular: 'dallas2/IMG_1230' } },
                { id: '7', description: null, urls: { regular: 'dallas2/IMG_1231' } },
                { id: '8', description: null, urls: { regular: 'dallas2/IMG_1234' } }
            ]
        },
        n003:
        {
            aptName: '',
            address: '',
            mainImage: 'dallas1/UpTownSquare',
            duration: '',
            numberOfEmployed: 10,
            details: '',
            images: [
                { id: '1', description: null, urls: { regular: 'dallas3/IMG_1463' } },
                { id: '2', description: null, urls: { regular: 'dallas3/IMG_1464' } },
                { id: '3', description: null, urls: { regular: 'dallas3/IMG_1465' } },
                { id: '4', description: null, urls: { regular: 'dallas3/IMG_1504' } },
                { id: '5', description: null, urls: { regular: 'dallas3/IMG_1505' } },
                { id: '7', description: null, urls: { regular: 'dallas3/IMG_1507' } },
                { id: '8', description: null, urls: { regular: 'dallas3/IMG_1508' } }
            ]
        },
        n004:
        {
            aptName: '',
            address: '',
            mainImage: 'dallas1/UpTownSquare',
            duration: '',
            numberOfEmployed: 10,
            details: '',
            images: [
                { id: '1', description: null, urls: { regular: 'dallas4/IMG_1321' } },
                { id: '2', description: null, urls: { regular: 'dallas4/IMG_1322' } },
                { id: '4', description: null, urls: { regular: 'dallas4/IMG_1324' } },
                { id: '5', description: null, urls: { regular: 'dallas4/IMG_1517' } },
                { id: '7', description: null, urls: { regular: 'dallas4/IMG_1518' } },
                { id: '8', description: null, urls: { regular: 'dallas4/IMG_1520' } },
                { id: '5', description: null, urls: { regular: 'dallas4/IMG_1521' } },
                { id: '7', description: null, urls: { regular: 'dallas4/IMG_1557' } },
                { id: '8', description: null, urls: { regular: 'dallas4/IMG_1567' } }
            ]
        }
    };

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Route path="/" exact component={HomeIndex} />
                    <Route path="/contact/new" component={ContactNew} />
                    <Route path="/project/001" render={(props) => <ProjectDetail
                        aptName={this.state.n001.aptName}
                        address={this.state.n001.address}
                        duration={this.state.n001.duration}
                        numberOfEmployed={this.state.n001.numberOfEmployed}
                        details={this.state.n001.details}
                        mainImage={this.state.n001.mainImage}
                        images={this.state.n001.images}
                    />}
                    />
                    <Route path="/project/002" exact render={(props) => <ProjectDetail
                        aptName={this.state.n002.aptName}
                        address={this.state.n002.address}
                        duration={this.state.n002.duration}
                        numberOfEmployed={this.state.n002.numberOfEmployed}
                        details={this.state.n002.details}
                        mainImage={this.state.n002.mainImage}
                        images={this.state.n002.images}
                    />}
                    />
                    <Route path="/project/003" exact render={(props) => <ProjectDetail
                        aptName={this.state.n003.aptName}
                        address={this.state.n003.address}
                        duration={this.state.n003.duration}
                        numberOfEmployed={this.state.n003.numberOfEmployed}
                        details={this.state.n003.details}
                        mainImage={this.state.n003.mainImage}
                        images={this.state.n003.images}
                    />}
                    />
                    <Route path="/project/004" exact render={(props) => <ProjectDetail
                        aptName={this.state.n004.aptName}
                        address={this.state.n004.address}
                        duration={this.state.n004.duration}
                        numberOfEmployed={this.state.n004.numberOfEmployed}
                        details={this.state.n004.details}
                        mainImage={this.state.n004.mainImage}
                        images={this.state.n004.images}
                    />}
                    />
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

export default App;