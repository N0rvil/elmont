import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history'

import LandingPage from './LandingPage/LandingPage';
import About from './About/About';
import Offers from './Offers/Offers';
import Photos from './Photos/Photos';
import PriceList from './PriceList/PriceList';
import Contact from './Contact/Contact';

import './App.scss';

const App = () =>{
    return (
        <div className='app'>  
            <Router history={history}>      
                <Switch>
                        <Route path='/' exact component={LandingPage} />
                        <Route path='/about' exact component={About} />
                        <Route path='/offers' exact component={Offers} />
                        <Route path='/photos' exact component={Photos} />
                        <Route path='/pricelist' exact component={PriceList} />
                        <Route path='/contact' exact component={Contact} />
                </Switch>
            </Router> 
        </div>
    ) 
};

export default App;