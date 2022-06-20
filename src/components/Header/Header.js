import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav>
            <div className='header'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header-info">
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/service">Service</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;