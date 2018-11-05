import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';


import './Assets/css/creative.css';
import reducers from './reducers';
import HomeIndex from './components/pageComponents/home_index';
import ContactNew from './components/pageComponents/contact_form';
import ProjectShow from './components/pageComponents/project_show';
// import Header from './components/headerfooterComponents/header';


import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    {/* <Route path="/" component={ Header } /> */}
                    <Route path="/contact/new" component={ ContactNew } />
                    <Route path="/project/:id" component={ ProjectShow } />
                    <Route path="/" component={ HomeIndex } />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>

, document.getElementById('root'));

registerServiceWorker();
