import React from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import './PriceList.scss'

const PriceList = () =>{
    return (
        <div className='pricelist'>
            <Header />
            <Navbar />
            <div className='pricelist__content'>
                Ceník
            </div>
        </div>
    ) 
};

export default PriceList;