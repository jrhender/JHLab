import React from 'react';
import './../styles/Footer.css';
//import twitterLogo from './../images/Twitter_Logo_White_On_Image.svg';
import twitterLogo from './../images/Twitter_Logo_White_On_Blue.svg';
import linkedinLogo from './../images/In-2CRev-28px-R.png';

const Footer = (props) => {
    return (
        <div className="App-footer">
            <p>Connect:</p>
            <a href="https://twitter.com/JohnRTHenderson" className='twitter-logo'>
                <img src={twitterLogo} />
            </a>
            <a href="https://www.linkedin.com/in/jhend/" className='linkedin-logo'>
                <img src={linkedinLogo} />
            </a>
        </div>
    )
}

export default Footer;