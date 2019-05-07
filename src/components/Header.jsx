import React from 'react';
import logo from '../images/logo.png'; 
// import '../index.css'
import '../styles/main.css';

const Header = (props) => {
    return (
        <header>
            <div className="header__logo">
                <img src={logo} alt="Logo" />
                <div className="header__title">
                    <p>Weather Channel</p>
                </div> 
            </div>  
            
        </header>      
    );
}

export default Header;

