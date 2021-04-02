import React from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import './Offers.scss'

const Offers = () =>{
    return (
        <div className='offers'>
            <Header />
            <Navbar />
            <div className='offers__content'>
                Naše služby
            </div>
        </div>
    ) 
};

export default Offers;