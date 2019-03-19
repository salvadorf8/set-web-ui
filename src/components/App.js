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
            mainImage: 'uptown-square/UpTownSquare',
            duration: '8 Months',
            numberOfEmployed: 8,
            details: 'A luxury apartment complex in the uptown area and most importantly a college town therefore it was imperative to have the best amenities available.  The contract focused on one IDF for the clubhouse and leasing installation and one IDF for the fitness gym involving wall mounted indoor and outdoor recessed ceiling speakers including speakers surrounding the pool all with volume control, 75 inch televisions and security cameras to monitor behavior.  The underground conduit and wiring to provide audio and video.  The contract further more involved approximatly 75000 feet of home run cabling and trim out, structured data cabling, total access Wifi, and access control locks, sensors, and key fob readers to keep the unauthorized out.',
            images: [
                { id: '1', description: null, urls: { regular: 'uptown-square/IMG_0874' } },
                { id: '2', description: null, urls: { regular: 'uptown-square/IMG_0875' } },
                { id: '3', description: null, urls: { regular: 'uptown-square/IMG_0876' } },
                { id: '4', description: null, urls: { regular: 'uptown-square/IMG_0877' } },
                { id: '5', description: null, urls: { regular: 'uptown-square/IMG_0878' } },
                { id: '7', description: null, urls: { regular: 'uptown-square/IMG_0880' } },
                { id: '8', description: null, urls: { regular: 'uptown-square/IMG_0881' } },
                { id: '9', description: null, urls: { regular: 'uptown-square/IMG_0884' } },
            ]
        },
        n002:
        {
            aptName: 'B&F Flats',
            address: '4926 Mission Ave. Dallas, TX 75206',
            mainImage: 'bnf-flats/BnF-Flats',
            duration: '1 Year',
            numberOfEmployed: 8,
            details: 'A Beautiful apartment complex in Dallas TX where amenities were important for the outmost pleasurable experience.  Contract did not involve units only amenities which include Televisions, speakers and controllers for the indoor, and outdoor and security.  Access Control was installed in a way which secured the whole entire property from unauthorized entrance.  Total Wifi connectivity and DAS cables to increase signal strength.  On the second floor is located a library like quiet computer centered which was wired for network connectivity.',
            images: [
                { id: '5', description: null, urls: { regular: 'bnf-flats/IMG_3559' } },
                { id: '6', description: null, urls: { regular: 'bnf-flats/IMG_3560' } },
                { id: '7', description: null, urls: { regular: 'bnf-flats/IMG_3561' } },
                { id: '8', description: null, urls: { regular: 'bnf-flats/IMG_3562' } },
                { id: '9', description: null, urls: { regular: 'bnf-flats/IMG_3563' } },
                { id: '10', description: null, urls: { regular: 'bnf-flats/IMG_3564' } },
                { id: '11', description: null, urls: { regular: 'bnf-flats/IMG_3666' } },
                { id: '12', description: null, urls: { regular: 'bnf-flats/IMG_3732' } },
                { id: '13', description: null, urls: { regular: 'bnf-flats/IMG_3733' } },
                { id: '14', description: null, urls: { regular: 'bnf-flats/IMG_3734' } }
            ]
        },
        n003:
        {
            aptName: 'Domain West',
            address: '611 Dairy Ashford Rd. Houston, TX 77079',
            mainImage: 'domain-west/DomainWest',
            duration: '1 Year',
            numberOfEmployed: 8,
            details: 'Domain West a fabulous apartment complex which involved a large contract.  The contract detailed wiring this 4 story 333 unit appartment complex including trim outs.  8 IDFs were setup and one MDF.  Amenities were also included to install 6 televisions and speakers in the kitchen/pool table area.  No speakers were installed in the pool area, but it made up for it by installing Outdoor weatherproof speakers in the Outdoor living area which was next to the pool.  Total Wifi connectivity and a gym full of televisions on the walls.',
            images: [
                { id: '1', description: null, urls: { regular: 'domain-west/IMG_1133' } },
                { id: '2', description: null, urls: { regular: 'domain-west/IMG_1135' } },
                { id: '3', description: null, urls: { regular: 'domain-west/IMG_1504' } },
                { id: '5', description: null, urls: { regular: 'domain-west/IMG_1505' } },
                { id: '6', description: null, urls: { regular: 'domain-west/IMG_1507' } },
                { id: '7', description: null, urls: { regular: 'domain-west/IMG_1508' } }
            ]
        },
        n004:
        {
            aptName: 'City Line',
            address: '1250 State St. Richardson, TX 75082',
            mainImage: 'city-line/CityLine',
            duration: '4 Years',
            numberOfEmployed: 10,
            details: 'City Line a very large complex, separate buildings but yet breath taking beauty with so much around.  This large contract was split into four phases and each one year duration (City A, B, C and D) each location had 400 units where the contract involved wiring each unit plus trimout.  DAS cables were installed in each to enhance mobile connectivity, including security cameras (indoor, outdoor, and in each unit), keypad and sirens for each unit. Amenities were included in the contract to install recessed speakers and televisions throughout each amenity.',
            images: [
                { id: '1', description: null, urls: { regular: 'city-line/IMG_1031' } },
                { id: '2', description: null, urls: { regular: 'city-line/IMG_1034' } },
                { id: '3', description: null, urls: { regular: 'city-line/IMG_1035' } },
                { id: '4', description: null, urls: { regular: 'city-line/IMG_1036' } },
                { id: '5', description: null, urls: { regular: 'city-line/IMG_1124' } },
                { id: '6', description: null, urls: { regular: 'city-line/IMG_1128' } },
                { id: '7', description: null, urls: { regular: 'city-line/IMG_1129' } },
                { id: '8', description: null, urls: { regular: 'city-line/IMG_1190' } },
                { id: '9', description: null, urls: { regular: 'city-line/IMG_1192' } },
                { id: '10', description: null, urls: { regular: 'city-line/IMG_1206' } },
                { id: '11', description: null, urls: { regular: 'city-line/IMG_1207' } },
                { id: '12', description: null, urls: { regular: 'city-line/IMG_1230' } },
                { id: '13', description: null, urls: { regular: 'city-line/IMG_1231' } },
                { id: '14', description: null, urls: { regular: 'city-line/IMG_1234' } },
                { id: '15', description: null, urls: { regular: 'city-line/IMG_1321' } },
                { id: '16', description: null, urls: { regular: 'city-line/IMG_1322' } },
                { id: '17', description: null, urls: { regular: 'city-line/IMG_1323' } },
                { id: '18', description: null, urls: { regular: 'city-line/IMG_1324' } },
                { id: '19', description: null, urls: { regular: 'city-line/IMG_1463' } },
                { id: '20', description: null, urls: { regular: 'city-line/IMG_1464' } },
                { id: '21', description: null, urls: { regular: 'city-line/IMG_1465' } },
                { id: '22', description: null, urls: { regular: 'city-line/IMG_1517' } },
                { id: '23', description: null, urls: { regular: 'city-line/IMG_1518' } },
                { id: '24', description: null, urls: { regular: 'city-line/IMG_1520' } },
                { id: '25', description: null, urls: { regular: 'city-line/IMG_1521' } },
                { id: '26', description: null, urls: { regular: 'city-line/IMG_1557' } },
                { id: '27', description: null, urls: { regular: 'city-line/IMG_1567' } },
                { id: '28', description: null, urls: { regular: 'city-line/IMG_1637' } },
                { id: '29', description: null, urls: { regular: 'city-line/IMG_1638' } },
                { id: '30', description: null, urls: { regular: 'city-line/IMG_1639' } },
                { id: '31', description: null, urls: { regular: 'city-line/IMG_2190' } },
                { id: '32', description: null, urls: { regular: 'city-line/IMG_2192' } },
                { id: '33', description: null, urls: { regular: 'city-line/IMG_2263' } },
                { id: '34', description: null, urls: { regular: 'city-line/IMG_2310' } }
            ]
        },
        n005:
        {
            aptName: 'The Branch',
            address: '4670 Amesbury Dr. Dallas, TX 75206',
            mainImage: 'the-branch/the-branch',
            duration: '8 Months',
            numberOfEmployed: 8,
            details: 'The Branch was an appartment complex that was constructed in phases, The contract was to pick up phase C which involved installing DAS cables to give mobile connectivity signal strength, Access control on all lower floor doors, all amenities which involved the clubhouse, fitness, computer room, entertainment, indoor and outdoor audio and indoor TVs',
            images: [
                { id: '1', description: null, urls: { regular: 'the-branch/IMG_6391' } },
                { id: '2', description: null, urls: { regular: 'the-branch/IMG_6392' } },
                { id: '3', description: null, urls: { regular: 'the-branch/IMG_6393' } },
                { id: '4', description: null, urls: { regular: 'the-branch/IMG_6398' } },
                { id: '5', description: null, urls: { regular: 'the-branch/IMG_6399' } },
                { id: '6', description: null, urls: { regular: 'the-branch/IMG_6400' } },
                { id: '7', description: null, urls: { regular: 'the-branch/IMG_6592' } },
                { id: '8', description: null, urls: { regular: 'the-branch/IMG_6594' } },
                { id: '9', description: null, urls: { regular: 'the-branch/IMG_6596' } }
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
                    <Route path="/project/001" exact render={(props) => <ProjectDetail
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
                    <Route path="/project/005" exact render={(props) => <ProjectDetail
                        aptName={this.state.n005.aptName}
                        address={this.state.n005.address}
                        duration={this.state.n005.duration}
                        numberOfEmployed={this.state.n005.numberOfEmployed}
                        details={this.state.n005.details}
                        mainImage={this.state.n005.mainImage}
                        images={this.state.n005.images}
                    />}
                    />
                    {/* <Route path="/project/006" exact render={(props) => <ProjectDetail
                        aptName={this.state.n006.aptName}
                        address={this.state.n006.address}
                        duration={this.state.n006.duration}
                        numberOfEmployed={this.state.n006.numberOfEmployed}
                        details={this.state.n006.details}
                        mainImage={this.state.n006.mainImage}
                        images={this.state.n006.images}
                    />} */}
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