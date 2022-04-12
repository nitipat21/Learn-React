import React from 'react';
import ReactLogo from '../images/logo192.png';

export default function Navbar() {
    return (
        
        <nav>
            <div className="nav-left">
                <div className="logo-container">
                    <img src={ReactLogo} alt="ReactLogo"/>
                </div>
                <div className="name-container">
                    <h1>ReactFacts</h1>
                </div>
            </div>
            <div className="nav-right">
                <div className="text-container">
                    <h1>React Course - Project 1</h1>
                </div>
            </div>
        </nav>
        
    )
}