import React from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './Contact.scss'

const Contact = () =>{
    return (
        <div className='contact'>
            <Header />
            <Navbar />
            <div className='contact__content'>
                <h1 className='contact__header'>jak nás kontaktovat ?</h1>
                <div className='contact__box'>
                    <div className='contact__info'>
                        <img className='contact__icon' src='./images/phone-icon.png' alt='phone-icon' />
                        <h2 className='contact__address'>+420 738 549 624</h2>
                    </div>
                    <div className='contact__info'>
                        <img className='contact__icon' src='./images/email-icon.png' alt='phone-icon' />
                        <h2 className='contact__address'>tomas.rendek@ren-dek.cz</h2>
                    </div>
                    <div className='contact__info'>
                        <img className='contact__icon' src='./images/facebook-icon.png' alt='phone-icon' />
                        <h2 className='contact__address'>https://www.facebook.com/ren-dek</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    ) 
};

export default Contact;