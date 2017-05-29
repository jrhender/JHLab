import React from 'react';
import {Link} from 'react-router-dom';
import './../styles/Header.css';
import jhFace from './../images/John-Face.png';

const Header = (props) => {
    return (
        <div className="App-header">
            <div id="LogoAndName">
                <img src={jhFace} alt="logo" />
                <h1>JH Code Lab</h1>
            </div>
            <nav className="site-navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;