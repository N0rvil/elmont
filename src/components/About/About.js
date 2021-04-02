import React from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import './About.scss'

const About = () =>{
    return (
        <div className='about'>
            <Header />
            <Navbar />
            <div className='about__content'>
                O nás
            </div>
        </div>
    ) 
};

export default About;