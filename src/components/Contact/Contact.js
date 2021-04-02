import React from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import './Contact.scss'

const Contact = () =>{
    return (
        <div className='contact'>
            <Header />
            <Navbar />
            <div className='contact__content'>
                Ceník
            </div>
        </div>
    ) 
};

export default Contact;