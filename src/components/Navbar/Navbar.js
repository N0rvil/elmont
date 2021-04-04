import React, { useState, useEffect, useRef } from 'react';

import history from '../history';

import './Navbar.scss';

const Navbar = () =>{
    const [open, setOpen] = useState(false);
    const ref = useRef();

    let lineStyle1 = open ? "navbar__line-active" : "navbar__line-1 navbar__line";
    let lineStyle2 = open ? "navbar__line-active" : "navbar__line-2 navbar__line";
    let lineStyle3 = open ? "navbar__line-active" : "navbar__line-3 navbar__line";


    useEffect(() => {
        const onBodyClick = (event) => {
           try {
                if (ref.current.contains(event.target)) {
                    return;
                }
            } catch(err) {
                
            }

          setOpen(false);
         };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };

      }, []);

      
      const checkIsOpen = () => {
        if(open === true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }


    const navbarList = () => {
        if(open === true) {
            return(
                    <ul className='navbar__list'>
                        <li className='navbar__item' onClick={() => history.push('/')}>Domů</li>
                        <li className='navbar__item' onClick={() => history.push('/about')}>O nás</li>
                        <li className='navbar__item' onClick={() => history.push('/offers')}>Naše služby</li>
                        <li className='navbar__item' onClick={() => history.push('/photos')}>Foto prací</li>
                        <li className='navbar__item' onClick={() => history.push('/pricelist')}>Ceník</li>
                        <li className='navbar__item' onClick={() => history.push('/contact')}>Kontakt</li>
                    </ul>
            )
        }
    }


    return (
        <div className='navbar'>
            <div className='navbar__box' ref={ref} onClick={() => { checkIsOpen(); setOpen(!open); }}>
                <div className={lineStyle1}></div>
                <div className={lineStyle2}></div>
                <div className={lineStyle3}></div>
            </div>
            <div className='navbar__content'>
                {navbarList()}
            </div>
        </div>
    ) 
};

export default Navbar;