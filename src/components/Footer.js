import React from 'react';
import './../styles/Footer.css';
import twitterLogo from './../images/Twitter_Logo_White_On_Image.svg';

const Footer = (props) => {
    return (
        <div className="App-footer">
            <p>Connect:</p>
            <a href="https://twitter.com/JohnRTHenderson" className='twitter-logo'>
                <img src={twitterLogo} />
            </a>
        </div>
    )
}

export default Footer;