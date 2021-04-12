import React from 'react';

import './Header.scss';

const Header = () =>{
    return (
        <div className='header'>       
                <img className='header__logo' src='./images/logo.png' alt='logo' />
                <h2 className='header__name'>Ren-dek</h2>
                <h3 className='header__text'>- elektroinstalační práce, slaboproud i silnoproud, hromosvody, revize</h3>      
        </div>
    ) 
};

export default Header;