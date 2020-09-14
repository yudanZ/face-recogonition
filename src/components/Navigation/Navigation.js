import React from 'react';
import './navigation.css';
import logo from './logo.png';

const Navigation =({onRouteChange, isSignedIn}) => {
    if(isSignedIn){
        return(
            <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                <a className="navbar-brand mr-0 mr-md-2"  href="#0">
                    <img className="nav_logo" src={logo}   alt="logo" loading="lazy" />
                </a>
                <ul className="navbar-nav ml-md-auto"> 
                    <li className='nav-item'>
                        <a onClick={()=>onRouteChange('signout')} className="nav-link " style={{fontSize:'1.5rem'}} href="#0">Sign Out</a>
                    </li>
                        
                </ul>
                
            </nav>
        );
            
        }else {
            return (
                <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                    <a className="navbar-brand mr-0 mr-md-2" href="#0">
                        <img className="nav_logo" src={logo} width="36" height="36" alt="logo" loading="lazy" />
                    </a>
                    <ul className="navbar-nav ml-md-auto">
                        <li className='nav-item'>
                            <a onClick={()=>onRouteChange('register')} className="nav-link" style={{fontSize:'1.5rem'}} href="#0">Register</a>
                        </li>
                        <li className='nav-item'>
                            <a onClick={()=>onRouteChange('signin')} className="nav-link " style={{fontSize:'1.5rem'}} href="#0">Sign In</a>
                        </li>
                        
                    </ul>
                    
                </nav>
            );
            
        }
    
}

export default Navigation;