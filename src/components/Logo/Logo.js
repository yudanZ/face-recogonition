import React from 'react';
import './logo.css';
import logo from './logo.png';

const Logo = () => {
    return (
        <div className="logo">
                <div className="logo-inner">
                    <img className="logo-image" style={{width: '100%',padding: '5px'}} src={logo} alt='logo'></img>
                </div>  
        </div>
    );
}

export default Logo;