import React from 'react';
import './Header.css';
import jhFace from './John-Face.png';

const Header = (props) => {
    return (
        <div className="App-header">
            <img src={jhFace} alt="logo" />
            <h1>JH Code Lab</h1>
            <nav className="site-navigation">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Resume</a></li>
                    <li><a href="">Projects</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;