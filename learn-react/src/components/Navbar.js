import React from 'react';
import LogoImage from '../images/Logo.png';

export default function Navbar() {
    return (
        
        <nav>
            <div className="logo-container">
                <img src={LogoImage} alt="Logo-image"/>
            </div>
        </nav>
        
    )
}