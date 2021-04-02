import React from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import './Photos.scss'

const Photos = () =>{
    return (
        <div className='photos'>
            <Header />
            <Navbar />
            <div className='photos__content'>
                Fotky prací
            </div>
        </div>
    ) 
};

export default Photos;