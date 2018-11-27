import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import { Footer } from "mdbreact";


import './Assets/css/creative.css';
import reducers from './reducers';
import HomeIndex from './components/pageComponents/home_index';
import ContactNew from './components/pageComponents/contact_form';
import ProjectShow from './components/pageComponents/project_show';
import Navigation from './components/headerfooterComponents/navigation_bar';
import Navigation2 from './components/headerfooterComponents/navigation_bar2';

import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Navigation2 />
                <Switch>
                    <Route path="/contact/new" component={ContactNew} />
                    <Route path="/project/:id" component={ProjectShow} />
                    <Route path="/" component={HomeIndex} />
                </Switch>
                <Footer color="indigo">
                    <p className="footer-copyright mb-0 py-3 text-center text-secondary">
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        streamlinewiring.com
                    </p>
                </Footer>
            </div>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

registerServiceWorker();
