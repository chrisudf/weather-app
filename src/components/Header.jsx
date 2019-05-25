import React from 'react';
import logo from '../images/logo.png'; 
// import '../index.css'
import '../styles/main.css';

const Header = (props) => {
    return (
        <header>
            <img className="header__logo" src = {logo} alt = "logo"   />
            <h1 className="header__title">Weather Channel</h1>
        </header>      
    );
}

export default Header;

