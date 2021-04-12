import React from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './About.scss'

const About = () =>{
    return (
        <div className='about'>
            <Header />
            <Navbar />
            <div className='about__content'>
                <div className='about__info'>
                    <h1 className='about__header'>o nás</h1>
                    <p className='about__text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo
                        remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritati
                        s et quasi architecto beatae vitae dicta sunt explicabo.
                         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odi
                        t aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                </div>
                <div className='about__field'>
                    <div className='about__field-box'>
                        <img className='about__icon-small' alt='icon' src='./images/wrench-icon.png' />
                        <img className='about__icon-big' alt='icon' src='./images/worker-icon.png' />
                        <img className='about__icon-small' alt='icon' src='./images/socket-icon.png' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    ) 
};

export default About;