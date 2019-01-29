import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Footer } from 'mdbreact';

import HomeIndex from './Home';
import ContactNew from './ContactForm';
import ProjectShow from './ProjectDetail';
import NavBar from './NavBar';

const App = () => {
    return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Route path="/" exact component={HomeIndex} />
                    <Route path="/contact/new" component={ContactNew} />
                    <Route path="/project/:id" component={ProjectShow} />
                    <Footer color="indigo">
                        <p className="footer-copyright mb-0 py-3 text-center text-secondary">
                            &copy; {new Date().getFullYear()} Copyright:{" "} streamlinewiring.com
                    </p>
                    </Footer>
                </div>
            </BrowserRouter>
    );
};

export default App;