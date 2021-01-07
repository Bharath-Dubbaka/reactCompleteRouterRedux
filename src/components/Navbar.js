import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar =() => {
    return (
        <nav className='nav-wrapper #4e342e brown darken-3'>
            <div className='container'>
                <a className='brand-logo'>Ninja</a>
                <ul className='right'>
                    <li><Link to='/'>Home</Link></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;