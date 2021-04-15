import React from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './LandingPage.scss'

const LandingPage = () =>{
    return (
        <div className='landingpage'>
            <Header />
            <Navbar />    
            <div className='landingpage__content' style={{ backgroundImage: "url('/images/landingpage-bg.png')"}}>   
                    <h1 className='landingpage__header'>ren-dek</h1>
                    <div className='landingpage__line'></div>
                    <h3 className='landingpage__text'>kvalitní elektroinstalace</h3>      
            </div>
            <Footer />
        </div>
    ) 
};

export default LandingPage;